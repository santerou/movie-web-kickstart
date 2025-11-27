import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const runtime = 'edge';

// ✅ Metadata for SEO
export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.slogan}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: siteConfig.ogImage,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author,
  },
};

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
          <Badge
            aria-hidden="true"
            className="rounded-md px-3.5 py-1.5"
            variant="secondary"
          >
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
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} offers a host of powerful features designed to enhance your movie-watching experience.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Feature 1 */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Vast Movie Library</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of movies across all genres, languages, and decades.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Personalized Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Movies and shows suggested based on your interests.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
                <path d="M4 1.5C2.17363 1.5 0.5 2.9003 0.5 4.85714V14.1429C0.5 16.0997 2.17363 17.5 4 17.5H10.5V19.5H7.5C6.94772 19.5 6.5 19.9477 6.5 20.5V21.5C6.5 22.0523 6.94771 22.5 7.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V20.5C17.5 19.9477 17.0523 19.5 16.5 19.5H13.5V17.5H20C21.8264 17.5 23.5 16.0997 23.5 14.1429V4.85714C23.5 2.9003 21.8264 1.5 20 1.5H4Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Multiple Device Support</h3>
                <p className="text-sm text-muted-foreground">
                  Watch on smart TVs, smartphones, tablets, laptops, and gaming consoles.
                </p>
              </div>
            </div>
          </div>

          {/* Add additional features here with aria-hidden SVGs and descriptive alt text */}
        </div>
      </section>
    </>
  );
}
