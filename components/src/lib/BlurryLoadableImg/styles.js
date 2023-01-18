import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	display: block;
	object-fit: cover;
	max-height: ${(props) => (props.shown ? '999999px' : '0')},
		${(props) =>
			props.blurred
				? `filter: blur(30px);
					-webkit-filter: blur(30px);
					-moz-filter: blur(30px);
					-o-filter: blur(30px);
					-ms-filter: blur(30px);
					transform: scale(1.05);`
				: ''};
`;