import { css } from '@emotion/react';

const sizes = { s: '10px', m: '14px', l: '16px' };
const colors = {
	default: { background: 'grey', color: 'white' },
	success: { background: 'green', color: 'white' },
	error: { background: 'red', color: 'white' },
	warning: { background: 'gold', color: 'black' },
	processing: { background: 'blue', color: 'white' },
};

const badge = (
	hide: boolean = false,
	size: string = 'm',
	status: string = 'error',
	isEmpty: boolean
) => css`
	--size: ${sizes[size as keyof typeof sizes]};
	display: ${hide ? 'none' : 'inline-block'};
	line-height: 1;
	min-height: var(--size);
	min-width: var(--size);
	background-color: ${colors[status as keyof typeof colors].background};
	color: ${colors[status as keyof typeof colors].color};
	font-size: var(--size);
	font-weight: bold;
	vertical-align: middle;
	border-radius: ${isEmpty ? '50%' : '12px'};
	padding: ${isEmpty ? '0' : '4px 8px'};
`;
const primary = css`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(50%, -50%);
`;
const standalone = css`
	position: relative;
`;

const wrapper = css`
	position: relative;
	display: inline-block;
`;

const text = (size: string = 'm', hide: boolean = false) => css`
	display: ${hide ? 'none' : 'inline-block'};
	font-size: ${sizes[size as keyof typeof sizes]};
	line-height: 1;
	position: relative;
	vertical-align: middle;
	padding: 0 5px;
`;

const styles = {
	badge,
	primary,
	standalone,
	wrapper,
	text,
};

export default styles;
