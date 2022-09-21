import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import Thumbnail from "./Thumbnail";

// Glide works with glitches
// doesn't work well with styled-components, tailwind and @glidejs. Removing sc helped
// doesn't work well with next/image

const Gallery = (): JSX.Element => {
  const tempImg = "/images/placeholder.png"
  useEffect(() => {
    // if (process.browser) {
      if (typeof window !== 'undefined') {
      new Glide(".glide", {
        type: "carousel",
        perView: 3,
        focusAt: "center",
      }).mount();
    }
  }, []);

  return (
    <div className=" py-8 bg-brand-900">
      <div className=" flex items-center justify-center">
        <h2 className="text-white font-bold">Picture Gallery</h2>
      </div>

      <div className="gallery-slider bg-yellow-800">
        <div className="glide bg-orange-600">
          <div className="glide__track bg-slate-500" data-glide-el="track">
            <ul className="glide__slides relative flex justify-center items-center">
              <li className="glide__slide bg-purple-300 relative flex items-center justify-center">
                <img className="rounded-md" src="/images/baby-yoda-md.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide bg-blue-500 relative flex items-center justify-center">
                <img src="/images/baby-yoda-thumb.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide bg-green-400 relative flex items-center justify-center">
                <img src="/images/baby-yoda-md.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide relative flex items-center justify-center">
                {/* <img src="/images/baby-yoda-thumb.png" alt="" loading="lazy" /> */}
                <span className="w-full h-full relative z-50 bg-yellow-300">
                  <Image
                    // placeholder='blur'
                    // blurDataURL='/images/placeholder.png'
                    className='rounded'
                    layout='fill'
                    objectFit='contain'
                    // objectFit='cover'
                    src="/images/baby-yoda-md.png"
                    alt='thumbnail'
                    priority={true}
                  />
                </span>
                {/* <Thumbnail imgUrl={tempImg} /> */}
              </li>
            </ul>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left btn"
              data-glide-dir="<"
            >
              <RiArrowLeftSLine />
            </button>
            <button
              className="glide__arrow glide__arrow--right btn"
              data-glide-dir=">"
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Wrapper = styled.div`
//   .glide__slide {
//     img {
//       width: 100%;
//       height: 100%;
//       /* max-height: 217px; */
//     }
//   }
//   .glide__arrow {
//     box-shadow: none;
//     z-index: 100;
//     background: white;
//   }
// `;

export default Gallery;