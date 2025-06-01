import React from 'react'
import GalleryHeader from './GalleryHeader'
import GalleryBody from './GalleryBody'
import BorderBottom from '@/components/ui/BorderBottom'

const Gallery = () => {
  return (
    <>
    <div className='flex container mx-auto w-full flex-col'>
      <div className='px-4'>
        <GalleryHeader />
      </div>
      <GalleryBody />
    </div>
    <BorderBottom className='container mx-auto' />
    </>
    
  )
}

export default Gallery