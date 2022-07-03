/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import styles from './Tabs.style';

type TabsProps = {
	tabs: {
		header: string;
		content: JSX.Element;
	}[];
	active?: number;
};

function Tabs({ active, tabs }: TabsProps) {

	let initialTab: number = Math.min(active || 0, tabs.length-1);
    
	const [activeTab, setActiveTab] = useState(initialTab);

	const tabsHeaders = tabs.map((tab, index) => (
		<button
			key={index}
			css={styles.tabHeader(index === activeTab)}
			type='button'
			onClick={() => setActiveTab(index)}>
			{tab.header}
		</button>
	));

	return (
		<div css={styles.tabs}>
			<div>{tabsHeaders}</div>
			<div css={styles.content}>{tabs[activeTab].content}</div>
		</div>
	);
}

export default Tabs;
