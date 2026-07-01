import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type FooterProps = SliceComponentProps<Content.FooterSlice>;

// Certificados / sellos (estáticos, no editoriales). Orden según el Figma.
const CERTS = [
  { src: "/Images/footer/certs/software-made.avif", alt: "Software Made in Germany", h: 96 },
  { src: "/Images/footer/certs/software-hosted.avif", alt: "Software Hosted in Germany", h: 88 },
  { src: "/Images/footer/certs/gs1.avif", alt: "GS1", h: 92 },
  { src: "/Images/footer/certs/crefozert.avif", alt: "Crefozert", h: 104 },
];

const iconForPlatform = (platform: string | null | undefined): string | null => {
  const p = (platform ?? "").toLowerCase();
  if (p.includes("linkedin")) return "/icons/linkedin.svg";
  if (p.includes("xing")) return "/icons/xing.svg";
  return null;
};

/**
 * Footer — Figma "Case study Jr". Fondo #161616, texto blanco DM Sans 24.
 * Columnas: dirección · contacto (Contact/Sales/North America) · Links + Follow us
 * (redes + botón Contact Sales). Fila de certificados abajo. Todo desde Prismic
 * salvo los sellos de certificación.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  const {
    address,
    contact_general_label,
    contact_general_phone,
    contact_sales_label,
    contact_sales_phone,
    contact_na_label,
    contact_na_phone,
    links,
    social_links,
  } = slice.primary;

  return (
    <footer
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-ink-strong text-white"
    >
      <div className="mx-auto w-full max-w-[1495px] px-6 py-20 xl:px-[122px] xl:py-[120px]">
        {/* Logo con el mark en naranja sobre fondo oscuro (el SVG de Prismic viene
            todo en blanco, así que usamos la variante coloreada para el footer). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/eddyson-logo-footer.svg"
          alt="eddyson"
          className="h-[54px] w-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
          {/* Dirección */}
          {isFilled.richText(address) && (
            <address className="font-sans text-[18px] not-italic leading-[140%] tracking-[0.02em] xl:text-[24px] [&_p]:my-0">
              <PrismicRichText field={address} />
            </address>
          )}

          {/* Contacto */}
          <div className="font-sans text-[18px] leading-[140%] tracking-[0.02em] xl:text-[24px]">
            {isFilled.keyText(contact_general_label) && (
              <h3 className="mb-4 font-bold">{contact_general_label}</h3>
            )}
            {isFilled.keyText(contact_general_phone) && (
              <a href={`tel:${contact_general_phone}`} className="block hover:text-brand">
                {contact_general_phone}
              </a>
            )}
            {isFilled.keyText(contact_sales_label) && (
              <p className="mt-6">{contact_sales_label}</p>
            )}
            {isFilled.keyText(contact_sales_phone) && (
              <a href={`tel:${contact_sales_phone}`} className="block hover:text-brand">
                {contact_sales_phone}
              </a>
            )}
            {isFilled.keyText(contact_na_label) && (
              <p className="mt-6">{contact_na_label}</p>
            )}
            {isFilled.keyText(contact_na_phone) && (
              <a href={`tel:${contact_na_phone}`} className="block hover:text-brand">
                {contact_na_phone}
              </a>
            )}
          </div>

          {/* Links + Follow us */}
          <div className="flex flex-col gap-[68px] font-sans text-[18px] leading-[140%] tracking-[0.02em] xl:text-[24px]">
            {links.length > 0 && (
              <div>
                <h3 className="mb-4 font-bold">Links</h3>
                <ul className="flex flex-col gap-2">
                  {links.map((item, i) => (
                    <li key={i}>
                      {isFilled.link(item.url) ? (
                        <PrismicNextLink field={item.url} className="hover:text-brand">
                          {item.label}
                        </PrismicNextLink>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="mb-4 font-bold">Follow us</h3>
              <div className="flex flex-col gap-[47px]">
                {social_links.length > 0 && (
                  <div className="flex items-end gap-4">
                    {social_links.map((sl, i) => {
                      const icon = iconForPlatform(sl.platform);
                      if (!icon) return null;
                      const img = (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={icon}
                          alt={sl.platform ?? ""}
                          className="h-[42px] w-auto brightness-0 invert"
                        />
                      );
                      return isFilled.link(sl.url) ? (
                        <PrismicNextLink key={i} field={sl.url} aria-label={sl.platform ?? undefined}>
                          {img}
                        </PrismicNextLink>
                      ) : (
                        <span key={i}>{img}</span>
                      );
                    })}
                  </div>
                )}

                {isFilled.keyText(contact_sales_phone) && (
                  <a
                    href={`tel:${contact_sales_phone}`}
                    className="inline-flex h-[62px] w-full max-w-[358px] items-center justify-center rounded-[8px] bg-canvas px-6 text-[20px] font-medium tracking-[0.02em] text-ink-strong shadow-[0px_1px_8px_rgba(0,0,0,0.25)] transition-colors hover:bg-white"
                  >
                    Contact Sales
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Certificados */}
        <div className="mt-16 flex flex-wrap items-center gap-9 xl:mt-24">
          {CERTS.map((cert) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={cert.src}
              src={cert.src}
              alt={cert.alt}
              style={{ height: cert.h }}
              className="w-auto"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
