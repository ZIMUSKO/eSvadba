/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import Link from 'next/link';
import Slider from 'react-slick';
import SlickStyle from '../../../../shared/styles/lib/slick.style';
import SlickStyleTheme from '../../../../shared/styles/lib/slick_theme.style';
import { Container } from '../../../../shared/styles/global.style';


import {
  H2, ReferLink, InspirationHolder, Item, Image, H6, InspirationWrapper, OpacityLeft, OpacityRight,
} from './styles/randominspiration.style';

const RandomInspiration = () => {
  const settings = {
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  const supplyData = [
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration1.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
    {
      image: './static/images/index/inspiration2.png',
      name: 'Wedding venue title name',
      url: '/inspirations',
    },
  ];
  return (
    <>
      <SlickStyle />
      <SlickStyleTheme />
      <InspirationWrapper id="random_inspiration">
        <Container>
          <H2>náhodné inšpirácie</H2>
        </Container>
        <InspirationHolder>
          <OpacityLeft />
          <OpacityRight />
          <Slider {...settings}>
            {
              supplyData.map(({
                image, name, url,
              }, i) => (
                <div key={i}>
                  <Item>
                    <Image photo={image} />
                    <Link href={url}>
                      <a>
                        <H6>{name}</H6>
                      </a>
                    </Link>
                  </Item>
                </div>
              ))
            }
          </Slider>
        </InspirationHolder>
      </InspirationWrapper>
    </>
  );
};


export default RandomInspiration;
