import { css } from '@emotion/react';

const tabs = css`
	width: 100%;
    text-align: left;
    margin-top: 20px;
    `;
const content = css`
	border: 1px solid gray;
	padding: 10px;
	margin-top: -1px;
    `;

const tabHeader = (isActive: boolean) => css`
	display: inline-block;
	box-sizing: border-box;
	margin-right: 1px;
	padding: 5px 10px;
	border: 1px solid gray;
	border-radius: 5px 5px 0 0;
	background-color: ${isActive ? 'transparent' : '#F0f0f0'};
	color: ${isActive ? 'black' : 'gray'};
	border-bottom: ${isActive ? '1px solid white' : '1px solid gray'};
	cursor: pointer;

	&:hover {
		background-color: ${isActive ? 'transparent' : 'white'};
	}
`;

const styles = {
	tabs,
	content,
	tabHeader,
};

export default styles;
