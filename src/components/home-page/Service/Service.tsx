import React from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceBody from './ServiceBody'

const Service = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f3f5f7]'>
      <ServiceHeader />
      <ServiceBody/>
    </div>
  )
}

export default Service