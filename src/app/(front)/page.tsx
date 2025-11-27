import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

// Only the slogan here, layout template will add site name
export const metadata: Metadata = {
  title: siteConfig.slogan,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export const runtime = 'edge';

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="container mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-28 text-center md:pb-12 lg:py-32"
      >
        {/* Twitter Badge */}
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Badge aria-hidden="true" className="rounded-md px-3.5 py-1.5" variant="secondary">
            <Icons.twitter className="mr-2 h-3.5 w-3.5" />
            Follow along on Twitter
          </Badge>
          <span className="sr-only">Twitter</span>
        </Link>

        {/* H1 Hero */}
        <h1
          id="hero-heading"
          className="max-w-screen-lg text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {siteConfig.name} - {siteConfig.slogan}
        </h1>

        {/* Hero Subtext */}
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Step into a world where entertainment knows no boundaries. Enjoy movies,
          TV shows, and anime instantly on any device — all for free.
        </p>

        {/* Call-to-Action */}
        <div className="space-x-4">
          <Link className={`${buttonVariants({ size: "lg" })}`} href="/home">
            Watch Now <ArrowRight className="ml-1 inline-block" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} offers a host of powerful features designed to enhance your movie-watching experience.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Feature cards here (same as before) */}
        </div>
      </section>
    </>
  );
}
