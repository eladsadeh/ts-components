/** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from 'react';
import styles from './Tabs.style';

type TabsProps = {
	tabs: {
		header: string;
		content: JSX.Element;
	}[];
	active?: number;
};

function Tabs({ active, tabs }: TabsProps) {
	const verifyActiveTab = (tabNum: number | undefined): number => {
		tabNum = (tabNum || 0) % tabs.length;
		return tabNum < 0 ? tabNum + tabs.length : tabNum;
	};

	let initialTab: number = verifyActiveTab(active);
	const [activeTab, setActiveTab] = useState(initialTab);

	useEffect(() => {
		setActiveTab(verifyActiveTab(active));
	}, [active, tabs]);

	const tabsHeaders = tabs.map((tab, index) => {
		const isActive = index === activeTab;
		return (
			<button
				key={index}
				css={styles.tabHeader(isActive)}
				type='button'
				onClick={() => setActiveTab(index)}>
				{tab.header}
			</button>
		);
	});

	return (
		<div css={styles.tabs}>
			<div css={styles.headers}>{tabsHeaders}</div>
			<div css={styles.content}>{tabs[activeTab].content}</div>
		</div>
	);
}

export default Tabs;
