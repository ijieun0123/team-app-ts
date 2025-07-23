import styled, { css } from "styled-components";

const InputTextareaStyle = css`
    width: 100%;
    padding: 13px 16px;
    border: 1px solid rgba(81, 92, 111, 0.3);
    border-radius: 4px;

    &::placeholder {
        color: rgba(81, 92, 111, 0.3);
    }

    @media (max-width: 480px) {
        padding: 10px 13px;
    }
`;

const InputTextarea = styled.input`
    ${InputTextareaStyle}
`;

export default InputTextarea;
