import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 576px){
    padding-left: ${({ fluid }) => (fluid ? '0' : '1.5rem')};
    padding-right: ${({ fluid }) => (fluid ? '0' : '1.5rem')};
  }
  @media only screen and (min-width: 36em) {  /* 576px */
    margin-left: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    margin-right: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    padding-left: 15px;
    padding-right: 15px;
    width: ${({ fluid }) => (fluid ? '100%' : '460px')};
  }
  @media only screen and (min-width: 48em) {  /* 768px */
    margin-left: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    margin-right: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    padding-left: 15px;
    padding-right: 15px;
    width: ${({ fluid }) => (fluid ? '100%' : '650px')};
  }
  @media only screen and (min-width: 62em) { /* 992px */
    margin-left: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    margin-right: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    padding-left: 15px;
    padding-right: 15px;
    width: ${({ fluid }) => (fluid ? '100%' : '770px')};
  }
  @media only screen and (min-width: 75em) { /* 1200px */
    margin-left: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    margin-right: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    padding-left: ${({ fluid }) => (fluid ? '15px' : 'auto')};
    padding-right: 15px;
    width: ${({ fluid }) => (fluid ? '100%' : '980px')};
  }
  @media only screen and (min-width: 90em) { /* 1440px */
    margin-left: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    margin-right: ${({ fluid }) => (fluid ? '-15px' : 'auto')};
    padding-left: ${({ fluid }) => (fluid ? '15px' : 'auto')};
    padding-right: 15px;
    width: ${({ fluid }) => (fluid ? '100%' : '1200px')};
  }
`;

export const Row = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  & [class*="Col"] {
    float: left;
    margin: 0.5rem 2%;
    min-height: 0.125rem;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Col = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  width: ${
  ({ smSize }) => {
    let colWidth = '96%';
    if (smSize) {
      switch (smSize) {
        case 1:
          colWidth = '4.33%';
          break;
        case 2:
          colWidth = '12.66%';
          break;
        case 3:
          colWidth = '21%';
          break;
        case 4:
          colWidth = '29.33%';
          break;
        case 5:
          colWidth = '37.66%';
          break;
        case 6:
          colWidth = '46%';
          break;
        case 7:
          colWidth = '54.33%';
          break;
        case 8:
          colWidth = '62.66%';
          break;
        case 9:
          colWidth = '71%';
          break;
        case 10:
          colWidth = '79.33%';
          break;
        case 11:
          colWidth = '87.66%';
          break;
        default:
          break;
      }
    }
    return colWidth;
  }
};

@media only screen and (min-width: 62em) {  /* 720px */
  width: ${
  ({ mdSize }) => {
    let colWidth = '96%';

    if (mdSize) {
      switch (mdSize) {
        case 1:
          colWidth = '4.33%';
          break;
        case 2:
          colWidth = '12.66%';
          break;
        case 3:
          colWidth = '21%';
          break;
        case 4:
          colWidth = '29.33%';
          break;
        case 5:
          colWidth = '37.66%';
          break;
        case 6:
          colWidth = '46%';
          break;
        case 7:
          colWidth = '54.33%';
          break;
        case 8:
          colWidth = '62.66%';
          break;
        case 9:
          colWidth = '71%';
          break;
        case 10:
          colWidth = '79.33%';
          break;
        case 11:
          colWidth = '87.66%';
          break;
        default:
          break;
      }
    }

    return colWidth;
  }
};

@media only screen and (min-width: 48em) {  /* 720px */
  width: ${
  ({ size }) => {
    let colWidth = '96%';

    if (size) {
      switch (size) {
        case 1:
          colWidth = '4.33%';
          break;
        case 2:
          colWidth = '12.66%';
          break;
        case 3:
          colWidth = '21%';
          break;
        case 4:
          colWidth = '29.33%';
          break;
        case 5:
          colWidth = '37.66%';
          break;
        case 6:
          colWidth = '46%';
          break;
        case 7:
          colWidth = '54.33%';
          break;
        case 8:
          colWidth = '62.66%';
          break;
        case 9:
          colWidth = '71%';
          break;
        case 10:
          colWidth = '79.33%';
          break;
        case 11:
          colWidth = '87.66%';
          break;
        default:
          break;
      }
    }

    return colWidth;
  }
};
    display: block;
  }
`;
