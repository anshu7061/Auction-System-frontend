import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import a from "../assets/a.webp"
import b from "../assets/b.png"
import c from "../assets/c.jpeg"
export default function Slider() {
  return (

<Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false}>
                <div>
                    <img src={a}className='max-h-[80vh] rounded-2xl'/>
                </div>
                <div>
                    <img src={b}className='max-h-[80vh] rounded-2xl'/>
                </div>
                <div>
                    <img src={c}className='max-h-[80vh] rounded-2xl'/>
                </div>
            </Carousel>
    
    
  )
}
