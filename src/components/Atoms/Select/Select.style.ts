import { css } from '@emotion/react';

const background = '#f3f3f3';
const color = '#a7a7a7'

const wrapper = css`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 50%;
  h2 {
    font-weight: bold;
    font-size: 16px;
    margin: 16px 16px 0;
  }
`;

const buttons = css`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  margin: 20px;
`;

const message = css`
  margin: 0 20px;
  min-height: 20px;
  font-size: 12px;
`;

const inputs = css`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 16px;
  font-size: 14px;

  input,.input {
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
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const select = (show:boolean) => css`
  display: ${show? 'block': 'none'};
  position: absolute;
  top: 60px;
  left: 10px;
  background-color: white;
  border: 1px solid ${color};
  border-radius: 5px;
  padding: 8px;
  animation: appear 0.2s;

  ul {
    margin-top: 5px;
    max-height: 200px;
    overflow-y: auto;
  }
  @keyframes appear {
    from {transform: scale(0.5);opacity: 0;}
    to {transform: scale(1);opacity:1;}
  }
  li {
    padding: 3px 5px;
    margin: 3px 0;
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
  buttons,
  inputs,
  wrapper,
  form,
  message,
  select,
};

export default styles;
