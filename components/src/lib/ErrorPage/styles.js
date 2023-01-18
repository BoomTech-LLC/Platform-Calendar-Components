import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 24px;
	${(props) =>
		props.pageCover
			? `  position: fixed;
				top: 0;
				left: 0;
				z-index: 999999;
			`
			: ''}
`;

export const Title = styled.h1`
	text-align: center;
	font-size: 40px;
	letter-spacing: 0.02em;
	color: var(--wsr-text-color-primary);
	font-family: var(--typography1539259966-wsr-font-family, inherit);
	margin: 0;

	@media only screen and (max-width: 500px) {
		.title {
			font-size: 28px;
		}
	}
`;


export const ImageWrapper = styled.img`
display: flex;
width: 50%;
max-width: 500px;
justify-content: center;
align-items: center;
margin-top: 40px;
& img{
	width: 100%;
}
`
