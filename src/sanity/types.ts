/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type TimelineSection = {
  _type: "timelineSection";
  title: string;
  subtitle: string;
  events: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "timelineEvent";
  }>;
  highlights?: {
    milestoneLabel: string;
    legacyLabel: string;
    range: string;
  };
  callToAction?: {
    line1: string;
    line2: string;
  };
};

export type ExecutiveTeamSection = {
  _type: "executiveTeamSection";
  title: string;
  subtitle: string;
  teamMembers: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "teamMember";
  }>;
  closingText?: {
    line1: string;
    line2: string;
  };
};

export type PartnerBrandsSection = {
  _type: "partnerBrandsSection";
  title: string;
  subtitle: string;
  brands: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "partnerBrand";
  }>;
  description: string;
  callToAction?: {
    text: string;
    buttonText: string;
  };
};

export type AboutSection = {
  _type: "aboutSection";
  badge: string;
  title: string;
  subtitle: string;
  foundingStory: string;
  currentMission: string;
  quote: string;
  values: Array<{
    title: string;
    description: string;
    _type: "value";
    _key: string;
  }>;
  teamImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  stats?: Array<{
    value: string;
    label: string;
    _type: "stat";
    _key: string;
  }>;
};

export type HeroSection = {
  _type: "heroSection";
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  quote: string;
  primaryCta?: {
    text: string;
    action: "timeline" | "about" | "brands" | "team" | "external";
    externalUrl?: string;
  };
  secondaryCta?: {
    text: string;
    action: "timeline" | "about" | "brands" | "team" | "external";
    externalUrl?: string;
  };
  backgroundVideo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    media?: unknown;
    _type: "file";
  };
};

export type LegalPage = {
  _id: string;
  _type: "legalPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  slug: Slug;
  lastUpdated?: string;
  introduction?: string;
  sections?: Array<{
    heading: string;
    content?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      items?: Array<string>;
      _type: "bulletList";
      _key: string;
    }>;
    _type: "section";
    _key: string;
  }>;
  contactInfo?: {
    heading?: string;
    description?: string;
    contactMethods?: Array<{
      label?: string;
      value?: string;
      _type: "contactMethod";
      _key: string;
    }>;
  };
  seoTitle?: string;
  seoDescription?: string;
  isPublished?: boolean;
};

export type TeamMember = {
  _id: string;
  _type: "teamMember";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  bio: string;
  headshot: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    _type: "image";
  };
  order: number;
  isActive?: boolean;
  department?: "executive" | "operations" | "sales" | "finance" | "development" | "other";
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  achievements?: Array<string>;
  education?: Array<{
    institution?: string;
    degree?: string;
    year?: number;
    _key: string;
  }>;
};

export type TimelineEvent = {
  _id: string;
  _type: "timelineEvent";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  year: number;
  title: string;
  description: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  isHighlight?: boolean;
  order: number;
};

export type PartnerBrand = {
  _id: string;
  _type: "partnerBrand";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  logo: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description: string;
  website?: string;
  services?: Array<string>;
  tagline?: string;
  order: number;
  isActive?: boolean;
  contactEmail?: string;
  contactPhone?: string;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  url: string;
  description: string;
  logo: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  keywords?: Array<string>;
  author?: string;
  yearEstablished?: number;
  phone: string;
  email: string;
  address?: {
    street: string;
    street2?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  navigationLinks: Array<{
    text: string;
    section: string;
    _type: "navItem";
    _key: string;
  }>;
  footerText: string;
  footerLinks?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "legalPage";
  }>;
  socialLinks?: Array<{
    platform: "facebook" | "twitter" | "linkedin" | "instagram" | "youtube";
    url: string;
    _type: "socialLink";
    _key: string;
  }>;
};

export type HomePage = {
  _id: string;
  _type: "homePage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  pageBuilder?: Array<{
    _key: string;
  } & HeroSection | {
    _key: string;
  } & AboutSection | {
    _key: string;
  } & PartnerBrandsSection | {
    _key: string;
  } & ExecutiveTeamSection | {
    _key: string;
  } & TimelineSection>;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes = TimelineSection | ExecutiveTeamSection | PartnerBrandsSection | AboutSection | HeroSection | LegalPage | TeamMember | TimelineEvent | PartnerBrand | SiteSettings | HomePage | SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: legalPageQuery
