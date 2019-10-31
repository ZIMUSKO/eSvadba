import React from 'react';
import Link from 'next/link';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import { toggleLangMutation } from '../../../graphql/mutation';
import { Container } from '../../styles/global.style';

import {
  UL, LI, A, Logo, LogoWrapper,
} from './styles/navigation.style';

import localisation from '../../localisation/Navigation';

const Navigation = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
  graphql(toggleLangMutation, { name: 'toggleLang' }),
)(({ getLocale: { lang }, toggleLang }) => (
  <div className="navbar">
    <Container fluid>
      <UL className="d-flex m-0 p-0 list-unstyled justify-content-start">
        <LogoWrapper className="mr-2 purp">
          <Link href="/">
            <Logo>ESVADBA</Logo>
          </Link>
        </LogoWrapper>
        <LI className="mr-2">
          <Link href="/">
            <A>{localisation[lang].home}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/moja-svadba">
            <A>{localisation[lang].mywedding}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/svadobne-miesta">
            <A>{localisation[lang].places}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/dodavatelia">
            <A>{localisation[lang].supplier}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/forum">
            <A>{localisation[lang].forum}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/blog">
            <A>{localisation[lang].blog}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/inspiracia">
            <A>{localisation[lang].inspiration}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/bazar">
            <A>{localisation[lang].sale}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/udalosti">
            <A>{localisation[lang].events}</A>
          </Link>
        </LI>
        <LI className="ml-auto">
          <A
            onClick={async () => {
              try {
                await toggleLang({
                  variables: { lang: lang === 'sk' ? 'en' : 'sk' },
                });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {lang.toUpperCase()}
          </A>
        </LI>
      </UL>
    </Container>
  </div>
));

export default Navigation;
