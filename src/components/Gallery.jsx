import React from 'react'
import {useState} from 'react';
import {useRef} from 'react';
const BentoTilt=({children, className=''})=>{
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();
  const handleMouseMove=(e)=>{
    if(!itemRef.current) return;
    const {left, top, width, height} = itemRef.current.getBoundingClientRect();
    const relativeX =(e.clientX - left)/width;
    const relativeY=(e.clientY - top)/height;
    const tiltX=(relativeY - 0.5)*10;
    const tiltY=(relativeX - 0.5)*-10;
    const newTransform=`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;

    setTransformStyle(newTransform);
  }
  const handleMouseLeave=()=>{
    setTransformStyle('');
  }
  return(
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}} >
      {children}  
    </div>
  )
}

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
      
      <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard
        src="videos/featueju-2.mp4"
        title={<> Gall<b>e</b>ry</>}
        description="Explore the world of Power Engineering through our curated gallery, showcasing cutting-edge technologies and innovations."
        />

      </BentoTilt>
      <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
          <BentoCard
          src="videos/featureju-1.mp4"
          title={<>Eve<b>n</b>ts</>}
          description="Join us in our journey of innovation and excellence. Stay updated with our latest events and initiatives."
          />

        </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1  ms-32 md:col-span-1 md:ms-0'>
          <BentoCard
          src="videos/featureju-3.mp4"
          title={<>Alu<b>m</b>ni</>}
          description="Connect with our vibrant alumni community. Share experiences, insights, and opportunities in the field of Power Engineering."
          />

        </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1  ms-32 md:col-span-1 md:ms-0'>
          <BentoCard
          src="videos/featureju-4.mp4"
          title={<>MileSto<b>n</b>es</>}
          description="Celebrate our achievements and milestones in the field of Power Engineering. Together, we are shaping the future."
          />

        </BentoTilt>

      </div>
    </div>
    </section>
  )
}

export default Gallery
