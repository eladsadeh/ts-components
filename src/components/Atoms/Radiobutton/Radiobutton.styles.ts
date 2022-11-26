import {css} from '@emotion/react';
import {RadiobuttonProps} from "./Radiobutton";
import selected from './select.svg';
import disabled from './disabled.svg';

const colors = {
    uncheckedInput: '#575757',
    uncheckedText: '#575757',

    checkedInput: '#6FBC65',
    checkedText: '#335F2B',

    disabledInput: '#B0B0B0',
    disabledText: '#B0B0B0',
};

const radiobutton = (props: RadiobuttonProps) => css`
  display: none;

  + label {
    font-family: Lato, 'serif';
    display: block;
    width: fit-content;
    cursor: pointer;
    color: ${colors.uncheckedText};
    font-size: 18px;
    font-weight: 400;

    &:active::before {
      transform: scale(0.8);
      transition: all 150ms;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 21px;
      height: 21px;
      border: 2px solid ${colors.uncheckedInput};
      border-radius: 20px;
      box-sizing: border-box;
      margin-right: 15px;
      vertical-align: text-bottom;
    }
  }

  &:checked {
    + label {
      color: ${colors.checkedText};

      &::before {
        content: "";
        background-image: url(${selected});
        border: none;
      }
    }
  }

  &:disabled {
    + label {
      color: ${colors.disabledText};
      cursor: default;

      &:active::before {
        transform: scale(1);
      }

      &::before {
        content: "";
        background-image: ${props.checked ? `url(${disabled})` : "none"};
        border: ${props.checked ? "none" : `2px solid ${colors.disabledInput}`};
      }
    }
  }
`;

const styles = {
    radiobutton,
};

export default styles;