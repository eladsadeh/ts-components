/** @jsxImportSource @emotion/react */

import React from 'react';
import styles from './Tabs.style';

type TabsProps = {
	tabs: {
		header: string;
		content: JSX.Element;
	}[];
	active?: number;
};

function Tabs(props: TabsProps) {
	console.log(props);

	return <div css={styles.tabs}>Tabs</div>;
}

export default Tabs;
