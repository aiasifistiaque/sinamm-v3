import SectionIntro from '@/components/ui/SectionIntro'
import React from 'react'

const NewsHeader = () => {
  return (
    <div className=''>
      <SectionIntro
        className='space-y-3'
        headerText='Latest News'
        headingText='Company News & Updates'
        paragraphText='Stay informed about our latest projects, industry insights, and company announcements.'
      />
    </div>
  )
}

export default NewsHeader