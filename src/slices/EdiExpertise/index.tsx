import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type EdiExpertiseProps = SliceComponentProps<Content.EdiExpertiseSlice>;

/**
 * EdiExpertise — Figma "Case study Jr".
 * Intro (headline DM Sans 700 36, copy DM Sans 300 36, #070707) + banda de quote
 * (Quando 36 centrado con subrayado naranja y líneas laterales) + grid 3×2 de
 * cards 412×448 (imagen de fondo con gradiente oscuro, título/copy blancos abajo).
 */
const EdiExpertise: FC<EdiExpertiseProps> = ({ slice }) => {
  const { headline, copy, quote, cards } = slice.primary;

  // El subrayado naranja va solo debajo de "Let's talk.", no centrado bajo todo
  // el quote. Separamos esa frase final del resto.
  const quoteText = isFilled.keyText(quote) ? quote : "";
  const quoteMatch = quoteText.match(/^([\s\S]*?)\s*(let[’']s talk\.?)\s*$/i);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-canvas text-[#070707]"
    >
      <div className="mx-auto w-full max-w-[1495px] px-6 py-16 xl:py-[100px]">
        {/* Intro */}
        <div className="mx-auto max-w-[990px]">
          {isFilled.keyText(headline) && (
            <h2 className="font-sans text-[28px] font-bold leading-[140%] xl:text-[36px]">
              {headline}
            </h2>
          )}
          {isFilled.richText(copy) && (
            <div className="mt-4 font-sans text-[22px] font-light leading-[140%] xl:text-[36px] [&_p]:my-0">
              <PrismicRichText field={copy} />
            </div>
          )}
        </div>

        {/* Banda de quote */}
        {quoteText && (
          <div className="my-16 flex items-center justify-between gap-6 xl:my-24">
            <span className="hidden h-px w-[253px] shrink-0 bg-[#949494] xl:block" />
            <p className="mx-auto max-w-[737px] text-center font-serif text-[28px] leading-[140%] text-black xl:text-[36px]">
              {quoteMatch ? quoteMatch[1] : quoteText}
              {quoteMatch && (
                <>
                  {" "}
                  <span className="relative inline-block whitespace-nowrap">
                    {quoteMatch[2]}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-full mt-2 block h-[7px] bg-brand"
                    />
                  </span>
                </>
              )}
            </p>
            <span className="hidden h-px w-[253px] shrink-0 bg-[#949494] xl:block" />
          </div>
        )}

        {/* Grid de cards */}
        <div className="mx-auto grid max-w-[1316px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <article
              key={i}
              className="relative flex aspect-[412/448] flex-col justify-end overflow-hidden rounded-[24px] px-9 py-[30px]"
            >
              {isFilled.image(card.image) && (
                <PrismicNextImage
                  field={card.image}
                  fallbackAlt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 412px"
                  className="object-cover"
                />
              )}
              {/* Gradiente para legibilidad del texto (abajo) */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.1)_100%)]"
              />

              <div className="relative flex flex-col gap-4">
                {isFilled.keyText(card.headline) && (
                  <h3 className="font-sans text-[22px] font-bold leading-[140%] text-white xl:text-[24px]">
                    {card.headline}
                  </h3>
                )}
                {isFilled.richText(card.copy) && (
                  <div className="font-sans text-[18px] leading-[160%] tracking-[0.02em] text-white xl:text-[24px] [&_p]:my-0">
                    <PrismicRichText field={card.copy} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdiExpertise;
