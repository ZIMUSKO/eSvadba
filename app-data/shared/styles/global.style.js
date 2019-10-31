import { createGlobalStyle } from 'styled-components';

export { default as Reset } from './lib/reset.style';
export { Container, Col, Row } from './lib/grid.style';

export default createGlobalStyle`
  /* AOS CSS */
  @import url('https://unpkg.com/aos@3.0.0-beta.6/dist/aos.css') screen;
  @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  #__next {
    overflow: hidden;
    .navbar{
      position: fixed;
      background-color: white;
      width: 100%;
      z-index: 9999;
    }
    .purp{
      background-color: #bb93b0;
    }
    #header{
      position:relative;
      min-height:80vh;
      top:84px;
    }
    #blogforum{
      margin-top:5rem;
    }
  }
`;
