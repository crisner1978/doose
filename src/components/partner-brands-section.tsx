import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ExtractHomePageSectionNonNullable } from '@/sanity/helper-types'
import { urlFor } from '@/sanity/lib/image'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { BlurFade } from './ui/blur-fade'

type PartnerBrandsSectionNonNullable = ExtractHomePageSectionNonNullable<'partnerBrandsSection'>

const _BLUR_FADE_DELAY = 0.04

export function PartnerBrandsSection({ data }: { data: PartnerBrandsSectionNonNullable }) {
  if (!data) {
    return (
      <section
        className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900'
        id='about'>
        <div className='text-center text-white'>
          <div className='animate-pulse'>Loading Partner Brands...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-gray-50 py-24' id='brands'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <BlurFade delay={_BLUR_FADE_DELAY} inView>
            <h2 className='mb-6 font-bold text-4xl md:text-5xl'>{data.title}</h2>
          </BlurFade>
          <BlurFade delay={_BLUR_FADE_DELAY * 2} inView>
            <p className='mx-auto mb-4 max-w-3xl text-gray-600 text-xl'>{data.subtitle}</p>
          </BlurFade>
          <BlurFade delay={_BLUR_FADE_DELAY * 3} inView>
            <p className='mx-auto max-w-4xl text-gray-700 text-lg leading-relaxed'>{data.description}</p>
          </BlurFade>
        </div>

        {/* Brand Cards Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {data.brands?.map((brand, index) => (
            <BlurFade delay={_BLUR_FADE_DELAY * 4 + index * 0.1} inView key={brand?._id}>
              <Card className='group cursor-pointer border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardHeader className='pb-4 text-center'>
                  {/* Logo */}
                  <div className='relative mb-4 flex h-24 w-full items-center justify-center'>
                    <Image
                      alt={`${brand.name} logo`}
                      className='max-h-16 object-contain transition-transform duration-300 group-hover:scale-105'
                      height={60}
                      src={brand.logo ? urlFor(brand.logo).url() : ''}
                      width={120}
                    />
                  </div>
                  <CardTitle className='mb-2 text-xl'>{brand.name}</CardTitle>
                  <CardDescription className='font-medium text-gray-600 text-sm italic'>
                    {brand.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className='pt-0'>
                  <p className='mb-4 text-gray-700 text-sm leading-relaxed'>{brand.description}</p>

                  {/* Services List */}
                  <div className='mb-4'>
                    <h4 className='mb-2 font-semibold text-gray-800 text-sm'>Services:</h4>
                    <ul className='space-y-1 text-gray-600 text-xs'>
                      {brand.services?.map((service) => (
                        <li className='flex items-center' key={service}>
                          <span className='mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400'></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Website Button */}
                  {brand.website && (
                    <Button
                      asChild
                      className='w-full cursor-pointer transition-colors duration-300 group-hover:bg-black group-hover:text-white'
                      size='sm'
                      variant='outline'>
                      <a href={brand.website} rel='noopener noreferrer' target='_blank'>
                        Visit Website
                        <ExternalLink className='ml-2 h-3 w-3' />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA */}
        <BlurFade delay={_BLUR_FADE_DELAY * 8} inView>
          <div className='mt-16 text-center'>
            <p className='mb-6 text-gray-700 text-lg'>{data.callToAction?.text}</p>
            <Button className='cursor-pointer bg-black hover:bg-gray-800' size='lg'>
              {data.callToAction?.buttonText}
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
