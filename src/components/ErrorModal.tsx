import styled from "styled-components";
import React from "react";
import type { ErrorResponse } from "../utils/errorUtils";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalContainer = styled.div`
    position: relative;
    background: white;
    border-radius: 8px;
    padding: 35px 40px;
    width: 90%;
    max-width: 400px;
    box-shadow: var(--shadow-color);
    text-align: center;

    > img {
        width: 70px;
        margin: 0 auto 15px;
    }
`;

const Title = styled.h2`
    margin-bottom: 16px;
    font-size: 1.25rem;

    img {
        width: 30px;
    }
`;

const ErrorList = styled.ul``;

const ErrorItem = styled.li`
    margin-bottom: 5px;
    font-size: 15px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 25px;
    right: 25px;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    img {
        width: 20px;
    }
`;

interface ErrorModalProps {
    error: ErrorResponse | null;
    onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ error, onClose }) => {
    if (!error) return null;

    return (
        <Overlay>
            <ModalContainer
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <img src="/team-app-ts/img/warning.png" alt="warning" />
                <Title id="modal-title" className="card_title">
                    {error.message}
                </Title>
                {error.errors && error.errors.length > 0 && (
                    <ErrorList>
                        {error.errors.map(err => (
                            <ErrorItem className="paragraph" key={err.field}>
                                {err.reason.split("\n").map((line, idx) => (
                                    <span key={idx}>{line}</span>
                                ))}
                            </ErrorItem>
                        ))}
                    </ErrorList>
                )}
                <CloseButton onClick={onClose}>
                    <img
                        src="/team-app-ts/img/close_btn.svg"
                        alt="close button"
                    />
                </CloseButton>
            </ModalContainer>
        </Overlay>
    );
};

export default ErrorModal;
