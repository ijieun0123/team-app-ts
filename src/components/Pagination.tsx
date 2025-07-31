import React from "react";
import styled from "styled-components";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageGroupSize?: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    pageGroupSize = 5,
    onPageChange,
}) => {
    const currentGroup = Math.floor(currentPage / pageGroupSize);
    const startPage = currentGroup * pageGroupSize;
    const endPage = Math.min(startPage + pageGroupSize, totalPages);

    return (
        <PaginationBox>
            {startPage > 0 && (
                <PrevBtn onClick={() => onPageChange(startPage - 1)}>
                    <img
                        src="/team-app-ts/img/next_arrow.svg"
                        alt="previous button"
                    />
                </PrevBtn>
            )}

            {Array.from({ length: endPage - startPage }, (_, i) => {
                const pageNumber = startPage + i;
                return (
                    <NumberBtn
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={pageNumber == currentPage ? "active" : ""}
                    >
                        {pageNumber + 1}
                    </NumberBtn>
                );
            })}

            {endPage < totalPages && (
                <NextBtn onClick={() => onPageChange(endPage)}>
                    <img
                        src="/team-app-ts/img/next_arrow.svg"
                        alt="next button"
                    />
                </NextBtn>
            )}
        </PaginationBox>
    );
};

export default Pagination;

const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 60px 0 150px;

    @media (max-width: 1024px) {
        margin: 60px 0 100px;
    }

    @media (max-width: 768px) {
        margin: 40px 0 80px;
    }
`;

const NumberBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: var(--shadow-color);
    color: var(--black-color);

    &.active {
        background: rgba(31, 205, 205, 0.15);
        color: var(--blue-color);
    }
`;

const PrevBtn = styled.button`
    margin-right: 5px;
    transform: rotate(180deg);

    img {
        width: 20px;
    }
`;

const NextBtn = styled.button`
    margin-left: 5px;

    img {
        width: 20px;
    }
`;
