/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Container } from '../../../../shared/styles/global.style';
import ItemPlace from '../../../../shared/components/ItemPlace';

import { H2, SupplyHolder, Divider } from './styles/suppliers.style';

const Suppliers = () => {
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
  ];
  return (
    <>
      <Container id="suppliers">
        <H2>dodávatelia</H2>
        <Divider />
        <SupplyHolder>
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
        </SupplyHolder>
      </Container>
    </>
  );
};


export default Suppliers;
