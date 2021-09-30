import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../img/img-01.jpg';
import img2 from '../img/img-02.jpg';
import img3 from '../img/img-03.jpg';

export default function CarouselComponent() {
  return (
    <div>
      <h3>Carousel in React</h3>

      <div className="carousel-wrapper">
        <Carousel infiniteLoop autoPlay>
          <div>
            <img alt="" src={img1} />
          </div>
          <div>
            <img alt="" src={img2} />
          </div>
          <div>
            <img alt="" src={img3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
