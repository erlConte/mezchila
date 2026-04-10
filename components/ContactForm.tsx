"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { contactPageContent } from "@/lib/content/contact";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(
    nome: string,
    email: string,
    messaggio: string
  ): Record<string, string> {
    const err: Record<string, string> = {};
    if (!nome.trim()) err.nome = "Il nome è obbligatorio";
    if (!email.trim()) err.email = "L'email è obbligatoria";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      err.email = "Inserisci un'email valida";
    if (!messaggio.trim()) err.messaggio = "Il messaggio è obbligatorio";
    return err;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.nome as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const messaggio = (form.messaggio as HTMLTextAreaElement).value;

    const err = validate(nome, email, messaggio);
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    setErrors({});
    setState("submitting");
    setTimeout(() => setState("success"), 800);
  }

  if (state === "success") {
    return (
      <div
        className="rounded-lg border border-olive/25 bg-olive/10 p-8 sm:p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle
          size={40}
          className="mx-auto text-olive mb-4"
          aria-hidden
        />
        <p className="font-medium text-charcoal">
          {contactPageContent.form.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-label="Modulo di contatto"
    >
      <div>
        <label
          htmlFor="contact-nome"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          {contactPageContent.form.nome} *
        </label>
        <input
          id="contact-nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-ivory-dark bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/45 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive transition-colors"
          placeholder="Mario Rossi"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "err-nome" : undefined}
        />
        {errors.nome && (
          <p id="err-nome" className="mt-1.5 text-sm text-red-600" role="alert">
            {errors.nome}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          {contactPageContent.form.email} *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-ivory-dark bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/45 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive transition-colors"
          placeholder="mario@azienda.it"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && (
          <p
            id="err-email"
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="contact-azienda"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          {contactPageContent.form.azienda}
        </label>
        <input
          id="contact-azienda"
          name="azienda"
          type="text"
          autoComplete="organization"
          className="w-full rounded-md border border-ivory-dark bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/45 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive transition-colors"
          placeholder="Nome azienda"
        />
      </div>
      <div>
        <label
          htmlFor="contact-messaggio"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          {contactPageContent.form.messaggio} *
        </label>
        <textarea
          id="contact-messaggio"
          name="messaggio"
          rows={5}
          required
          className="w-full rounded-md border border-ivory-dark bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/45 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive resize-y min-h-[120px] transition-colors"
          placeholder="Scrivi il tuo messaggio..."
          aria-invalid={!!errors.messaggio}
          aria-describedby={errors.messaggio ? "err-messaggio" : undefined}
        />
        {errors.messaggio && (
          <p
            id="err-messaggio"
            className="mt-1.5 text-sm text-red-600"
            role="alert"
          >
            {errors.messaggio}
          </p>
        )}
      </div>
      {state === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {contactPageContent.form.error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded-md bg-charcoal px-6 py-3 text-sm font-medium text-ivory hover:bg-charcoal-soft transition-colors disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2"
      >
        {state === "submitting"
          ? "Invio in corso..."
          : contactPageContent.form.invia}
      </button>
    </form>
  );
}
