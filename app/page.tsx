import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import type { Metadata } from "next";

import { createClient } from "../prismicio";
import { components } from "../src/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("partner_page").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("partner_page").catch(() => notFound());

  return {
    title: page.data.meta_title || "eddyson — Partner Program",
    description: page.data.meta_description || undefined,
  };
}