/** @jsxImportSource @emotion/react */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.style';

type BreadcrumbProps = {
	routes: { URL: string; text: string }[];
	separator?: string;
};

function Breadcrumb(props: BreadcrumbProps) {
	const separator: string = props.separator || '/';

	const breadcrumbs = props.routes.map((route, idx) => (
		<li key={idx}>
			<Link to={route.URL}>{route.text}</Link>
			<span>&nbsp;{separator}&nbsp;</span>
		</li>
	));

	return (
		<div css={styles.breadcrumbs}>
			<ol>{breadcrumbs}</ol>
		</div>
	);
}

export default Breadcrumb;
