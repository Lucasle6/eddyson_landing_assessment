"use client";

import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * ContactForm — Figma "Case study Jr".
 * Texto editorial (headline/copy) desde Prismic + card de formulario a la derecha.
 * Los campos del formulario son lógica funcional (no contenido), por eso van
 * estáticos aquí. TODO: cablear el submit a un backend / route handler.
 */

type Field =
  | { kind: "input"; name: string; label: string; placeholder: string; type?: string; required?: boolean }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean };

const FIELDS: Field[] = [
  { kind: "input", name: "name", label: "Name", placeholder: "Your name", required: true },
  { kind: "input", name: "company", label: "Company", placeholder: "Company name", required: true },
  { kind: "input", name: "email", label: "Email", type: "email", placeholder: "you@company.com", required: true },
  { kind: "input", name: "phone", label: "Phone", type: "tel", placeholder: "+49 000 0000000" },
  { kind: "select", name: "partnerType", label: "Partner type", required: true, options: ["Reseller", "Referral", "Technology", "Consulting"] },
  { kind: "select", name: "industries", label: "Industries", options: ["Automotive", "Grocery", "Retail", "Logistics", "Other"] },
  { kind: "input", name: "system", label: "System", placeholder: "e.g. SAP, Microsoft Dynamics" },
  { kind: "input", name: "comments", label: "Comments", placeholder: "Tell us about your use case" },
];

const fieldBox =
  "w-full rounded-[8px] border border-[#161616]/[0.16] bg-white px-3 py-2.5 text-[14px] text-[#161616] shadow-[0px_1px_2px_rgba(0,0,0,0.1)] outline-none transition-colors placeholder:text-[#949494] focus:border-brand";

const RequiredDot = () => (
  <span className="ml-1 inline-block size-1 rounded-full bg-[#C43A36] align-middle" aria-hidden />
);

const FloatingLabel: FC<{ htmlFor: string; label: string; required?: boolean }> = ({ htmlFor, label, required }) => (
  <label
    htmlFor={htmlFor}
    className="absolute -top-2 left-2 z-[1] bg-white px-1 text-[12px] leading-none text-[#474747]"
  >
    {label}
    {required && <RequiredDot />}
  </label>
);

const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  const { headline, copy, cta_label } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-canvas"
    >
      <div className="mx-auto flex w-full max-w-[1495px] flex-col gap-12 px-6 py-16 xl:flex-row xl:items-center xl:justify-center xl:gap-[110px] xl:py-[100px]">
        {/* Texto editorial */}
        <div className="w-full max-w-[612px]">
          {isFilled.keyText(headline) && (
            <h2 className="font-sans text-[28px] font-bold leading-[140%] text-[#070707] xl:text-[36px]">
              {headline}
            </h2>
          )}
          {isFilled.richText(copy) && (
            <div className="mt-4 font-sans text-[20px] font-light leading-[140%] text-[#474747] xl:text-[36px] [&_p]:my-0">
              <PrismicRichText field={copy} />
            </div>
          )}
        </div>

        {/* Card de formulario */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-[558px] flex-col gap-6 rounded-[24px] bg-white p-9 shadow-[0px_4px_24px_rgba(0,0,0,0.1),0px_1px_4px_rgba(0,0,0,0.16)]"
        >
          {FIELDS.map((field) => (
            <div key={field.name} className="relative">
              <FloatingLabel htmlFor={field.name} label={field.label} required={field.required} />

              {field.kind === "input" ? (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={fieldBox}
                />
              ) : (
                <div className="relative">
                  <select
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    defaultValue=""
                    className={`${fieldBox} appearance-none pr-9 text-[#949494] valid:text-[#161616]`}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt} className="text-[#161616]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#949494]"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}

          {/* Checkbox privacidad */}
          <label className="flex items-start gap-2 text-[14px] leading-[120%] text-[#474747]">
            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-0.5 size-4 shrink-0 appearance-none rounded-[4px] border border-[#949494]/40 bg-white shadow-[0px_2px_3px_rgba(148,148,148,0.2)] checked:border-[#E46A1C] checked:bg-[#E46A1C] checked:bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%20fill=%22none%22><path%20d=%22M4%208l3%203%205-6%22%20stroke=%22white%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/></svg>')] checked:bg-center checked:bg-no-repeat"
            />
            <span>By submitting this form, I agree with the privacy policy</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="flex h-[57px] w-full items-center justify-center rounded-[8px] bg-ink-strong px-6 text-[16px] font-medium tracking-[0.02em] text-canvas shadow-[0px_1px_8px_rgba(0,0,0,0.25)] transition-colors hover:bg-ink"
          >
            {isFilled.keyText(cta_label) ? cta_label : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
