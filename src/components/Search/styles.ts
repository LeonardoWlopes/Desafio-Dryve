import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 16px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #9e9e9e;
    background-color: ${({ theme }) => theme.WHITE};
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        color: rgba(0, 0, 0, 0.6);
    }
`;
