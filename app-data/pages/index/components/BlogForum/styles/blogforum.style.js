import styled from 'styled-components';

export const BlogHolder = styled.div`
  display:flex;
  justify-content: space-between;
  padding-bottom:5rem;
`;

export const ForumHolder = styled.div`
  display:flex;
  flex-direction: column;
  padding-left: 2rem;
`;
export const H2 = styled.h2`
  font-family: 'PT Serif', serif;
  color: rgb(187, 147, 176);
  font-size:2.25rem;
  text-transform:uppercase;
`;
export const H2F = styled.h2`
  font-family: 'PT Serif', serif;
  color: rgb(187, 147, 176);
  font-size:2.25rem;
  text-transform:uppercase;
  padding-left:2rem;
`;
export const ForumLink = styled.div`
  width: 100%;
`;

export const ForumHeader = styled.h6`
  font-family: "PTSerif", serif;
  color: rgb(87, 87, 87);
  font-weight: bold;
  font-size:1.125rem;
  margin:0;
`;
export const ForumText = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: rgb(187, 187, 187);
  line-height: 1.2;
  font-size:0.9375rem;
  margin-top:.7rem;
  margin-bottom:1.5rem;
`;

export const Info = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: rgb(187, 187, 187);
  font-style: italic;
  text-transform: uppercase;
  font-size:0.8125rem;
  margin:0;
  margin-top:.7rem;
`;
export const ForumButtom = styled.a`
  background-color:#18b4bc;
  color:white;
  text-transform:uppercase;
  font-family: "PTSerif", serif;
  font-weight:500;
  font-size:.9rem;
  letter-spacing:2px;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
  cursor:pointer;
`;
