import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.15px;
    margin-bottom: 22px;
`;

export const FormContainer = styled.div`
    width: 100%;
    padding: 40px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Row = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`;
