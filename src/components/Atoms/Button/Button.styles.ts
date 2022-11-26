import {css} from '@emotion/react';
import {ButtonProps} from "./Button";

const types = {
    submit: {
        textColor: '#FFF',
        background: '#6FBC65',
        border: 'none',
    },
    add: {
        textColor: '#6FBC65',
        background: '#FFF',
        border: '1px solid #6FBC65',
    },
    delete: {
        textColor: '#FFF',
        background: '#E9647D',
        border: 'none',
    },
    cancel: {
        textColor: '#B0B0B0',
        background: '#FFF',
        border: '1px solid #B0B0B0',
    },
};

const sizes = {
    L: {
        width: '370px',
        height: '40px',
        fontSize: '18px',
        fontWeight: '400',
    },
    M: {
        width: '125px',
        height: '40px',
        fontSize: '18px',
        fontWeight: '400',
    },
    S: {
        width: '88px',
        height: '40px',
        fontSize: '16px',
        fontWeight: '600',
    },
    XS: {
        width: '50px',
        height: '24px',
        fontSize: '12px',
        fontWeight: '600',
    },
};

const buttonStyles = (props: ButtonProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes?.[props.size as keyof typeof sizes]?.height || sizes.M.height};
  min-width: ${sizes?.[props.size as keyof typeof sizes]?.width || sizes.M.width};
  max-width: fit-content;
  padding: 0 8px;
  font-size: ${sizes?.[props.size as keyof typeof sizes]?.fontSize || sizes.M.fontSize};
  font-weight: ${sizes?.[props.size as keyof typeof sizes]?.fontWeight || sizes.M.fontWeight};
  color: ${types?.[props.type as keyof typeof types]?.textColor || types.submit.textColor};
  background-color: ${types?.[props.type as keyof typeof types]?.background || types.submit.background};
  border: ${types?.[props.type as keyof typeof types]?.border || types.submit.border};
  border-radius: 5px;
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
`;

const icon = css`
  height: 50%;
  padding: 0 5px;
`;

const styles = {
    buttonStyles,
    icon,
};

export default styles;