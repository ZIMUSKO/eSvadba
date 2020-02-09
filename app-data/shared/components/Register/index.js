import React, { useState } from 'react';
import {
  Form, FormGroup,
} from 'reactstrap';
import { graphql } from 'react-apollo';
import { registerUserMutation } from '../../../graphql/mutation';
import Styles from '../../styles/global.style';


import {
  Holder, H1, Wrapper, LoginHolder, Input, Button,
} from './styles/register.styles';

const Register = graphql(registerUserMutation)(({ mutate }) => {
  const [disabled, toggleDisabled] = useState(true);
  const handleCheckPassword = () => {
    const form = document.querySelector('form');
    const password = form.password.value;
    const passwordToCheck = form.confirmPassword.value;

    if (password === passwordToCheck) {
      // console.log('Passwords match');
      toggleDisabled(!disabled);
    } else {
      toggleDisabled(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = {};
    const form = e.currentTarget;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;
    const roleName = 'Customer';

    try {
      const response = await mutate({
        variables: {
          username,
          email,
          password,
          roleName,
        },
      });
      console.log(response);
      window.location.href = '/login';
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Styles />
      <Wrapper>
        <LoginHolder>
          <Holder>
            <H1>Registration</H1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input type="text" name="username" id="username" placeholder="Your username" />
              </FormGroup>
              <FormGroup>
                <Input type="email" name="email" id="email" placeholder="Your email" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="password" id="password" placeholder="Your password" />
              </FormGroup>
              <FormGroup>
                <Input type="password" name="confirmPassword" onChange={handleCheckPassword} id="confirmPassword" placeholder="Confirm password" />
              </FormGroup>
              <Button type="submit" disabled={disabled}>Register</Button>
            </Form>
          </Holder>
        </LoginHolder>
      </Wrapper>
    </>
  );
});

export default Register;
