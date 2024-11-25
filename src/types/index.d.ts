import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface SiteMetadata {
  defaultLanguage: string;
  author: string;
  domain: string;
}

export interface PagesMetadata {
  [key: string]: {
    title: string;
    description: string;
  };
}

export interface Section {
  id: string;
  title: string;
  display: {
    showTitle: boolean;
    showInNav: boolean;
  },
  component: string;
  order: number;
  class?: string;
}

export interface Navigation {
  title: string;
  label: string;
  url: string;
}

export interface HeroContent {
  name: string;
  title: string;
  image: string;
  Bio: AstroComponentFactory;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}
