import React from 'react'
import TextBreak from '../ui/TextBreak'

const UpperSection = () => {
  const images = [
    "/ruppur.jpeg",
    "/seo-image.jpg",
    "/about.jpeg",
    "/about.jpeg",
  ];
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center gap-10">
  {/* Left Text Section */}
  <div className="w-full lg:w-1/2 space-y-6 animate-slide-in-left">
    <h2 className="text-3xl md:text-8xl font-primary  text-mainText">
      <TextBreak text="Sister Concern" />
    </h2>
    <p className="text-paraText md:w-4/5">
      At Sinamm Engineering, our sister concerns are integral extensions of our mission to deliver excellence across industries. Each affiliated company operates independently yet shares our core values of innovation, quality, and service, enabling us to expand our reach and impact through specialized expertise and collaborative strength.
    </p>
  </div>

  {/* Right Image Grid */}
  <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-3 gap-2">
    <div className="overflow-hidden rounded-lg">
      <img
        src={images[0]}
        alt="Project 1"
        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-lg row-span-2">
      <img
        src={images[1]}
        alt="Project 2"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-lg">
      <img
        src={images[2]}
        alt="Project 3"
        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="overflow-hidden rounded-lg col-span-2">
      <img
        src={images[3]}
        alt="Project 4"
        className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</div>

  )
}

export default UpperSection