/** @jsxImportSource @emotion/react */
import React from 'react';
// Icons
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
// Style
import styles from './Actions.styles';

export type ActionsProps = {
	actions: {
		type: 'delete' | 'edit';
		title?: string;
		onClick: () => void;
	}[];
};
function Actions(props: ActionsProps) {
	const icons = {
		delete: deleteIcon,
		edit: editIcon,
	};

	return (
		<div css={styles.actions}>
			{props.actions.map((action, index) => (
				<img
					key={index}
					src={icons[action.type as keyof typeof icons]}
					alt={action.type}
					title={action.title || action.type}
					onClick={action.onClick}
				/>
			))}
		</div>
	);
}

export default Actions;
