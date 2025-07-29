import { groq } from 'next-sanity'

// Legal Pages Query
export const legalPageQuery = groq`
  *[_type == "legalPage" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    slug,
    lastUpdated,
    introduction,
    sections[] {
      heading,
      content[] {
        ...,
        _type == "bulletList" => {
          _type,
          items[]
        }
      }
    },
    contactInfo {
      heading,
      description,
      contactMethods[] {
        label,
        value
      }
    },
    seoTitle,
    seoDescription
  }
`

// All Legal Pages Query (for sitemap, navigation, etc.)
export const allLegalPagesQuery = groq`
  *[_type == "legalPage" && isPublished == true] | order(title asc) {
    _id,
    title,
    slug,
    lastUpdated,
    seoTitle,
    seoDescription
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    _id,
    title,
    "pageBuilder": pageBuilder[]{
      _key,
      _type,
      ...,
      backgroundVideo{
        asset->{
          _id,
          url
        }
      },
      
      // Resolve references and fetch all their data
      (_type == "executiveTeamSection") => {
        teamMembers[]->{
          ...
        }
      },
      (_type == "partnerBrandsSection") => {
        ...,
        brands[]->{
          _id,
          name,
          description,
          website,
          services,
          tagline,
          order,
          isActive,
          contactEmail,
          contactPhone,
          logo{
            asset->{
              _id,
              url
            }
          }
        }
      },
      (_type == "timelineSection") => {
        events[]->{
          ...
        }
      }
    }
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    title,
    url,
    description,
    logo,
    ogImage,
    keywords,
    author,
    yearEstablished,
    phone,
    email,
    address,
    navigationLinks,
    footerText,
    footerLinks[]->{_id, title, slug},
    socialLinks
  }
`
