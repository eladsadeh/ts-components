/** @jsxImportSource @emotion/react */

import React from 'react';

import styles from './Badge.style';

type BadgeProps = {
	children?: JSX.Element;
	count?: number;
	status?: 'default' | 'success' | 'error' | 'warning' | 'processing';
	size?: 's' | 'm' | 'l';
	text?: string;
	maxCount?: number;
	hide?: boolean;
};

const Badge = (props: BadgeProps) => {
	let { count, status, size, text, maxCount, hide, children } = props;

	const isPrimary = !!children;
	let isEmpty = false;
	maxCount = maxCount || 99;
	status = status || 'default';

	let label: string = '';
	if (count !== undefined) {
		label = count > maxCount ? `${maxCount}+` : `${count}`;
	} else {
		isEmpty = true;
	}

	const badgeCss = isPrimary ? styles.primary : styles.standalone;

	return (
		<div
			// className={children?.props?.className ? children?.props?.className : ''}
			title={`${status}-badge`}>
			<div css={styles.wrapper}>
				{isPrimary && <div>{children}</div>}
				<span css={[styles.badge(hide, size, status, isEmpty), badgeCss]}>
					{label}
				</span>
				{!isPrimary && <span css={styles.text(size, hide)}>{text}</span>}
			</div>
		</div>
	);
};

export default Badge;
