import { business, serviceOptions } from "@/lib/site";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const address = clean(body.address, 200);
  const service = clean(body.service, 60);
  const message = clean(body.message, 2000);

  if (!name || phone.replace(/\D/g, "").length < 7) {
    return Response.json({ error: "Please enter your name and a phone number." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email address doesn't look right." }, { status: 400 });
  }
  if (!(serviceOptions as readonly string[]).includes(service)) {
    return Response.json({ error: "Please choose a service." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL || business.email;

  if (!apiKey || !from) {
    // Not configured yet: never silently drop a lead.
    console.error("Lead form not configured (RESEND_API_KEY / LEAD_FROM_EMAIL). Lead:", {
      name, phone, email, address, service, message,
    });
    return Response.json(
      { error: `Our form isn't available right now. Please call ${business.phoneDisplay}.` },
      { status: 503 },
    );
  }

  const html = `<h2>New free inspection request</h2>
<p><b>Name:</b> ${esc(name)}<br><b>Phone:</b> ${esc(phone)}<br><b>Email:</b> ${esc(email) || "n/a"}<br>
<b>Address:</b> ${esc(address) || "n/a"}<br><b>Service:</b> ${esc(service)}</p>
<p>${esc(message) || "(no message)"}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email || undefined,
      subject: `Free inspection request: ${service} (${name})`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json(
      { error: `We couldn't send that. Please call ${business.phoneDisplay}.` },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
