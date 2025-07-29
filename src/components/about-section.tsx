import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent } from '@/components/ui/card'
import type { ExtractHomePageSectionNonNullable } from '@/sanity/helper-types'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const BLUR_FADE_DELAY = 0.04

type AboutSectionNonNullable = ExtractHomePageSectionNonNullable<'aboutSection'>

export function AboutSection({ data }: { data: AboutSectionNonNullable }) {
  if (!data) {
    return (
      <section
        className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900'
        id='about'>
        <div className='text-center text-white'>
          <div className='animate-pulse'>Loading About Section...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-white py-24' id='about'>
      <div className='container mx-auto px-4'>
        <div className='grid items-center gap-16 lg:grid-cols-2 lg:gap-20'>
          {/* Content */}
          <div className='space-y-6'>
            <div>
              <BlurFade delay={BLUR_FADE_DELAY} inView>
                <Badge className='mb-4' variant='outline'>
                  {data.badge}
                </Badge>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                <h2 className='mb-6 font-bold text-4xl leading-tight md:text-5xl'>
                  {data.title}
                  <span className='mt-2 block font-light text-2xl text-gray-600 md:text-3xl'>{data.subtitle}</span>
                </h2>
              </BlurFade>
            </div>

            <div className='space-y-4 text-gray-700 text-lg leading-relaxed'>
              <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
                <p>{data.foundingStory}</p>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
                <p>{data.currentMission}</p>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
                <blockquote className='border-gray-300 border-l-4 pl-6 text-lg italic lg:text-base'>
                  {data.quote}
                </blockquote>
              </BlurFade>
            </div>

            {/* Core Values */}
            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
              {data.values?.map((item) => (
                <BlurFade key={item._key} delay={BLUR_FADE_DELAY * 6} inView>
                  <Card className='border-0 bg-gray-50 p-4 text-center'>
                    <CardContent className='p-0'>
                      <h3 className='mb-2 font-semibold text-lg'>{item.title}</h3>
                      <p className='text-gray-600 text-sm'>{item.description}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
              <div className='relative h-72 overflow-hidden rounded-lg shadow-xl sm:h-80 lg:h-[500px]'>
                <Image
                  alt='C.A. Doose & Company Executive Team'
                  className='aspect-video object-cover'
                  fill
                  src={data.teamImage ? urlFor(data.teamImage).url() : ''}
                />
              </div>
            </BlurFade>

            {/* Stats Caption */}
            {data.stats?.map((item) => (
              <BlurFade key={item._key} delay={BLUR_FADE_DELAY * 10} inView>
                <div className='mt-4 text-center'>
                  <div className='font-semibold text-2xl text-gray-900'>{item.value}</div>
                  <div className='text-gray-600 text-sm'>{item.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
