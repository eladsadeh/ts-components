import React from 'react';
import styles from "./Button.styles";

export type ButtonProps = {
    size: 'L' | 'M' | 'S' | 'XS' | string,
    icon?: string,
    type: 'submit' | 'add' | 'delete' | 'cancel' | string,
    text: string,
    disabled?: boolean,
    handleClick?: any,
};

const Button = (props: ButtonProps) => {
    return (
        <div
            css={styles.buttonStyles(props)}
            onClick={props.handleClick}
        >
            {props.text}

            {props.icon ? (
                <img
                    css={styles.icon}
                    src={props.icon}
                    alt={props.text}
                />
            ) : null}
        </div>
    );
}

export default Button;