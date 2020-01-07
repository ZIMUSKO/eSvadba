/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Container } from '../../../../shared/styles/global.style';

import {
  Wrapper, H1, H6, FindWrapper, FindServices, FindCity, Find, Paper, HeaderHolder,
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
            Pomáhame vám naplánovať váš špeciálny deň.
          </H1>
          <H6>
            Vyberte si pre Váš svadobný deň to najlepšie, pozrite si širokú ponuku dodávateľov
            <br />
            služieb a zarezervujte si ich včas.
          </H6>
          <FindWrapper>
            <FindServices type="text" placeholder="Vyhľadávajte hotely, reštaurácie, kapely..." />
            <FindCity type="text" placeholder="Zadajte mesto" />
            <Find>Hľadať</Find>
          </FindWrapper>
        </Container>
      </HeaderHolder>
    </Container>
  </>
);


export default Header;
