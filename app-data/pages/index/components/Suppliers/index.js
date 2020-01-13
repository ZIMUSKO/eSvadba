/* eslint-disable react/no-array-index-key */
import React from 'react';

import Slider from 'react-slick';
import { Container } from '../../../../shared/styles/global.style';
import ItemPlace from '../../../../shared/components/ItemPlace';
import SlickStyle from '../../../../shared/styles/lib/slick.style';
import SlickStyleTheme from '../../../../shared/styles/lib/slick_theme.style';

import { H2, SupplyHolder, Divider } from './styles/suppliers.style';

const Suppliers = () => {
  const settings = {
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
  };
  const supplyData = [
    {
      image: './static/images/index/supply1.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 45,
      capacity: 120,
    },
    {
      image: './static/images/index/supply2.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 60,
      capacity: 150,
    },
    {
      image: './static/images/index/supply3.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 70,
      capacity: 110,
    },
    {
      image: './static/images/index/supply3.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 70,
      capacity: 110,
    },
    {
      image: './static/images/index/supply1.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 45,
      capacity: 120,
    },
    {
      image: './static/images/index/supply2.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 60,
      capacity: 150,
    },
    {
      image: './static/images/index/supply3.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 70,
      capacity: 110,
    },
    {
      image: './static/images/index/supply3.png',
      name: 'Wedding venue title name',
      location: 'Hlavná 14, Košice - Staré mesto',
      price: 70,
      capacity: 110,
    },
  ];
  return (
    <>
      <SlickStyle />
      <SlickStyleTheme />
      <Container id="suppliers">
        <H2>dodávatelia</H2>
        <Divider />
        <SupplyHolder>
          <Slider {...settings}>
            {
              supplyData.map(({
                image, name, location, price, capacity,
              }, i) => (
                <ItemPlace
                  image={image}
                  name={name}
                  location={location}
                  price={price}
                  capacity={capacity}
                  key={i}
                />
              ))
            }
          </Slider>
        </SupplyHolder>
      </Container>
    </>
  );
};


export default Suppliers;
