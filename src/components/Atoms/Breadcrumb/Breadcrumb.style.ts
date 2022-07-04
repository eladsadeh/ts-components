import { css } from '@emotion/react';

const breadcrumbs = css`
	display: inline-block;
    margin: 10px;
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
        text-decoration: none;
		margin: 0 10px;
		&:hover {
			color: black;
		}
	}
`;

const styles = {
	breadcrumbs,
};

export default styles;
