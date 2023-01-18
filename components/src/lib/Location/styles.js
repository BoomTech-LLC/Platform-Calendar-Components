import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const LineBraker = styled.div`
	word-break: break-word;

	${(props) =>
		props.elipsis
			? `overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;`
			: ''}
`;
