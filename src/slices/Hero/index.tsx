import { FC } from "react";
import Image from "next/image";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Hero — reconstruido pixel-perfect desde el Figma "Case study Jr".
 * Tokens: título Quando 62/160% #212121, heading DM Sans 500 36/100% #161616,
 * copy DM Sans 18/160% +2% #212121, bloque naranja #FF8831 radius-top 24px.
 * El naranja + la tira gris (#ECECEC, radius-bottom 24px) forman una sola card.
 * El cluster de UIs de la derecha se usa como imagen compuesta única.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  const { topline, title, copy, cta_primary, cta_secondary } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-canvas"
    >
      <div className="mx-auto w-full max-w-[1495px] px-6">
        {/* Título serif */}
        {isFilled.keyText(title) && (
          <h1 className="max-w-[620px] pt-14 font-serif text-[42px] leading-[1.6] text-ink xl:pl-[100px] xl:text-[62px]">
            {title}
          </h1>
        )}

        {/* Card = bloque naranja (radius arriba) + tira de logos gris (radius abajo) */}
        <div className="mt-8 xl:mt-[62px]">
          {/* Bloque naranja */}
          <div className="relative rounded-t-[24px] bg-brand xl:h-[520px]">
            {/* Label vertical decorativo */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[38px] top-[125px] hidden font-mono text-[12px] font-light uppercase leading-none tracking-[0.02em] text-white/50 [writing-mode:vertical-rl] rotate-180 xl:block"
            >
              Select. Connect. Evolve.
            </span>

            {/* Columna de contenido (izquierda) */}
            <div className="flex flex-col gap-9 px-8 py-12 xl:absolute xl:left-[102px] xl:top-[109px] xl:w-[484px] xl:p-0">
              <div className="flex flex-col gap-4">
                {isFilled.keyText(topline) && (
                  <h2 className="font-sans text-[28px] font-medium leading-none text-ink-strong xl:text-[36px]">
                    {topline}
                  </h2>
                )}

                {isFilled.richText(copy) && (
                  <div className="font-sans text-[16px] leading-[1.6] tracking-[0.02em] text-ink xl:text-[18px] [&_p]:my-0">
                    <PrismicRichText field={copy} />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-6">
                {isFilled.link(cta_secondary) && (
                  <PrismicNextLink
                    field={cta_secondary}
                    className="inline-flex items-center justify-center rounded-[8px] border-2 border-ink-strong px-6 py-4 text-[18px] font-medium text-ink-strong transition-colors hover:bg-ink-strong hover:text-white"
                  />
                )}
                {isFilled.link(cta_primary) && (
                  <PrismicNextLink
                    field={cta_primary}
                    className="inline-flex items-center justify-center rounded-[8px] bg-ink-strong px-6 py-[18px] text-[18px] font-medium text-white transition-colors hover:bg-ink"
                  />
                )}
              </div>
            </div>

            {/* Cluster de UIs (imagen compuesta del Figma) */}
            <div className="mt-6 xl:absolute xl:right-0 xl:top-[-145px] xl:z-10 xl:mt-0 xl:w-[700px]">
              <Image
                src="/Images/hero/hero-cluster.png"
                alt=""
                width={1318}
                height={1206}
                priority
                className="h-auto w-full select-none"
              />
            </div>
          </div>

          {/* Tira de logos de clientes (fondo gris, parte inferior de la card).
              La fila (1575px) es más ancha que la tira (1447px): sobresale y se recorta. */}
          <div className="relative flex justify-center overflow-hidden rounded-b-[24px] border-t border-black/10 bg-[#ececec] py-8 xl:h-[167px] xl:items-center xl:py-0">
            <Image
              src="/Images/hero/logo-strip.webp"
              alt="WAGNER, Lekkerland, B. Braun, TDK, NORD, JOCKEY, MITEGRO, SPAX"
              width={2000}
              height={231}
              className="h-auto w-full max-w-[1575px] shrink-0 xl:w-[1575px] xl:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
