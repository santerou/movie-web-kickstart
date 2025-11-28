import { siteConfig } from "@/configs/site";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.slogan, // layout prepends site name
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export const runtime = 'edge';

export default function Index() {
  return (
    <>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="container mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-28 text-center md:pb-12 lg:py-32"
      >
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Badge aria-hidden="true" className="rounded-md px-3.5 py-1.5" variant="secondary">
            <Icons.twitter className="mr-2 h-3.5 w-3.5" />
            Follow along on Twitter
          </Badge>
          <span className="sr-only">Twitter</span>
        </Link>

        <h1
          id="hero-heading"
          className="max-w-screen-lg text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {siteConfig.slogan} {/* no site name here */}
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Step into a world where entertainment knows no boundaries. Enjoy movies,
          TV shows, and anime instantly on any device — all for free.
        </p>

        <div className="space-x-4">
          <Link className={`${buttonVariants({ size: "lg" })}`} href="/home">
            Watch Now <ArrowRight className="ml-1 inline-block" />
          </Link>
        </div>
      </section>

      {/* Features Section here */}
    </>
  );
}
