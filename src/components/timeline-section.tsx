'use client'

import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import type { ExtractHomePageSectionNonNullable } from '@/sanity/helper-types'
import { urlFor } from '@/sanity/lib/image'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const BLUR_FADE_DELAY = 0.04

type TimelineSectionNonNullable = ExtractHomePageSectionNonNullable<'timelineSection'>

export function TimelineSection({ data }: { data: TimelineSectionNonNullable }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const timelineEvents = data.events

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleCardClick = (index: number) => {
    if (index === current - 1 || (current === 0 && index === timelineEvents.length - 1)) {
      api?.scrollTo(index)
    } else if (index === current + 1 || (current === timelineEvents.length - 1 && index === 0)) {
      api?.scrollTo(index)
    }
  }

  if (!data) {
    return (
      <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900' id='timeline'>
        <div className='text-center text-white'>
          <div className='animate-pulse'>Loading Timeline...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-gray-50 py-24' id='timeline'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='mb-16 text-center'>
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className='mb-6 font-bold text-4xl md:text-5xl'>{data.title}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <p className='mx-auto max-w-3xl text-gray-600 text-xl'>{data.subtitle}</p>
          </BlurFade>
        </div>

        {/* Timeline Carousel */}
        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <div className='relative mx-auto w-full overflow-auto px-0'>
            <Carousel
              className='w-full'
              opts={{
                align: 'center',
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3000, active: true, playOnInit: true })]}
              setApi={setApi}>
              <CarouselContent>
                {timelineEvents.map((event, index) => (
                  <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={event.year}>
                    <Card
                      className={`w-full cursor-pointer border-0 shadow-none transition-all duration-300 ${
                        index === current ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
                      }`}
                      onClick={() => handleCardClick(index)}>
                      <CardContent className='flex h-full flex-col p-4'>
                        {/* Year Badge */}
                        <motion.div
                          className='relative z-10 mb-4 flex justify-center'
                          transition={{ duration: 0.2 }}
                          whileHover={{ scale: 1.05 }}>
                          <Badge
                            className={`px-3 py-1 font-medium text-sm ${
                              event.isHighlight ? 'bg-[#b68931] text-white' : (
                                'border border-gray-300 bg-white text-gray-700'
                              )
                            }`}
                            variant={event.isHighlight ? 'default' : 'outline'}>
                            {event.year}
                          </Badge>
                        </motion.div>

                        {/* Image */}
                        {event.image && (
                          <div className='relative mb-4 aspect-[4/3] flex-shrink-0'>
                            <Image
                              alt={event.title}
                              className='rounded-lg object-cover'
                              fill
                              src={event.image ? urlFor(event.image).url() : ''}
                            />
                          </div>
                        )}

                        {/* Content */}
                        <h3 className='mb-2 font-medium text-gray-900 text-lg leading-tight'>{event.title}</h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>{event.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots Navigation */}
            <div className='mt-8 flex justify-center gap-2'>
              {timelineEvents.map((event, index) => (
                <button
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                    current === index ? 'w-6 bg-[#b68931]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  key={event.year}
                  onClick={() => api?.scrollTo(index)}
                  type='button'
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Timeline Highlights */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className='mt-16 text-center'>
            <div className='mx-auto flex max-w-4xl items-center justify-center space-x-8 text-gray-500 text-sm'>
              <div className='flex items-center space-x-2'>
                <div className='h-2 w-2 rounded-full bg-[#b68931]'></div>
                <span>{data.highlights?.milestoneLabel}</span>
              </div>
              <div className='h-px flex-1 bg-gray-300'></div>
              <span className='font-mono text-xs tracking-widest'>{data.highlights?.range}</span>
              <div className='h-px flex-1 bg-gray-300'></div>
              <div className='flex items-center space-x-2'>
                <span>{data.highlights?.legacyLabel}</span>
                <div className='h-2 w-2 rounded-full bg-gray-300'></div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Call to Action */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
          <div className='mt-16 text-center'>
            <motion.div transition={{ duration: 0.2 }} whileHover={{ scale: 1.02 }}>
              <p className='mb-4 text-gray-700 text-lg'>{data.callToAction?.line1}</p>
              <p className='text-gray-600'>{data.callToAction?.line2}</p>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
