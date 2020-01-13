/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';


import {
  Header, FilterItem, Label, Item, Items,
} from './styles/rolltext.style';

const RollText = ({
  name, itemData,
}) => (
  <FilterItem>
    <Header type="checkbox" id={name} defaultChecked />
    <Label htmlFor={name}>
      {name}
    </Label>
    <Items data-toggle-target>
      {
        itemData.map(({
          item,
        }, i) => (
          <Item
            key={i}
          >
            {item}
          </Item>
        ))
      }
    </Items>
  </FilterItem>
);

RollText.defaultProps = {
  itemData: [

  ]
  ,
};

RollText.propTypes = {
  name: PropTypes.string.isRequired,
  itemData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default RollText;
