import { css } from '@emotion/react';

const breadcrumbs = css`
	display: inline-block;
	ol {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		display: inline-block;
	}
	a {
		color: gray;
		&:hover {
			color: black;
		}
	}
`;

const styles = {
	breadcrumbs,
};

export default styles;
