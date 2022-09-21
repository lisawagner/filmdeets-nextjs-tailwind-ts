import { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import Glide, { ControlsComponent } from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.css";

const Carousel = () => {
  const slider = useRef<HTMLInputElement>(null);

  useEffect(() => {
    new Glide(slider.current, {
      autoplay: 5000
    }).mount()
  }, []);

  return (
    <div className="container">
          <div ref={slider} className="glide">
            <div className="glide__track w-64 h-32" data-glide-el="track">
              <div className="glide__slides w-32 h-32">
                <div className="glide__slide">
                  <Image
                    src="/images/baby-yoda-md.png"
                    className="img-fluid rounded"
                    layout='fill'
                    
                    // width={1280}
                    // height={280}
                  />
                </div>
                <div className="glide__slide">
                  <Image
                    src="/images/baby-yoda-thumb.png"
                    className="img-fluid rounded"
                    layout='fill'
                    // width={1280}
                    // height={280}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Carousel


