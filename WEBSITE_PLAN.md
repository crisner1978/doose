# C.A. Doose & Company Website Plan

## Project Overview
Building a modern website for C.A. Doose & Company, a historic Texas company founded in 1895, showcasing their parent company status over multiple partner brands.

## 🚀 Current Status: **75% Complete**
- **Foundation**: ✅ Complete
- **Core Components**: ✅ Complete  
- **Interactive Features**: ✅ Complete
- **Content Management**: 🚧 In Progress
- **Final Polish**: 📋 Pending

### 🎯 Recent Accomplishments
- Implemented auto.dev style floating navbar with smooth animations
- Added Motion framework for elegant page transitions
- Applied custom brand gold color (#b68931) throughout
- Fixed all responsive layout and overflow issues
- Created comprehensive Sanity CMS schema structure

## Current State Analysis
- **Next.js 15** with TypeScript and Tailwind CSS v4
- **Sanity CMS** initialized but needs schema design
- **Assets**: Rich collection of logos, team photos, and company images
- **Content**: Solid foundation in `index.tsx` and `team.ts`

## 1. Technical Setup Tasks

### shadcn/ui Setup
Install and configure shadcn components for consistent, accessible UI elements:
- Buttons, cards, navigation components
- Form elements for contact integration
- Timeline and carousel components
- Typography and layout utilities

### Sanity Schema Design
Create schemas for dynamic content management:

#### Timeline Events Schema
```typescript
{
  name: 'timelineEvent',
  fields: [
    { name: 'year', type: 'number' },
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' },
    { name: 'isHighlight', type: 'boolean' }
  ]
}
```

#### Partner Brands Schema
```typescript
{
  name: 'partnerBrand',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'logo', type: 'image' },
    { name: 'description', type: 'text' },
    { name: 'website', type: 'url' },
    { name: 'services', type: 'array' },
    { name: 'order', type: 'number' }
  ]
}
```

#### Page Content Blocks
```typescript
{
  name: 'pageContent',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'content', type: 'array' }, // Rich text blocks
    { name: 'images', type: 'array' },
    { name: 'ctaButtons', type: 'array' }
  ]
}
```

#### Site Settings
```typescript
{
  name: 'siteSettings',
  fields: [
    { name: 'contactInfo', type: 'object' },
    { name: 'socialLinks', type: 'array' },
    { name: 'globalAnnouncements', type: 'text' },
    { name: 'footerContent', type: 'text' }
  ]
}
```

### Site Configuration Updates
- Update metadata in `layout.tsx` to reflect C.A. Doose branding
- Configure proper SEO tags and Open Graph data
- Set up proper font loading and branding colors

## 2. Website Sections

### Hero Section
**Purpose**: Establish company heritage and modern relevance

**Content Elements**:
- C.A. Doose logo and "Est. 1895" prominence
- Tagline: "Building Texas Since 1895"
- Subtitle highlighting partner brands collaboration
- Call-to-action: "Discover Our Legacy" or "Meet Our Brands"
- Background: Historic Texas imagery from assets folder

**Technical**: 
- Responsive hero with parallax effects
- Optimized images with Next.js Image component
- Mobile-first design approach

### About Section
**Purpose**: Position C.A. Doose as the umbrella organization

**Content Elements**:
- Company heritage story (1895 founding)
- "Stronger Together" messaging about partner brands
- Core values: Quality, Integrity, Innovation
- "United by shared commitment" narrative
- Visual: Executive team group photo or historic building

**Quote Integration**:
> "Driven by shared values of quality, integrity, and innovation, our partner brands work together to make homeownership seamless, from breaking ground to financing. We're not just building homes, we're building trust."

### Services Section (Partner Brands)
**Purpose**: Showcase the ecosystem of companies under C.A. Doose

**Partner Brands**:
1. **Flintrock Builders**
   - Home construction and building
   - Logo: `Flintrock_transparent.png`
   - Focus: New home construction in Central Texas

2. **Spark Mortgage**
   - Home financing and lending
   - Logo: `SparkMortgage_transparent.png`
   - Focus: Seamless financing solutions

3. **Ballinger Capital**
   - Investment and development
   - Logo: `Ballinger_Capital_transparent.png`
   - Focus: Strategic investments and development

4. **Lineage Landworks**
   - Land development and planning
   - Focus: Strategic land acquisition and development

**Layout**: Card-based grid with hover effects, logos, and brief descriptions

### Timeline Section
**Purpose**: Show company evolution and growth

**Key Milestones**:
- **1895**: C.A. Doose & Company founded in West Texas
  - Founder later served as president of First National Bank of Ballinger
  - Financed Abilene & Southern Railroad
- **September 10, 1975**: Paving the Way in Property & Title
- **1980**: The Doose Family Legacy continues
- **2015**: Flintrock Builders founded by Chris Doose
  - Family legacy of entrepreneurship
  - Built on principles of integrity, innovation, attention to detail
- **2025**: Current operations and future expansion

**Technical**: Interactive timeline with scroll animations, using timeline images from assets

### Executives Section
**Purpose**: Showcase leadership team

**Content Source**: Use data from `src/config/team.ts`

**Team Members**:
- Randy Birdwell - Chairman
- Chris Doose - Founder & CEO  
- Desmond Graham - Chief Operating Officer
- Scott Oullette - Chief Financial Officer
- Seth Raynard - Chief of Staff

**Images**: Professional headshots from `/public/team/` folder
- Color versions for main display
- Black versions for hover effects or alternate layouts

**Layout**: Grid layout with bio modals or expandable cards

### Contact Integration
**Purpose**: Make contact information easily accessible

**Strategy**: Integrate throughout site rather than dedicated section
- Header: Phone number and email
- Footer: Full contact details from `site-config.ts`
- Floating contact button or sidebar
- Partner brand cards link to respective contact methods

**Contact Details** (from site-config.ts):
- Address: 624 S. Austin Avenue, Suite 210, Georgetown, TX 78626
- Phone: 254-291-2403
- Email: jon@flintrockbuilders.com

## 3. Content Strategy

### Sanity CMS Benefits
- **Timeline Management**: Easy updates for company milestones
- **Partner Brand Updates**: Dynamic management of services and descriptions
- **Content Flexibility**: Rich text blocks for page updates
- **Asset Management**: Organized handling of large image library
- **Multi-user Editing**: Team can update content without developer intervention

### Asset Optimization Strategy
- **Image Compression**: Reduce file sizes (current images up to 13MB)
- **Responsive Images**: Create multiple sizes for different viewports
- **Next.js Image Optimization**: Automatic WebP conversion and lazy loading
- **Asset Organization**: Group by usage (heroes, logos, team, timeline)

### SEO Strategy
- Historic company advantage (Est. 1895)
- Texas-focused keywords
- Partner brand cross-linking
- Local Georgetown/Central Texas optimization
- Rich snippets for company information

## 4. Development Phases

### Phase 1: Foundation Setup ✅ **COMPLETED**
- [x] Install and configure shadcn/ui
- [x] Design and implement Sanity schemas
- [x] Update site metadata and branding
- [x] Optimize and organize assets

### Phase 2: Core Components ✅ **COMPLETED**
- [x] Build Hero section with company branding
- [x] Create About section highlighting parent company role
- [x] Implement Services section with partner brands
- [x] Build responsive navigation and footer

### Phase 3: Interactive Features ✅ **COMPLETED**
- [x] Create interactive Timeline component
- [x] Build animated floating navbar (auto.dev style)
- [x] Implement smooth scroll navigation
- [x] Add Motion animations framework
- [x] Fix horizontal overflow issues
- [x] Update brand colors to #b68931 gold

### Phase 4: Content Management & Polish 🚧 **IN PROGRESS**
- [ ] Build Executives section with team data
- [ ] Populate Sanity with initial content
- [ ] Test content editing workflows
- [ ] Performance optimization
- [ ] Cross-browser testing and accessibility audit

### Phase 5: Final Polish & Deployment 📋 **PENDING**
- [ ] Add remaining motion animations throughout site
- [ ] Implement contact forms and footer
- [ ] Add blog/news section capability
- [ ] SEO optimization and meta tags
- [ ] Production deployment setup

## 5. Technical Considerations

### Performance
- Image optimization critical (large asset files)
- Lazy loading for timeline and team sections
- Code splitting for optimal loading

### Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support

### Mobile Experience
- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images for mobile networks
- Fast loading on slower connections

### CMS Integration
- Preview functionality for content editors
- Staged content deployment
- Image management workflows
- Multi-environment setup (dev/staging/prod)

## 6. Future Enhancements

### Potential Additions
- Blog/news section for company updates
- Project portfolio showcase for Flintrock
- Interactive maps for service areas
- Client testimonials and case studies
- Integration with partner brand websites

### Analytics & Tracking
- Google Analytics 4 setup
- Conversion tracking for partner brand referrals
- Performance monitoring
- User behavior analysis

---

## Next Steps
1. Begin with shadcn/ui setup for consistent component library
2. Design and implement Sanity schemas for content management
3. Update site branding and metadata
4. Start building core components with placeholder content
5. Integrate real content and optimize for performance 
 