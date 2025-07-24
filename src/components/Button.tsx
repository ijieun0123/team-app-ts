import styled, { css } from "styled-components";

const BtnStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 46px;
    border-radius: 4px;
`;

const Button = styled.button<{ $black?: boolean }>`
    ${BtnStyle}
    background: ${({ $black }) =>
        $black ? "var(--black-color)" : "rgba(81, 92, 111, 0.1)"};
    color: ${({ $black }) => ($black ? "#fff" : "var(--gray-color)")};
`;

export default Button;
