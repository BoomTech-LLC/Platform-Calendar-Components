import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	& > div:first-of-type {
		margin-top: 2px;
	}
	& > div:nth-of-type(2) {
		flex-direction: column;
		display: flex;
		gap: 0.25rem;
	}
`;
