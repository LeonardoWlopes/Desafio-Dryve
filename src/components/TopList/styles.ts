import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 18px 20px 0px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    height: fit-content;
`;

export const Header = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    display: flex;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    border-bottom: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
    height: 64px;

    :last-child {
        border: none;
    }

    div {
        display: flex;
        align-items: center;
        gap: 14px;

        img {
            width: 36px;
            height: 36px;
        }
    }
`;
