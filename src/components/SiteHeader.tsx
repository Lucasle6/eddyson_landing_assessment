import { FC } from "react";

/**
 * Chrome global (fuera del SliceZone): barra de anuncio "We're hiring!" + header
 * con el logo y el label vertical decorativo "eddyson | 2026".
 * Contenido estático — no forma parte del modelo de Prismic.
 */
const SiteHeader: FC = () => {
  return (
    <header className="w-full bg-canvas">
      <div className="mx-auto w-full max-w-[1495px] px-6 pt-6">
        {/* Barra de anuncio */}
        <div className="flex items-center justify-center bg-[#212121] px-4 py-2.5">
          <p className="text-center font-sans text-[16px] leading-[21px] text-white">
            We&apos;re hiring! Check out our{" "}
            <a
              href="#open-positions"
              className="underline underline-offset-2 transition-colors hover:text-brand"
            >
              open positions
            </a>
            !
          </p>
        </div>

        {/* Fila del header: logo + label vertical */}
        <div className="relative flex items-center py-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/eddyson-logo-header.svg"
            alt="eddyson"
            className="h-[54px] w-auto xl:ml-[98px]"
          />

          <span className="absolute right-0 top-1/2 hidden -translate-y-1/2 font-mono text-[12px] uppercase leading-4 tracking-[0.02em] text-[#949494] [writing-mode:vertical-rl] xl:block">
            eddyson | 2026
          </span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
