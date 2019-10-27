/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';


import {
  Holder, Image, H6, LocationHolder, LocationIcon, Location, PriceHolder, PriceFrom, Price,
  InfoHolder, CapacityHolder, CapacityFrom, Capacity,
} from './styles/itemplace.style';

const ItemPlace = ({
  image, name, location, price, capacity,
}) => (
  <>
    <Holder>
      <Image src={image} alt="" />
      <H6>{name}</H6>
      <LocationHolder>
        <LocationIcon src="./static/images/shared/pin.png" />
        <Location>{location}</Location>
      </LocationHolder>
      <InfoHolder>
        <PriceHolder>
          <PriceFrom>Cena od</PriceFrom>
          <Price>
            {price}
            Eur
          </Price>
        </PriceHolder>
        <CapacityHolder>
          <CapacityFrom>Kapacita</CapacityFrom>
          <Capacity>
            {capacity}
            ľudí
          </Capacity>
        </CapacityHolder>
      </InfoHolder>
    </Holder>
  </>
);


ItemPlace.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
};

export default ItemPlace;
