import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type PartnerProgramProps =
  SliceComponentProps<Content.PartnerProgramSlice>;

/**
 * PartnerProgram — sección oscura del Figma "Case study Jr".
 * Card 1243×782, gradiente #212121→#000 (222.63deg), radius 24, padding 70.
 * Header: badge naranja (topline), headline DM Sans 36/140%, copy DM Sans 300 24.
 * 3 cards #282828 (imagen + headline 18 + copy 16) desde el grupo `cards`.
 */
const PartnerProgram: FC<PartnerProgramProps> = ({ slice }) => {
  const { topline, headline, copy, cards } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-canvas"
    >
      <div className="mx-auto w-full max-w-[1495px] px-6 py-16 xl:py-[100px]">
        <div className="relative mx-auto flex w-full max-w-[1243px] flex-col items-start gap-12 overflow-hidden rounded-[24px] bg-[linear-gradient(222.63deg,#212121_15.95%,#000000_83.67%)] px-6 py-14 xl:gap-[70px] xl:px-0 xl:py-[70px]">
          {/* TODO: curvas decorativas de fondo (Frame 1073715037) — líneas onduladas
              teal #50E3C2 / rojo #FF4C4C / púrpura #BD10E0, detrás de las cards (z-0).
              Pendiente: exportar el PNG desde Figma. */}

          {/* Header */}
          <div className="relative z-[1] flex w-full flex-col items-center gap-2 xl:px-[252px]">
            <div className="flex w-full max-w-[739px] flex-col items-start gap-4">
              {isFilled.keyText(topline) && (
                <span className="inline-flex items-center rounded-full border-2 border-brand bg-[#282828] px-2.5 py-1 font-sans text-[12px] uppercase leading-4 tracking-[0.02em] text-white shadow-[0px_8px_8px_rgba(0,0,0,0.1),0px_1px_4px_rgba(0,0,0,0.25)]">
                  {topline}
                </span>
              )}

              {isFilled.keyText(headline) && (
                <h2 className="max-w-[647px] font-sans text-[28px] leading-[140%] text-[#f8f8f8] xl:text-[36px]">
                  {headline}
                </h2>
              )}
            </div>

            {isFilled.richText(copy) && (
              <div className="w-full max-w-[739px] font-sans text-[18px] font-light leading-[140%] tracking-[0.02em] text-[#ececec] xl:text-[24px] [&_p]:my-0">
                <PrismicRichText field={copy} />
              </div>
            )}
          </div>

          {/* Cards */}
          <div className="relative z-[1] flex w-full flex-col gap-5 xl:flex-row xl:px-[102px]">
            {cards.map((card, i) => (
              <article
                key={i}
                className="flex flex-1 flex-col overflow-hidden rounded-[16px] bg-[#282828] shadow-[0px_4px_36px_rgba(0,0,0,0.1),0px_0px_1px_rgba(0,0,0,0.16)]"
              >
                {isFilled.image(card.image) && (
                  <div className="p-6">
                    <PrismicNextImage
                      field={card.image}
                      fallbackAlt=""
                      className="aspect-[285/178] w-full rounded-[8px] object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-4 px-6 pb-8">
                  {isFilled.keyText(card.headline) && (
                    <h3 className="font-sans text-[18px] font-medium leading-[23px] text-white">
                      {card.headline}
                    </h3>
                  )}

                  {isFilled.richText(card.copy) && (
                    <div className="font-sans text-[16px] leading-[140%] tracking-[0.02em] text-[#ececec] [&_p]:my-0">
                      <PrismicRichText field={card.copy} />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
