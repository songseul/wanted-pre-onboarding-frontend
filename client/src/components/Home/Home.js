import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';
import { imageData } from './data';

const Home = () => {
  const image = imageData.images;
  return (
    <CarouselWrapper autoplay>
      {image?.map(({ id, src }) => {
        return (
          <div key={id} className="image-box">
            <img src={src} alt="슬라이더 이미지" />
          </div>
        );
      })}
    </CarouselWrapper>
  );
};

export default Home;

const CarouselWrapper = styled(Carousel)`
  .image-box {
    width: 100%;
    height: 400px;
    overflow: hidden;
    @media screen and (max-width: 479px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
  .slick-dots {
    z-index: 0;
  }

  .slick-dots li button {
    background: #aaa;
    opacity: 1;
  }
  .slick-dots li.slick-active button {
    background: #f67280;
  }
`;
