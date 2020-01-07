/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Container } from '../../../../shared/styles/global.style';

import {
  Wrapper, H1, H6, FindWrapper, FindCategory, Find, Paper, HeaderHolder, CategorySelect,
} from './styles/header.style';

const Header = () => (
  <>
    <Container fluid id="header">
      <Wrapper>
        <Paper />
      </Wrapper>
      <HeaderHolder>
        <Container>
          <H1>
            Fórum
          </H1>
          <H6>
            Vyberte si pre Váš svadobný deň to najlepšie, pozrite si širokú ponuku dodávateľov
            <br />
            služieb a zarezervujte si ich včas.
          </H6>
          <FindWrapper>
            <CategorySelect placeholder="Vyhľadávajte hotely, reštaurácie, kapely...">
              <option value="1" default>Nevesta</option>
              <option value="2">Ženích</option>
              <option value="3">Jedlo a zákusky</option>
              <option value="4">Svadobná cesta</option>
            </CategorySelect>
            <FindCategory type="text" placeholder="Kategória" />
            <Find>Hľadať</Find>
          </FindWrapper>
        </Container>
      </HeaderHolder>
    </Container>
  </>
);


export default Header;
