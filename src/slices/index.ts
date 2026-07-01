import dynamic from "next/dynamic";

/**
 * Este objeto le dice al componente <SliceZone> de Prismic qué componente
 * React usar para renderizar cada tipo de slice, según su `slice_type`.
 *
 * Las claves (ej. "hero") deben coincidir EXACTO con el API ID de cada
 * slice en Prismic (en minúsculas, con guiones bajos si aplica).
 */
export const components = {
  hero: dynamic(() => import("./Hero")),
  partner_program: dynamic(() => import("./PartnerProgram")),
  edi_expertise: dynamic(() => import("./EdiExpertise")),
  contact_form: dynamic(() => import("./ContactForm")),
  footer: dynamic(() => import("./Footer")),
};