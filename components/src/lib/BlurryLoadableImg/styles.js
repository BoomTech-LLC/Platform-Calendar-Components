import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
    & img {
        height: 100%;
        width: 100%;
        display: block;
        object-fit: cover;
    }
    & img.hidden {
        max-height: 0;
    }
    & img.shown {
        max-height: 999999px;
    }
`;
