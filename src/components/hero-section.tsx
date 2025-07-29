'use client'

import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import type { ExtractHomePageSectionNonNullable } from '@/sanity/helper-types'
import { client } from '@/sanity/lib/client'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const BLUR_FADE_DELAY = 0.04

type HeroSectionNonNullable = ExtractHomePageSectionNonNullable<'heroSection'>

// Helper function to get file URL from Sanity asset
const getFileUrl = (asset?: { _ref?: string; url?: string | null } | null) => {
  // If asset is already resolved, use the URL directly
  if (asset?.url) {
    console.log('resolved', { asset: asset.url })
    return asset.url
  }

  // If asset is a reference, construct the URL
  if (!asset?._ref) return null
  const [, id, extension] = asset._ref.split('-')
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${id}.${extension}`
}

export function HeroSection({ data }: { data: HeroSectionNonNullable }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Get video URL at component level
  const videoUrl = getFileUrl(data.backgroundVideo?.asset)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Account for navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleCtaClick = (cta: {
    action: 'about' | 'timeline' | 'brands' | 'team' | 'external'
    externalUrl?: string
  }) => {
    if (cta.action === 'external' && cta.externalUrl) {
      window.open(cta.externalUrl, '_blank', 'noopener,noreferrer')
    } else {
      scrollToSection(cta.action)
    }
  }

  if (!data) {
    return (
      <section
        className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900'
        id='hero'
        ref={ref}>
        <div className='text-center text-white'>
          <div className='animate-pulse'>Loading Hero Section...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden' id='hero' ref={ref}>
      {/* Background Video */}
      <motion.div className='absolute inset-0 z-0' style={{ opacity, y }}>
        {videoUrl ?
          <video autoPlay className='h-full w-full object-cover' loop muted playsInline>
            <source src={videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        : <video autoPlay className='h-full w-full object-cover' loop muted playsInline>
            <source src='/assets/Doose_Video_Background.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        }
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50' />
      </motion.div>

      {/* Content */}
      <div className='relative z-10 px-4 text-center text-white sm:px-0'>
        {/* Badge */}
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <Badge className='mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm' variant='outline'>
            {data.badge}
          </Badge>
        </BlurFade>

        {/* Main Heading */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <h1 className='mb-6 font-bold text-5xl tracking-tight md:text-7xl'>{data.title}</h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <p className='mb-8 text-2xl text-gray-300 italic md:text-3xl'>{data.subtitle}</p>
        </BlurFade>

        {/* Subtitle */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <p className='mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl'>{data.description}</p>
        </BlurFade>

        {/* Quote */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
          <blockquote className='mx-auto mb-8 max-w-2xl text-lg italic opacity-90 md:text-xl'>
            &quot;{data.quote}&quot;
          </blockquote>
        </BlurFade>

        {/* CTA Buttons */}
        <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            {data.primaryCta && (
              <Button
                className='w-full cursor-pointer text-base text-black hover:brightness-110 sm:w-auto sm:text-sm'
                onClick={() => handleCtaClick(data.primaryCta!)}
                size='lg'
                style={{ backgroundColor: '#b68931' }}>
                {data.primaryCta.text}
              </Button>
            )}
            {data.secondaryCta && (
              <Button
                className='w-full cursor-pointer text-base text-white hover:text-black sm:w-auto sm:text-sm'
                onClick={() => handleCtaClick(data.secondaryCta!)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b68931'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
                size='lg'
                style={
                  {
                    borderColor: '#b68931',
                    '--hover-bg': '#b68931',
                  } as React.CSSProperties
                }
                variant='ghost'>
                {data.secondaryCta.text}
              </Button>
            )}
          </div>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <div className='-translate-x-1/2 absolute bottom-8 left-1/2 transform text-white'>
        <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
          <div className='animate-bounce'>
            <div className='flex h-10 w-6 justify-center rounded-full border-2 border-white'>
              <div className='mt-2 h-3 w-1 animate-pulse rounded-full bg-white' />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
