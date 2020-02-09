import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(0deg, rgba(158,20,120,1) 14%, rgba(187,147,176,1) 100%);
`;
export const LoginHolder = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Holder = styled.div`
  background: white;
  width: 300px;
  border-radius: 4px;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

export const H1 = styled.h1`
  text-align:center;
  text-transform: uppercase;
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 70%;
  margin: 0 auto;
  display: block;
  padding:1rem;
  background:#efeded;
  outline:none;
  border:none;
  margin-top:.5rem;
  font-weight:bold;
`;
export const Button = styled.button`
  width:80%;
  height:50px;
  background: rgba(19,170,207,1);
  color:white;
  border: none;
  outline: none;
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size:1rem;
  cursor:pointer;
  text-transform: uppercase;
  &:hover{
    background: rgba(91,68,159,1);
  }
`;
export const TextHolder = styled.div`
  display:flex;
  justify-content: center;
  padding-bottom: 2rem;
  margin-top: 2rem;
`;
export const P = styled.p`
  margin:0;
  font-size: 1rem;
  line-height:22px;
  margin-right:4px;
`;
export const Danger = styled.p`
  color: red;
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 2rem;
  display: ${({ incorrect }) => (incorrect ? 'block' : 'none')};
`;
