import React from 'react';
import Slider from 'react-slick';
import cert from "../images/cert teac2give me.jpeg";
import kyyugrad from "../images/kyu grad 2024 teach2give.jpeg";
import kyugraduation from "../images/kyu teach 2give grad.jpeg";
import sunshine from "../images/sunshine rally.jpeg";
import swags from "../images/mlsa swags.jpeg";
import csk from "../images/leads csk.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Photos = () => {
  const photos = [
    { id: 1, title: 'getting Teach2give cert', image: cert },
    { id: 2, title: 'kyu University graduation @ teach2give', image: kyyugrad },
    { id: 3, title: 'at rotaract sunshinerally Embu university', image: sunshine },
    { id: 4, title: 'Microsoft Learn Student Ambassador swags', image: swags },
    { id: 5, title: 'LEADS@ kyu csk', image: csk },
    { id: 6, title: 'kyu University graduation @ teach2give', image: kyugraduation },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Photo Memories</h1>
      <Slider {...settings}>
        {photos.map(photo => (
          <div key={photo.id} className="flex flex-col items-center p-4">
            <img src={photo.image} alt={photo.title} className="max-w-xl rounded-lg shadow-2xl mx-auto transition-all duration-700" />
            <h2 className="text-xl font-bold mt-4 text-white bg-black/60 px-4 py-2 rounded-lg">{photo.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Photos;



