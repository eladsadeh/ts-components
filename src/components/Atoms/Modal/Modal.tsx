import React from 'react';

import styles from './Modal.styles';

export type ModalProps = {
    children?: React.ReactNode,
    isOpen: boolean,
    hasCloseButton: boolean,
    handleClose?: () => void,
};

const Modal = (props: ModalProps) => {
    return (
        <div css={styles.background(props.isOpen)}>
            <div css={styles.modal}>
                <div css={styles.cross(props.hasCloseButton)}
                     onClick={props?.handleClose}
                />

                {props.children}
            </div>
        </div>
    );
};

export default Modal;