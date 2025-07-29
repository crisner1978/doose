'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import type { SiteSettingsQueryResult } from '@/sanity/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface NavbarProps {
  logo?: NonNullable<SiteSettingsQueryResult>['logo']
  navigationLinks?: NonNullable<SiteSettingsQueryResult>['navigationLinks'] | null
  phone?: string | null
}

export const Navbar = ({ logo, navigationLinks, phone }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 15)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollToSection('hero')
    }
  }

  if (pathname.startsWith('/studio')) {
    return null
  }

  return (
    <header
      className={cn(
        'fixed inset-x-3 top-2 z-50 mx-auto flex max-w-7xl transform-gpu animate-slide-down-fade justify-center rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform',
        isScrolled ?
          'backdrop-blur-nav max-w-4xl border-white/20 bg-black/95 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70'
        : 'bg-white/0 dark:bg-gray-950/0',
      )}>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div
            className={cn(
              'flex items-center rounded-full ring-2 ring-[#B68931]/20',
              isScrolled ? 'ring-transparent' : 'ring-[#B68931]/20',
            )}>
            <Link className='cursor-pointer' href='/' onClick={handleLogoClick}>
              <Image
                alt='C.A. Doose & Company'
                className='object-contain rounded-full'
                height={70}
                sizes='100vw'
                src={logo ? urlFor(logo).width(70).height(70).url() : ''}
                width={70}
              />
            </Link>
          </div>

          {/* Navigation Links - Centered like auto.dev */}
          <nav className='md:-translate-x-1/2 md:-translate-y-1/2 hidden md:absolute md:top-1/2 md:left-1/2 md:block md:transform'>
            <div className='flex items-center space-x-5'>
              {navigationLinks?.map((link) => (
                <button
                  key={link.section}
                  className='cursor-pointer font-medium text-sm text-white/90 tracking-wide hover:text-[#b68931]'
                  onClick={() => scrollToSection(link.section ?? '')}
                  type='button'>
                  {link.text}
                </button>
              ))}
            </div>
          </nav>

          {/* Contact Info & CTA */}
          <div className='flex items-center space-x-3'>
            {/* Phone Number - Hidden on mobile */}
            <div className='hidden text-right md:block'>
              <p className='font-medium text-sm text-white'>{phone}</p>
            </div>

            {/* Contact Button */}
            <Button className='cursor-pointer bg-[#b68931] font-medium text-black text-sm hover:bg-[#a67d28]'>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
