import SectionIntro from '@/components/ui/SectionIntro'
import React from 'react'

const GalleryHeader = () => {
  return (
    <div>
      <SectionIntro
        className='space-y-3'
        headerText='Our Gallery'
        headingText='Visual Highlights of Our Work'
        paragraphText='Explore moments from our recent projects, company events, and milestones that define who we are and what we do.'
      />
    </div>
  )
}

export default GalleryHeader