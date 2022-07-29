import { css } from '@emotion/react';

const background = '#f3f3f3';
const color = '#a7a7a7'

const wrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  font-size: 14px;

  input,.input {
    position: relative;
    min-width: 200px;
    text-align: left;
    padding: 10px;
    background-color: ${background};
    color: ${color};
    border-radius: 5px;
    &:focus {
      color: black;
    }
  }
  label {
    margin-bottom: 5px;
    text-align: left;
  }
`;

const select = (show:boolean) => css`
  display: ${show? 'block': 'none'};
  position: absolute;
  top: 40px;
  left: 0px;
  background-color: white;
  border: 1px solid ${color};
  border-radius: 5px;
  padding: 8px;
  animation: appear 0.2s;

  ul {
    margin-top: 5px;
    max-height: 200px;
    overflow-y: auto;
    list-style: none;
    text-align: left;
    padding: 0;
  }
  @keyframes appear {
    from {transform: scale(0.5);opacity: 0;}
    to {transform: scale(1);opacity:1;}
  }
  li {
    padding: 3px 5px;
    margin: 3px 0;
    color: black;
    &:hover {
      cursor: pointer;
      background-color: ${background};
      border-radius: 5px;
    }
  }
  input.filterInput {
    background-color: ${background};
    padding: 3px 8px;
  }
  
`;

const styles = {
  wrapper,
  select,
};

export default styles;
