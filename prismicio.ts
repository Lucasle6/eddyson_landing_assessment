import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * El nombre del repositorio de Prismic. Se toma de slicemachine.config.json
 * para no tener que repetirlo a mano en varios lados.
 */
export const repositoryName = config.repositoryName;

/**
 * Define cómo se arma la URL de cada tipo de documento.
 * Como "Partner Landing Page" es un Single Type, siempre vive en la raíz "/".
 */
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "partner_page",
    path: "/",
  },
];

/**
 * Crea un cliente de Prismic listo para usar en Server Components,
 * Route Handlers, y Server Actions.
 */
export const createClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};