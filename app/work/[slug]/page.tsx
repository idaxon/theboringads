import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CAMPAIGNS } from "@/lib/campaigns";
import CampaignDetailClient from "./CampaignDetailClient";

export function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({
    slug: c.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const campaign = CAMPAIGNS.find((c) => c.slug === params.slug);
  if (!campaign) {
    return { title: "Campaign Not Found — THE BORING ADS" };
  }

  return {
    title: `${campaign.title} (${campaign.clientName}) — THE BORING ADS BY DAKSH`,
    description: `${campaign.punchline} — ${campaign.summary}`,
    openGraph: {
      title: `${campaign.title} — THE BORING ADS`,
      description: campaign.punchline,
      images: campaign.image ? [campaign.image] : [],
    },
  };
}

export default function CampaignPage({ params }: { params: { slug: string } }) {
  const campaign = CAMPAIGNS.find((c) => c.slug === params.slug);

  if (!campaign) {
    notFound();
  }

  return <CampaignDetailClient campaign={campaign} />;
}
