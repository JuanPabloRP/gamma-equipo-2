import React from 'react';
import Youtube from 'react-youtube';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

const VideoCarousel = ({ videos }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id}>
            <ReactPlayer url={video.url} controls />
          </div>
        ))}
      </Slider>
    );
  };

export default VideoCarousel;
