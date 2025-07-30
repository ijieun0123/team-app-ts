import React from "react";
import styled from "styled-components";

interface SuccessModalProps {
    message: string;
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
    return (
        <Backdrop onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <Title>
                    <img src="/team-app-ts/img/success.png" alt="" />
                </Title>
                <Message className="paragraph">{message}</Message>
                <CloseButton onClick={onClose}>OK</CloseButton>
            </ModalContainer>
        </Backdrop>
    );
};

export default SuccessModal;

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    padding: 24px;
    border-radius: 8px;
    width: 320px;
    text-align: center;
    box-shadow: var(--shadow-color);
    background: #fff;
`;

const Title = styled.h2`
    margin-bottom: 12px;

    img {
        width: 70px;
        margin: 0 auto;
    }
`;

const Message = styled.p`
    margin-bottom: 20px;
`;

const CloseButton = styled.button`
    padding: 8px 16px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: var(--green-color);
`;
