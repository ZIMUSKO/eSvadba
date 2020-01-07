import styled from 'styled-components';

export const H2 = styled.h2`
  font-size:2.25rem;
  font-family: 'PT Serif', serif;
  font-weight:bold;
  color: rgb(187, 147, 176);
  text-transform:uppercase;
  text-align:left;
  letter-spacing:3px;
  padding-top:2rem;
`;

export const ReferLink = styled.a`
  background-color:#18b4bc;
  color:white;
  text-transform:uppercase;
`;
export const InspirationWrapper = styled.div`
  width:100vw;
`;
export const InspirationHolder = styled.div`
  max-width: 100vw;
  white-space: nowrap;
  position: relative;
  margin: 0 auto;
`;
export const Item = styled.div`
  height:260px;
  position:relative;
  padding: .5rem;
`;
export const Image = styled.div`
background-image: url('${({ photo }) => (photo)}');
  background-size: cover;
  width:100%;
  height:100%;
  background-position: center center;
`;
export const H6 = styled.h6`
  font-size:1.5rem;
  font-family: 'PT Serif', serif;
  color: black;
  position:absolute;
  left:0;
  bottom:0;
  margin:1rem;
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  overflow:hidden;
  min-height:100%;
  margin: 15px auto 60px;
`;

export const OpacityLeft = styled.div`
  right: 75%;
  display: inline-block;
  clear: both;
  background-color: #f6f6f7;
  width: 1000px;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  margin: 0;
  opacity: .4;
`;
export const OpacityRight = styled.div`
  left: 75%;
  display: inline-block;
  clear: both;
  background-color: #f6f6f7;
  width: 1000px;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  margin: 0;
  opacity: .4;
`;
