"use client";

import { useState } from "react";
import { business, serviceOptions } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1 block w-full min-h-12 border border-navy-900/40 bg-white px-3 py-2 text-ink placeholder:text-gray-500 focus:border-navy-900";
const label = "block font-display text-base font-bold uppercase tracking-wider text-navy-900";

export function InspectionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/inspection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setError("We couldn't send that. Please call us instead.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l-4 border-red bg-paper p-6">
        <h3 className="font-display text-3xl font-extrabold uppercase text-navy-900">Request received</h3>
        <p className="mt-2">
          Thanks. We&rsquo;ll reach out about your free inspection. If it&rsquo;s urgent, call{" "}
          <a href={business.phoneHref} className="font-bold underline">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="address" className={label}>Property Address</label>
        <input id="address" name="address" type="text" autoComplete="street-address" className={field} />
      </div>
      <div>
        <label htmlFor="service" className={label}>Service Needed</label>
        <select id="service" name="service" required defaultValue="" className={field}>
          <option value="" disabled>Select one</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>
      {/* Honeypot: real visitors never see or fill this */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && (
        <p role="alert" className="border-l-4 border-red bg-paper p-3 font-semibold text-red-dark">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-14 w-full bg-red px-6 py-3 font-display text-xl font-bold uppercase tracking-wider text-white hover:bg-red-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Request Free Inspection"}
      </button>
      <p className="text-sm text-gray-600">
        Prefer to talk? Call{" "}
        <a href={business.phoneHref} className="font-bold text-navy-900 underline">
          {business.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}
