import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { compose, graphql } from 'react-apollo';
import { getLocaleQuery } from '../../../graphql/query';
import { toggleLangMutation } from '../../../graphql/mutation';

import localisation from '../../localisation/Navigation';

const Navigation = compose(
  graphql(getLocaleQuery, { name: 'getLocale' }),
  graphql(toggleLangMutation, { name: 'toggleLang' }),
)(({ getLocale: { lang }, toggleLang }) => (
  <div className="border mb-4 p-2">
    <Container>
      <ul className="d-flex m-0 p-0 list-unstyled justify-content-start">
        <li className="mr-2">
          <Link href="/">
            <button type="button" className="btn btn-link">{localisation[lang].homeLink}</button>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/sub-page">
            <button type="button" className="btn btn-link">{localisation[lang].subPageLink}</button>
          </Link>
        </li>
        <li className="ml-auto">
          <button
            type="button"
            className="btn btn-link"
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
          </button>
        </li>
      </ul>
    </Container>
  </div>
));

export default Navigation;
