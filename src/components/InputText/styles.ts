import styled from "styled-components";

export const Container = styled.div<{ flex: number }>`
    height: 56px;
    flex: ${({ flex }) => flex};
    display: flex;
    align-items: center;
    border: 1px solid #b5b4b5;
    border-radius: 4px;

    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: 0.15px;
        color: rgba(0, 0, 0, 0.6);
        margin: 0 16px;
    }
`;
