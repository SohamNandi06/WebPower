import React, { useRef, useState, useEffect } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 3;

  const nextImgRef = useRef(null);
  const currentImgRef = useRef(null);

  const upcomingImageIndex = (currentIndex % totalImages) + 1;

  const handleMiniImgClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingImageIndex); 
  };

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages >= totalImages) {
      setIsLoading(false);
    }
  }, [loadedImages]);

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-img', { visibility: 'visible' });
      gsap.to('#next-img', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
      });
      gsap.from('#current-img', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });

  useGSAP(() => {
    gsap.set('#image-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    });
    gsap.from('#image-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#image-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const getImageSrc = (index) => `/img/heroju-${index}.jpg`;

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      {/* Loading Screen */}
      {isLoading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="image-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          {/* Mini clickable image */}
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div
              onClick={handleMiniImgClick}
              className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'
            >
              <img
                ref={currentImgRef}
                src={getImageSrc(upcomingImageIndex)}
                id='current-img'
                className='size-64 origin-center scale-150 object-cover object-center'
                alt="upcoming"
                onLoad={handleImageLoad}
              />
            </div>
          </div>

          {/* Next image */}
          <img
            ref={nextImgRef}
            src={getImageSrc(currentIndex)}
            id='next-img'
            className='absolute-center invisible absolute z-20 object-cover size-64 object-center'
            alt="next"
            onLoad={handleImageLoad}
          />

          {/* Main background image */}
          <img
            src={getImageSrc(currentIndex)}
            className='absolute left-0 top-0 size-full object-cover object-center'
            alt="main"
            onLoad={handleImageLoad}
          />
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-50 '>
          <b>Engineering</b>
        </h1>

        <div className='absolute left-0 top-0 z-40 size-full'>
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>
              <b>Power</b>
            </h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
              Empowering Minds <br /> Energizing the future
            </p>
            <Button
              id='watch-trailer'
              title='Watch Trailer'
              leftIcon={<TiLocationArrow />}
              containerClass='bg-yellow-300 flex-center gap-1'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
