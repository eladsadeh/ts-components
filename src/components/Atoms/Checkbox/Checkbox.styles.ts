import {css} from '@emotion/react';
import {CheckboxProps} from "./Checkbox";
import checkedIcon from "./check.svg";
import disabledCheck from './disabledCheck.svg';

const colors = {
    uncheckedInput: '#575757',
    uncheckedText: '#575757',

    checkedInput: '#6FBC65',
    checkedText: '#335F2B',

    disabledInput: '#B0B0B0',
    disabledText: '#B0B0B0',
};

const checkbox = (props: CheckboxProps) => css`
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
    }

    &::before {
      content: "";
      display: inline-block;
      width: 21px;
      height: 21px;
      border: 2px solid ${colors.uncheckedInput};
      border-radius: 5px;
      box-sizing: border-box;
      margin-right: 15px;
      vertical-align: text-bottom;
      transition: all 150ms;
    }
  }

  &:checked {
    + label {
      color: ${colors.checkedText};
      
      &::before {
        content: "";
        background-image: url(${checkedIcon});
        width: 21px;
        height: 21px;
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
        background-image: ${props.checked ? `url(${disabledCheck})` : "none"};
        width: 21px;
        height: 21px;
        border: ${props.checked ? 'none' : `2px solid ${colors.disabledInput}`};
      }
    }
  }
`;

const styles = {
    checkbox,
};

export default styles;