import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { THINKING_CONCEPTS } from "@/lib/thinking";
import ConceptDetailClient from "./ConceptDetailClient";

export function generateStaticParams() {
  return THINKING_CONCEPTS.map((concept) => ({
    slug: concept.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const concept = THINKING_CONCEPTS.find((c) => c.slug === params.slug);
  if (!concept) {
    return { title: "Concept Not Found — THE BORING ADS" };
  }

  return {
    title: `${concept.title} — THE BORING ADS THINKING`,
    description: `${concept.tagline} — ${concept.summary}`,
    openGraph: {
      title: `${concept.title} — THE BORING ADS`,
      description: concept.summary,
    },
  };
}

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = THINKING_CONCEPTS.find((c) => c.slug === params.slug);

  if (!concept) {
    notFound();
  }

  return <ConceptDetailClient concept={concept} />;
}
