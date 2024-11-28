import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { CollectionEntry } from 'astro:content';

export interface SiteMetadataContent {
  defaultLanguage: string;
  author: string;
  domain: string;
}

export interface PagesMetadataContent {
  [key: string]: {
    title: string;
    description: string;
  };
}

export interface SectionContent {
  id?: string;
  title: string;
  display: {
    showTitle: boolean;
    showInNav: boolean;
  };
  component: string;
  order: number;
  class?: string;
}

export interface PageSectionContent {
  section: Section;
  Component: AstroComponentFactory | null;
}

export interface NavigationContent {
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

export interface SocialLinksContent {
  linkedin: string;
  github: string;
  email: string;
}

export type ExperienceCollectionEntry = CollectionEntry<'experience'>;
export type RenderedExperienceContent = Awaited<ReturnType<ExperienceCollectionEntry['render']>>;

export interface ExperienceContent {
  slug: string;
  order: number;
  date: string;
  title: string;
  company: string;
  descriptionShort: string;
  descriptionLong: string;
  stackShort: string[];
  stackLong: string[];
  render: () => RenderedExperienceContent;
}

export interface ExpertiseContent {
  src: string;
  alt: string;
  text: string;
  oreder: number;
}

export interface EducationContent {
  date: string;
  type: string;
  category: string;
  title: string;
  institution: string;
  order: number;
}

export interface AboutContent {
  image: string;
  skills: string[];
  hobbies: {
    img: string;
    alt: string;
  }[];
  Bio: AstroComponentFactory;
}
