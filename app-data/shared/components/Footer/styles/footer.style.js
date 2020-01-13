import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #575757;
  display:flex;
  margin-top:4rem;
  padding-bottom:4rem;
  position: relative;
`;
export const FooterItem = styled.div`
  width: 25%;
  display:flex;
  flex-direction: column;
`;
export const FooterHolder = styled.div`
  display:flex;
`;
export const Header = styled.h6`
  font-size: 1.125rem;
  font-family: "PTSerif", serif;
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  margin-top:5rem;
  margin-bottom:1.5rem;
`;

export const FooterLink = styled.a`
  font-size: 0.9375rem;
  font-family: "Ubuntu";
  color: rgb(255, 255, 255);
  margin-top:.5rem;
  cursor:pointer;
`;
export const BottomHolder = styled.div`
  display:flex;
`;
export const BottomWrapper = styled.div`
  background-color: #434343;
`;
export const BottomText = styled.p`
  font-size: 0.9rem;
  font-family: "Ubuntu";
  color: rgb(255, 255, 255);
  padding: 1rem 0;
  margin: 0;
  margin-right: 1rem;
`;
export const SocialHolder = styled.div`
  display:flex;
`;
export const SocialItem = styled.a`
  background-image: url('${({ img }) => (img)}');
  width: 40px;
  display: block;
  height: 40px;
  margin-right:1rem;
  cursor:pointer;
  width: max-content;
`;
export const Paper = styled.div`
  background-image: url('/static/images/shared/paper.png');
  width: 100%;
  height: 30px;
  position: absolute;
  transform: rotateZ(180deg);
  top: -6px;
`;
