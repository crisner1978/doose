'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { ExtractHomePageSectionNonNullable } from '@/sanity/helper-types'
import { urlFor } from '@/sanity/lib/image'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const BLUR_FADE_DELAY = 0.04

type ExecutiveTeamSectionNonNullable = ExtractHomePageSectionNonNullable<'executiveTeamSection'>

export function ExecutiveTeamSection({ data }: { data: ExecutiveTeamSectionNonNullable }) {
  const [selectedMember, setSelectedMember] = useState<string | null>(null)

  const executiveTeam = data.teamMembers

  const openModal = (memberName: string) => {
    setSelectedMember(memberName)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  // Check if team member should be displayed (has both bio and photo)
  const _shouldDisplayMember = (member: (typeof executiveTeam)[0]) => {
    return member.bio !== 'TBD' && member.headshot?.asset !== undefined
  }

  const selectedTeamMember = executiveTeam.find((member) => member.name === selectedMember)

  if (!data) {
    return (
      <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900' id='team'>
        <div className='text-center text-white'>
          <div className='animate-pulse'>Loading Executive Team...</div>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-white py-24' id='team'>
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

        {/* Team Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {executiveTeam.filter(_shouldDisplayMember).map((member, index) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + index * 0.1} inView key={member.name}>
              <Card className='group hover:-translate-y-1 cursor-pointer border-0 bg-gray-50 shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-6'>
                  {/* Photo */}
                  <div className='relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full'>
                    <Image
                      alt={`${member.name} headshot`}
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                      fill
                      src={member.headshot ? urlFor(member.headshot).url() : ''}
                    />
                  </div>

                  {/* Name & Title */}
                  <div className='mb-4 text-center'>
                    <h3 className='mb-2 font-bold text-gray-900 text-xl'>{member.name}</h3>
                    <p className='font-medium text-gray-600'>{member.title}</p>
                  </div>

                  {/* Bio Preview */}
                  <div className='text-center'>
                    <p className='text-gray-700 text-sm leading-relaxed'>
                      {member.bio !== 'TBD' ?
                        member.bio.length > 200 ?
                          `${member.bio.substring(0, 200)}...`
                        : member.bio
                      : 'Biography coming soon.'}
                    </p>
                  </div>

                  {/* Read More Button */}
                  {member.bio !== 'TBD' && member.bio.length > 200 && (
                    <div className='mt-4 text-center'>
                      <Button
                        className='cursor-pointer text-[#b68931] hover:bg-[#b68931]/10 hover:text-[#b68931]'
                        onClick={() => openModal(member.name)}
                        size='sm'
                        variant='ghost'>
                        Read Full Bio →
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Bottom Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 8} inView>
          <div className='mt-16 text-center'>
            <p className='mb-4 text-gray-700 text-lg'>{data.closingText?.line1}</p>
            <p className='text-gray-600'>{data.closingText?.line2}</p>
          </div>
        </BlurFade>
      </div>

      {/* Modal */}
      {selectedMember && selectedTeamMember && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
          <div className='relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl'>
            {/* Close Button */}
            <Button className='absolute top-4 right-4 z-10' onClick={closeModal} size='sm' variant='ghost'>
              <X className='h-4 w-4' />
            </Button>

            {/* Modal Content */}
            <div className='p-8'>
              {/* Header */}
              <div className='mb-6 text-center'>
                <div className='relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full'>
                  <Image
                    alt={`${selectedTeamMember.name} headshot`}
                    className='object-cover'
                    fill
                    src={selectedTeamMember.headshot ? urlFor(selectedTeamMember.headshot).url() : ''}
                  />
                </div>
                <h3 className='mb-2 font-bold text-2xl text-gray-900'>{selectedTeamMember.name}</h3>
                <p className='font-medium text-gray-600 text-lg'>{selectedTeamMember.title}</p>
              </div>

              {/* Full Bio */}
              <div className='prose prose-gray max-w-none'>
                <p className='text-gray-700 leading-relaxed'>{selectedTeamMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
