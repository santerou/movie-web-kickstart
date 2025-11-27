// import type { FooterItem, MainNavItem } from "@/types"
//
// import { productCategories } from "@/config/products"
// import { slugify } from "@/lib/utils"

import { Icons } from '@/components/icons';
import { env } from '@/env.mjs';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  // Brand & author
  name: "StreamGoblin",
  author: "StreamGoblin",
  slogan: "Watch Movies, TV Shows, and Anime Online Instantly",

  // Meta description
  description:
    "StreamGoblin lets you watch movies, TV shows, and anime online instantly on PC, mobile, tablet, or smart TV — no downloads required.",

  // High-traffic SEO keywords
  keywords: [
    "stream movies online",
    "watch TV shows online",
    "anime online",
    "free streaming",
    "instant streaming",
    "full-length movies",
    "movies online free",
    "TV shows online free",
    "StreamGoblin",
  ],

  // Website URL (temporary Pages.dev URL)
  url: "https://movieflix-28.pages.dev",

  // OpenGraph / social image
  ogImage: "https://movieflix-28.pages.dev/images/hero.jpg",

  // Social & links
  links: {
    twitter: `${env.NEXT_PUBLIC_TWITTER}`,
    github: 'https://github.com/bitfreee/movie-web-kickstart',
    githubAccount: '',
  },
  socialLinks: [
    { title: 'Facebook', href: `${env.NEXT_PUBLIC_FACEBOOK}`, icon: Icons.facebook },
    { title: 'Instagram', href: `${env.NEXT_PUBLIC_INSTAGRAM}`, icon: Icons.instagram },
    { title: 'Twitter', href: `${env.NEXT_PUBLIC_TWITTER}`, icon: Icons.twitter },
    { title: 'YouTube', href: `${env.NEXT_PUBLIC_YOUTUBE}`, icon: Icons.youtube },
  ],

  // Footer
  footerItems: [
    { title: 'Help Center', href: '/' },
    { title: 'Terms of Use', href: '/terms-of-use' },
    { title: 'Privacy Policy', href: '/' },
    { title: 'Contact', href: '/' },
  ],

  // Main navigation
  mainNav: [
    { title: 'Home', href: '/home' },
    { title: 'TV Shows', href: '/tv-shows' },
    { title: 'Movies', href: '/movies' },
    { title: 'Anime', href: '/anime' },
    { title: 'New & Popular', href: '/new-and-popular' },
  ],
};

