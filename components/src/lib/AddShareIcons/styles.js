
import styled from 'styled-components';

export const RowsWrapper = styled.div`
	display: ${(props) => (props.order === 'horizontal' ? 'flex' : 'block')};
`;

export const SectionTitle = styled.h3`
	margin-top: 0;
	margin-bottom: 0.5rem;
	padding-bottom: 0.5rem;
	${(props) =>
		props.titleBorderHidden
			? `
        border-bottom-width: 1px;
        border-bottom-style: solid;
      `
			: ''}
`;

export const Divider = styled.div`
	height: 18px;
	width: 1px;
	background-color: #2b5672;
	margin-top: auto;
	margin-bottom: 0.2rem;
	margin-right: 1rem;
`;