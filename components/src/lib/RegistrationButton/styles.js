import styled from 'styled-components';

export const Button = styled.button`
all: unset;
width: fit-content;
background-color: #8437ff;
color: white;
min-height: 38px;
padding: 12px 16px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
box-sizing: border-box;
position: relative;

${(props) => (props.disabled ? `cursor: auto;` : '')}
`;