import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import { toggleLangMutation } from '../../../graphql/mutation';

import { UL, LI, A } from './styles/navigation.style';

import localisation from '../../localisation/Navigation';

const Navigation = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
  graphql(toggleLangMutation, { name: 'toggleLang' }),
)(({ getLocale: { lang }, toggleLang }) => (
  <div className="border mb-4 p-2">
    <Container>
      <UL className="d-flex m-0 p-0 list-unstyled justify-content-start">
        <LI className="mr-2">
          <Link href="/">
            <A>{localisation[lang].homeLink}</A>
          </Link>
        </LI>
        <LI className="mr-2">
          <Link href="/sub-page">
            <A>{localisation[lang].subPageLink}</A>
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
