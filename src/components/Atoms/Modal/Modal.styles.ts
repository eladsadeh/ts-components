import {css} from '@emotion/react';
import crossIcon from './cross.svg';

const background = (isOpen: boolean) => css`
  display: ${isOpen ? `flex` : `none`};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const modal = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 21000;
  box-sizing: border-box;
  min-width: 650px;
  max-width: 95vw;
  min-height: 370px;
  max-height: 70vh;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 20px;
  background-color: #FFF;
`;

const cross = (show: boolean) => css`
  display: ${show ? `block` : `none`};
  width: 12px;
  height: 12px;
  padding: 12px;
  position: absolute;
  right: 12px;
  top: 10px;
  cursor: pointer;

  &::after {
    content: url(${crossIcon});
    position: absolute;
    top: 0;
    right: 5px;
  }
`;

const styles = {
    background,
    modal,
    cross,
};

export default styles;