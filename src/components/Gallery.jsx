import React from 'react'

const BentoCard = ({src, title,description})=>{
  return(
    <div className='relative size-full '>
      <video
      src={src}
      loop 
      muted
      autoPlay
      className='absolute left-0 top-0 size-full object-cover object-center'
      />
      <div className='absolute z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
        <div>
          <h1 className='bento-title special-font'>
            {title}
          </h1>
          {description && (
            <p className='mt-3 max-w-64 text-xs md:text-base'>
              {description}
              </p>
          )}
        </div>

      </div>
    </div>
  )
}

const Gallery = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32'>
          <p className='font-circular-web text-lg text-blue-50'>
            Step into the universe of Power Engineering
          </p>
        
        <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
          Leading advancements in energy systems, smart grids, and sustainable technologies
        </p>
      </div>
      
      <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard
        src="videos/feature-1.mp4"
        title={<> Gall<b>e</b>ry</>}
        description="Explore the world of Power Engineering through our curated gallery, showcasing cutting-edge technologies and innovations."
        />

      </div>
    </div>
    </section>
  )
}

export default Gallery
