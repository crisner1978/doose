import { urlFor } from '@/sanity/lib/image'
import type { SiteSettingsQueryResult } from '@/sanity/types'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface FooterProps {
  logo?: NonNullable<SiteSettingsQueryResult>['logo']
  footerText?: string | null
  socialLinks?: NonNullable<SiteSettingsQueryResult>['socialLinks'] | null
  footerLinks?: NonNullable<SiteSettingsQueryResult>['footerLinks'] | null
  email?: string | null
  phone?: string | null
}

export const Footer = ({ email, footerLinks, footerText, logo, phone, socialLinks }: FooterProps) => {
  const socialIcons: Record<string, React.ReactNode> = {
    facebook: <Facebook className='h-5 w-5' />,
    twitter: <Twitter className='h-5 w-5' />,
    linkedin: <Linkedin className='h-5 w-5' />,
    instagram: <Instagram className='h-5 w-5' />,
  }

  return (
    <footer className='border-t border-gray-800 bg-black text-white'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid gap-12 lg:grid-cols-4'>
          {/* Logo and Description */}
          <div className='lg:col-span-2'>
            <Link className='cursor-pointer inline-block' href='/'>
              <Image
                alt='C.A. Doose & Company'
                height={300}
                src={logo ? urlFor(logo).width(300).height(300).url() : ''}
                width={300}
                className='h-auto w-auto max-h-50'
              />
            </Link>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='mb-4 font-semibold text-white text-base'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              {footerLinks?.map((link) => (
                <li key={link._id}>
                  <Link
                    className='cursor-pointer text-gray-400 hover:text-[#b68931] transition-colors duration-200'
                    href={`/legal/${link.slug.current}`}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='mb-4 font-semibold text-white text-base'>Contact</h3>
            <div className='space-y-2 text-sm'>
              {email && (
                <div>
                  <a
                    className='cursor-pointer text-gray-400 hover:text-[#b68931] transition-colors duration-200'
                    href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              )}
              {phone && (
                <div>
                  <a
                    className='cursor-pointer text-gray-400 hover:text-[#b68931] transition-colors duration-200'
                    href={`tel:${phone}`}>
                    {phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div>
              <h3 className='mb-4 font-semibold text-white text-base'>Follow Us</h3>
              <div className='flex gap-3'>
                {socialLinks?.map((social) => (
                  <a
                    className='cursor-pointer text-gray-400 hover:text-[#b68931] transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg'
                    href={social.url ?? undefined}
                    key={social.platform}
                    rel='noopener noreferrer'
                    target='_blank'>
                    {social.platform && socialIcons[social.platform]}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 mt-8 pt-6'>
          <p className='text-gray-500 text-sm text-center'>
            &copy; {new Date().getFullYear()} {footerText}
          </p>
        </div>
      </div>
    </footer>
  )
}
