import { css } from '@emotion/react';

const tabs = css`
	text-align: left;
	padding: 20px;
`;
const content = css`
	padding-top: 10px;
	border-top: 1px solid lightgray;
	margin-top: -1px;
`;
const headers = css`
	white-space: nowrap;
	overflow: scroll;
`;

const tabHeader = (isActive: boolean) => css`
	--highlight-color: #1890ff;
	display: inline-block;
	box-sizing: border-box;
	margin-right: 20px;
	padding: 10px 0px;
	border: none;
	background-color: transparent;
	color: ${isActive ? 'var(--highlight-color)' : 'black'};
	text-shadow: ${isActive ? '0 0 0.5px currentcolor' : 'none'};
	border-bottom: ${isActive ? '2px solid var(--highlight-color)' : 'none'};
	cursor: pointer;

	&:hover {
		color: var(--highlight-color);
	}
`;

const styles = {
	tabs,
	headers,
	content,
	tabHeader,
};

export default styles;
