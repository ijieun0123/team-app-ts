import styled, { css } from "styled-components";

const BtnStyle = css`
    width: 168px;
    height: 46px;
    background: rgba(81, 92, 111, 0.1);
    color: var(--gray-color);
    border-radius: 4px;
`;

const Button = styled.button`
    ${BtnStyle}
`;

export default Button;
