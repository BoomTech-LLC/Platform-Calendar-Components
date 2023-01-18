import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	& > h3 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		padding-bottom: 0.5rem;
	}
`;

export const SectionTitle = styled.h3`
	${(props) =>
		props.titleBorderHidden
			? ''
			: `
            border-bottom-width: 1px;
            border-bottom-style: solid;
          `}
`;

export const WrapperRows = styled.div`
	display: flex;
	align-items: flex-start;
	overflow-wrap: anywhere;
	gap: 0.5rem;
	& > span {
		pointer-events: none;
		margin-left: 0.5rem;
	}
	& > a {
		margin-left: 0.5rem;
	}

	& a {
		color: inherit;
	}
`;
