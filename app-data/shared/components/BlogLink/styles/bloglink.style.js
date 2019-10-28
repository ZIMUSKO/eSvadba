import styled from 'styled-components';

export const Image = styled.img`
  border-radius:4px;
  width: 100%;
  box-shadow: 0px 0px 20px 1px lightgrey;
`;

export const Header = styled.h6`
  font-family: "PTSerif", serif;
  color: rgb(87, 87, 87);
  font-weight: bold;
  font-size:1.125rem;
  margin:0;
  margin-top: .7rem;
`;

export const Category = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: rgb(187, 187, 187);
  font-style: italic;
  text-transform: uppercase;
  font-size:0.8125rem;
  margin:0;
  margin-top:.7rem;
`;

export const Text = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: rgb(187, 187, 187);
  line-height: 1.2;
  font-size:0.9375rem;
  margin-top:.7rem;
  margin-bottom:.7rem;
`;

export const More = styled.a`
  font-size:0.8125rem;
  font-family: "PTSerif", serif;
  font-weight: bold;
  color:white;
  text-transform: uppercase;
  background:#18b4bc;
  text-decoration:none;
  padding: .7rem 1.5rem;
  border-radius: 4px;
  position: relative;
  top: .7rem;
`;
export const Holder = styled.div`
  width:31%;
`;
