import styled, { css } from "styled-components";

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
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
`;

export const Form = styled.div`
    max-width: 540px;
    width: 100%;
    padding: 40px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Row = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
    align-items: center;
`;

export const AddField = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    text-align: right;
    color: ${({ theme }) => theme.BLUE};
    align-items: center;
    display: flex;
    cursor: pointer;
    height: fit-content;
    user-select: none;
    width: fit-content;

    :active {
        opacity: 0.8;
    }
`;

export const EmptySlot = styled.div`
    flex: 1;
    height: 100%;
`;

export const Footer = styled.div`
    height: 75px;
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.12);
    border-top: none;
    background-color: ${({ theme }) => theme.LIGHT_BLUE};
    display: flex;
    padding: 0 20px;
    align-items: center;
    gap: 53px;
`;

export const Button = styled.button`
    width: 150px;
    height: 36px;
    background-color: ${({ theme }) => theme.BLUE_VIOLET};
    padding: 0 8px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.WHITE};
    text-transform: uppercase;
    align-items: center;
    gap: 4px;
    user-select: none;

    span {
        font-size: 26px;
    }

    :active {
        opacity: 0.8;
    }
`;

export const Cancel = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: ${({ theme }) => theme.BLUE_VIOLET};
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;

    :active {
        opacity: 0.8;
    }
`;

export const Header = styled.div`
    display: flex;
    height: 48px;
    background-color: ${({ theme }) => theme.WHITE};
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.12);
    border-bottom: none;
`;

export const HeaderItem = styled.div<{ active: boolean }>`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    :active {
        opacity: 0.8;
    }

    span {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: normal;
        text-align: center;
        color: ${({ active, theme }) =>
            active ? theme.BLUE_VIOLET : "rgba(0, 0, 0, 0.38)"};
    }

    ${({ active, theme }) =>
        active &&
        css`
            border-bottom: 2px solid ${theme.BLUE_VIOLET};
        `}
`;
