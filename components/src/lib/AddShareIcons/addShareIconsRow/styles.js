
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	& > div:last-of-type {
		position: relative;
	},
    ${(props) =>
		props.order === 'horizontal'
			? `
    flex-direction: column;
    &:first-of-type {
        padding-right: calc(1rem - 1px);
    }
    &:last-of-type{
		padding-left: 1rem;
    }
    `
			: ''}
`;

export const SectionTitle = styled.div`
	margin-top: 0.15rem;
	margin-bottom: 0.15rem;
	margin-right: ${(props) => (props.order === 'horizontal' ? '0' : '0.4rem')};
`;

export const Content = styled.div`
	margin-top: 0.15rem;
	margin-bottom: 0.15rem;
	position: relative;
`;

export const Button = styled.button`
	all: initial;
	cursor: pointer;
	margin-right: 0.8rem;

	&:hover + span {
		visibility: visible;
		z-index: 999;
		opacity: 1;

		&::after {
			content: '';
			position: absolute;
			top: 100%;
			right: 0.75rem;
			margin-left: 0.25rem;
			border-width: 0.25rem;
			border-style: solid;
			border-color: rgba(85, 85, 85, 0.897) transparent transparent transparent;
		}
	}
`;

export const CopyTooltip = styled.span`
	visibility: hidden;
	width: max-content;
	background-color: rgba(85, 85, 85, 0.897);
	color: #fff;
	text-align: center;
	border-radius: 0.3rem;
	padding: 0.3rem;
	position: absolute;
	top: 0;
	right: 0;
	transform: translateY(calc(-100% - 0.25rem));
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s;
	overflow-wrap: anywhere;
`;
