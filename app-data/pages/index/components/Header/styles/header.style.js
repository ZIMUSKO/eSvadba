import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 560px;
  width:100%;
  background-image: url(static/images/index/header.png);
  position: absolute;
  z-index: -1;
  background-position-y: center;
  background-size: cover;
`;
export const HeaderHolder = styled.div`
  position:relative;
  height: 560px;
`;

export const H1 = styled.h1`
  font-family: 'PT Serif', serif;
  font-size: 2rem;
  color:white;
  font-weight:bold;
  text-transform:uppercase;
  margin:0;
  text-align:center;
  padding-top: 6rem;
  line-height: 3.5rem;
  letter-spacing: 3px;
`;
export const H6 = styled.h6`
  font-size: 1.125rem;
  color:white;
  font-family: 'PT Serif', serif;
  text-align:center;
  font-weight:400;
  margin:1.7rem;
  letter-spacing: 1px;
`;
export const FindWrapper = styled.form`
  width:940px;
  margin:0 auto;
  display:flex;
  padding-top:1rem;
`;
export const FindServices = styled.input`
  width:50%;
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
`;
export const FindCity = styled.input`
  width:30%;
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
