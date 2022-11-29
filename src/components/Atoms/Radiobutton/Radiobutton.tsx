import React, {useEffect, useState} from 'react';

import styles from './Radiobutton.styles';

export type RadiobuttonProps = {
    disabled: boolean,
    checked: boolean,
    id: string,
    value: string,
    name: string,
    text: string,
};

const Radiobutton = (props: RadiobuttonProps) => {
    const [selected, setSelected] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.currentTarget.value);
    };

    const isRadioChecked = () => selected === props.value;

    let check;

    useEffect(() => {
        check = isRadioChecked();
    }, [selected]);

    return (
        <>
            <input css={styles.radiobutton(props)}
                   type="radio"
                   disabled={props.disabled}
                   name={props.name}
                   id={props.id}
                   checked={check}
                   value={props.value}
                   onChange={handleChange}
            />
            <label htmlFor={props.id}>
                {props.text}
            </label>
        </>
    );
};

Radiobutton.defaultProps = {
    disabled: false,
    checked: false,
    text: "Work Territory Type",
    value: "Work Territory Type",
    name: "radiobutton",
};

export default Radiobutton;