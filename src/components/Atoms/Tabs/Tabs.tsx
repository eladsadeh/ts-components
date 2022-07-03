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
	console.log(tabs);
	let initialTab: number = active || 0;
	const [activeTab, setActiveTab] = useState(initialTab);
	console.log(activeTab);

	const handleTabClick = (index: number) => setActiveTab(index);

	const tabsHeaders = tabs.map((tab, i) => (
		<button type='button' onClick={() => handleTabClick(i)}>
			{tab.header}
		</button>
	));
	console.log(tabsHeaders);

	return (
		<div css={styles.tabs}>
			<div>{tabsHeaders}</div>
			<div>{tabs[activeTab].content}</div>
		</div>
	);
}

export default Tabs;
