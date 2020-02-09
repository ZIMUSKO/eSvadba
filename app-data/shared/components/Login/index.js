/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Form, FormGroup,
} from 'reactstrap';
import { graphql } from 'react-apollo';
import { loginUserMutation } from '../../../graphql/mutation';
import Styles from '../../styles/global.style';


import {
  Holder, H1, Wrapper, LoginHolder, Input, Button, TextHolder, P, Danger,
} from './styles/login.style';

const Login = graphql(loginUserMutation)(({ mutate }) => {
  const [incorrect, setIncorrect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await mutate({
        variables: { email, password },
      });
      // eslint-disable-next-line no-underscore-dangle
      console.log(response.data);
      setIncorrect(false);
      window.location.href = '/admin';
    } catch (err) {
      console.log(err);
      setIncorrect(true);
    }
  };

  return (
    <>
      <Styles />
      <Wrapper>
        <LoginHolder>
          <Holder>
            <H1>Login</H1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              <Danger incorrect={incorrect}>Wrong username or password!</Danger>
              <Button type="submit">Login</Button>
            </Form>
            <TextHolder>
              <P>Not a member?</P>
              <Link href="/registration"><a>Sign up now</a></Link>
            </TextHolder>
          </Holder>
        </LoginHolder>
      </Wrapper>
    </>
  );
});

export default Login;