// Query: *[_type == "legalPage" && slug.current == $slug && isPublished == true][0] {    _id,    title,    slug,    lastUpdated,    introduction,    sections[] {      heading,      content[] {        ...,        _type == "bulletList" => {          _type,          items[]        }      }    },    contactInfo {      heading,      description,      contactMethods[] {        label,        value      }    },    seoTitle,    seoDescription  }
export type LegalPageQueryResult = {
  _id: string;
  title: string;
  slug: Slug;
  lastUpdated: string | null;
  introduction: string | null;
  sections: Array<{
    heading: string;
    content: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      items: Array<string> | null;
      _type: "bulletList";
      _key: string;
    }> | null;
  }> | null;
  contactInfo: {
    heading: string | null;
    description: string | null;
    contactMethods: Array<{
      label: string | null;
      value: string | null;
    }> | null;
  } | null;
  seoTitle: string | null;
  seoDescription: string | null;
} | null;
// Variable: allLegalPagesQuery
// Query: *[_type == "legalPage" && isPublished == true] | order(title asc) {    _id,    title,    slug,    lastUpdated,    seoTitle,    seoDescription  }
export type AllLegalPagesQueryResult = Array<{
  _id: string;
  title: string;
  slug: Slug;
  lastUpdated: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
}>;
// Variable: homePageQuery
// Query: *[_type == "homePage"][0] {    _id,    title,    "pageBuilder": pageBuilder[]{      _key,      _type,      ...,      backgroundVideo{        asset->{          _id,          url        }      },            // Resolve references and fetch all their data      (_type == "executiveTeamSection") => {        teamMembers[]->{          ...        }      },      (_type == "partnerBrandsSection") => {        ...,        brands[]->{          _id,          name,          description,          website,          services,          tagline,          order,          isActive,          contactEmail,          contactPhone,          logo{            asset->{              _id,              url            }          }        }      },      (_type == "timelineSection") => {        events[]->{          ...        }      }    }  }
export type HomePageQueryResult = {
  _id: string;
  title: string;
  pageBuilder: Array<{
    _key: string;
    _type: "aboutSection";
    badge: string;
    title: string;
    subtitle: string;
    foundingStory: string;
    currentMission: string;
    quote: string;
    values: Array<{
      title: string;
      description: string;
      _type: "value";
      _key: string;
    }>;
    teamImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    stats?: Array<{
      value: string;
      label: string;
      _type: "stat";
      _key: string;
    }>;
    backgroundVideo: null;
  } | {
    _key: string;
    _type: "executiveTeamSection";
    title: string;
    subtitle: string;
    teamMembers: Array<{
      _id: string;
      _type: "teamMember";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name: string;
      title: string;
      bio: string;
      headshot: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string;
        _type: "image";
      };
      order: number;
      isActive?: boolean;
      department?: "development" | "executive" | "finance" | "operations" | "other" | "sales";
      socialLinks?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
      };
      achievements?: Array<string>;
      education?: Array<{
        institution?: string;
        degree?: string;
        year?: number;
        _key: string;
      }>;
    }>;
    closingText?: {
      line1: string;
      line2: string;
    };
    backgroundVideo: null;
  } | {
    _key: string;
    _type: "heroSection";
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    quote: string;
    primaryCta?: {
      text: string;
      action: "about" | "brands" | "external" | "team" | "timeline";
      externalUrl?: string;
    };
    secondaryCta?: {
      text: string;
      action: "about" | "brands" | "external" | "team" | "timeline";
      externalUrl?: string;
    };
    backgroundVideo: {
      asset: {
        _id: string;
        url: string | null;
      } | null;
    } | null;
  } | {
    _key: string;
    _type: "partnerBrandsSection";
    title: string;
    subtitle: string;
    brands: Array<{
      _id: string;
      name: string;
      description: string;
      website: string | null;
      services: Array<string> | null;
      tagline: string | null;
      order: number;
      isActive: boolean | null;
      contactEmail: string | null;
      contactPhone: string | null;
      logo: {
        asset: {
          _id: string;
          url: string | null;
        } | null;
      };
    }>;
    description: string;
    callToAction?: {
      text: string;
      buttonText: string;
    };
    backgroundVideo: null;
  } | {
    _key: string;
    _type: "timelineSection";
    title: string;
    subtitle: string;
    events: Array<{
      _id: string;
      _type: "timelineEvent";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      year: number;
      title: string;
      description: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      isHighlight?: boolean;
      order: number;
    }>;
    highlights?: {
      milestoneLabel: string;
      legacyLabel: string;
      range: string;
    };
    callToAction?: {
      line1: string;
      line2: string;
    };
    backgroundVideo: null;
  }> | null;
} | null;
// Variable: siteSettingsQuery
// Query: *[_type == "siteSettings"][0] {    _id,    title,    url,    description,    logo,    ogImage,    keywords,    author,    yearEstablished,    phone,    email,    address,    navigationLinks,    footerText,    footerLinks[]->{_id, title, slug},    socialLinks  }
export type SiteSettingsQueryResult = {
  _id: string;
  title: string;
  url: string;
  description: string;
  logo: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  ogImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  keywords: Array<string> | null;
  author: string | null;
  yearEstablished: number | null;
  phone: string;
  email: string;
  address: {
    street: string;
    street2?: string;
    city: string;
    state: string;
    zipCode: string;
  } | null;
  navigationLinks: Array<{
    text: string;
    section: string;
    _type: "navItem";
    _key: string;
  }>;
  footerText: string;
  footerLinks: Array<{
    _id: string;
    title: string;
    slug: Slug;
  }> | null;
  socialLinks: Array<{
    platform: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube";
    url: string;
    _type: "socialLink";
    _key: string;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"legalPage\" && slug.current == $slug && isPublished == true][0] {\n    _id,\n    title,\n    slug,\n    lastUpdated,\n    introduction,\n    sections[] {\n      heading,\n      content[] {\n        ...,\n        _type == \"bulletList\" => {\n          _type,\n          items[]\n        }\n      }\n    },\n    contactInfo {\n      heading,\n      description,\n      contactMethods[] {\n        label,\n        value\n      }\n    },\n    seoTitle,\n    seoDescription\n  }\n": LegalPageQueryResult;
    "\n  *[_type == \"legalPage\" && isPublished == true] | order(title asc) {\n    _id,\n    title,\n    slug,\n    lastUpdated,\n    seoTitle,\n    seoDescription\n  }\n": AllLegalPagesQueryResult;
    "\n  *[_type == \"homePage\"][0] {\n    _id,\n    title,\n    \"pageBuilder\": pageBuilder[]{\n      _key,\n      _type,\n      ...,\n      backgroundVideo{\n        asset->{\n          _id,\n          url\n        }\n      },\n      \n      // Resolve references and fetch all their data\n      (_type == \"executiveTeamSection\") => {\n        teamMembers[]->{\n          ...\n        }\n      },\n      (_type == \"partnerBrandsSection\") => {\n        ...,\n        brands[]->{\n          _id,\n          name,\n          description,\n          website,\n          services,\n          tagline,\n          order,\n          isActive,\n          contactEmail,\n          contactPhone,\n          logo{\n            asset->{\n              _id,\n              url\n            }\n          }\n        }\n      },\n      (_type == \"timelineSection\") => {\n        events[]->{\n          ...\n        }\n      }\n    }\n  }\n": HomePageQueryResult;
    "\n  *[_type == \"siteSettings\"][0] {\n    _id,\n    title,\n    url,\n    description,\n    logo,\n    ogImage,\n    keywords,\n    author,\n    yearEstablished,\n    phone,\n    email,\n    address,\n    navigationLinks,\n    footerText,\n    footerLinks[]->{_id, title, slug},\n    socialLinks\n  }\n": SiteSettingsQueryResult;
  }
}
