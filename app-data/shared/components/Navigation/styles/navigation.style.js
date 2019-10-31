import styled from 'styled-components';

export const UL = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  list-style: none;
  clear: both;
  align-items: center;
  padding:0;
`;
export const LI = styled.li`
  padding: 1rem;
`;
export const LogoWrapper = styled.li`
  padding: 1.8rem 0rem;
  width:300px;
  margin-right: 2rem;
`;
export const Logo = styled.a`
  color:white;
  font-size:1.5rem;
  letter-spacing:1rem;
  margin-left: 2rem;
`;
export const A = styled.a`
  color: rgb(187, 147, 176);
  cursor:pointer;
  text-transform:uppercase;
  font-family: 'PT Serif', serif;
  font-size:0.875rem;
  font-weight: bold;
  &::after{
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #bb93b0;
    transition: width .3s;
  }
  &:hover::after{
    width:100%;
  }
`;
