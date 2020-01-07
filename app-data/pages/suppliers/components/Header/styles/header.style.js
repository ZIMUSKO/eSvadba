import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 400px;
  width:100%;
  background-image: url(static/images/suppliers/header.png);
  position: absolute;
  z-index: -1;
  background-position-y: center;
  background-size: cover;
`;
export const HeaderHolder = styled.div`
  position:relative;
  height: 400px;
`;

export const H1 = styled.h1`
  font-family: 'PT Serif', serif;
  font-size: 3rem;
  color:white;
  font-weight:bold;
  text-transform:uppercase;
  margin:0;
  text-align:center;
  padding-top: 6rem;
  line-height: 3.5rem;
  letter-spacing: 3px;
`;
export const H2 = styled.h2`
  font-size: 2.25rem;
  font-family: 'PT Serif',serif;
  font-weight: bold;
  color: rgb(187,147,176);
  text-transform: uppercase;
  letter-spacing: 3px;
`;
export const H6 = styled.h6`
  font-size: 1.125rem;
  color:white;
  font-family: 'PT Serif', serif;
  text-align:center;
  font-weight:400;
  margin:1rem;
  letter-spacing: 1px;
`;
export const FindWrapper = styled.form`
  width:940px;
  margin:0 auto;
  display:flex;
  justify-content: center;
  padding-top:1rem;
`;
export const CategorySelect = styled.select`
  width:300px;
  padding: 1rem;
  font-family: 'Ubuntu', sans-serif;
  font-size:0.9375rem;
  outline:none;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right:1px solid grey;
  &::placeholder{
    color: rgb(187, 187, 187);
  }
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const FindCategory = styled.input`
  width: 268px;
  padding: 1rem;
  font-family: 'Ubuntu', sans-serif;
  font-size:0.9375rem;
  outline:none;
  border: none;
  &::placeholder{
    color: rgb(187, 187, 187);
  }
`;
export const Find = styled.button`
  width:20%;
  padding: 1rem;
  background-color:#18b4bc;
  color:white;
  font-family: 'PT Serif', serif;
  font-weight:bold;
  font-size:1rem;
  outline:none;
  border:none;
  text-transform:uppercase;
  letter-spacing:3px;
`;
export const Paper = styled.div`
  background-image: url('/static/images/shared/paper.png');
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: -6px;
`;
