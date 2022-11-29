import React, {useState} from 'react';

import styles from './Checkbox.styles';

export type CheckboxProps = {
    disabled: boolean,
    checked: boolean,
    id: string,
    name: string,
    text: string,
};

const Checkbox = (props: CheckboxProps) => {
    const [checked, setChecked] = useState(props.checked);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <input css={styles.checkbox(props)}
                   type="checkbox"
                   disabled={props.disabled}
                   name={props.name}
                   id={props.id}
                   checked={checked}
                   onChange={handleChange}
            />
            <label htmlFor={props.id}>
                {props.text}
            </label>
        </>
    );
};

Checkbox.defaultProps = {
    disabled: false,
    checked: false,
    text: "Hi there",
    name: "checkbox",
};

export default Checkbox;