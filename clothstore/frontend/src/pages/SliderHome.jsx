import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderHome({ items }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: "false",
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="slider-container px-6 py-8 w-320 gap-20  mx-auto">
      {items.length > 0 ? (
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-2 mx-6">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center text-gray-400">No items to display.</div>
      )}
    </div>
  );
}

export default SliderHome;
