/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Container } from '../../../../shared/styles/global.style';
import RollText from '../../../../shared/components/RollText';

import {
  H2, FilteredWrapper, FilterWrapper, AddContribution,
} from './styles/filter.style';

const categoryData = [
  {
    name: 'Kategórie',
    itemData: [
      { item: 'Plánovanie' },
      { item: 'Urob si sam' },
      { item: 'Zenich' },
      { item: 'Nevesta' },
      { item: 'Po svadbe' },
      { item: 'Fitness a zdravie' },
      { item: 'Podpora' },
    ],
  },
];
const blogData = [
  {
    name: 'Blog',
    itemData: [
      { item: 'Plánovanie' },
      { item: 'Zdravie a krasa' },
      { item: 'Svadobna cesta' },
      { item: 'Svadobna hostina' },
      { item: 'Urob si sam' },
      { item: 'Svadba celebrit' },
      { item: 'Po svadbe' },
    ],
  },
];

const Filter = () => (
  <Container>
    <H2>SVADOBNÁ CESTA</H2>
    <FilterWrapper>
      <AddContribution>+ Pridať príspevok</AddContribution>
      <RollText
        name={categoryData[0].name}
        itemData={categoryData[0].itemData}
      />
      <RollText
        name={blogData[0].name}
        itemData={blogData[0].itemData}
      />
    </FilterWrapper>
  </Container>
);


export default Filter;
