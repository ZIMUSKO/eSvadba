import styled from 'styled-components';

export const FilterItem = styled.div`
  position:relative;
`;

export const Header = styled.input`
  display:none;
  appearance: none;
  pointer-events: all;
  cursor:pointer;
  outline:none;
  position: absolute;
  width: 100%;
  height: 26px;
  + label {
      display: block;
      user-select: none;
      &::before {
        transform: scale(1);
      }
      ~ [data-toggle-target] {
          height:0;
      }
  }

  &:checked {
      + label::before {
         transform: scale(-1);
      }
      ~ [data-toggle-target] {
          height:auto;
      }
  }
`;
export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: .5em 0em;
  font-size:1.125rem;
  font-family: 'PT Serif', serif;
  color: rgb(87, 87, 87);
  font-weight: bold;
  text-transform: uppercase;
  border:none;
  background: transparent;
  position:relative;
  margin-top: 2rem;
  ::before{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: rgb(87, 87, 87);
    border-top: 0px;
    position: absolute;
    top: 15px;
    right: 10px;
    transition: transform .3s ease;
  }
`;
export const Item = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1rem;
  color: rgb(67, 67, 67);
  border: none;
  outline: none;
  background-color: transparent;
  text-align: left;
  padding: .3rem 0rem;
  cursor:pointer;
`;
export const Items = styled.div`
  display:flex;
  flex-direction: column;
  overflow:hidden;
`;
