import styled from "styled-components";

export const Container = styled.div`
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    height: 640px;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: #e5e5e5 #ffffff;
    display: flex;
    flex-direction: column;

    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #e5e5e5;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`;

export const Header = styled.div`
    padding: 18px 20px 0;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

export const Selector = styled(Title)`
    cursor: pointer;
    user-select: none;
    height: fit-content;

    :active {
        opacity: 0.8;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 8px;
    border-collapse: collapse;

    thead {
        border-bottom: 20px solid transparent;
    }
`;

export const Padding = styled.td`
    width: 20px;
`;

export const HeadRow = styled.tr`
    margin-bottom: 15px;
    border-bottom: 20px solid transparent;
`;

export const Row = styled.tr`
    border-top: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
`;

export const Column = styled.td`
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.DARK_GRAY};
    opacity: 0.5;
`;

export const Item = styled.td``;

export const CarContainer = styled.div`
    margin: 20px 0;
    display: flex;

    img {
        width: 80px;
        height: 60px;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
        margin-right: 10px;
    }

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            color: ${({ theme }) => theme.DARK_BLUE_GREY};
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        p {
            font-size: 10px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: 0.33px;
            margin-bottom: 4px;
            color: ${({ theme }) => theme.STEEL};
            text-transform: uppercase;
        }
    }
`;

export const ValueContainer = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: ${({ theme }) => theme.DARK_BLUE_GREY};
        margin-bottom: 8px;
    }

    span {
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #a5abb7;
    }
`;

export const ValueLabel = styled.span`
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 0.33px;
    color: ${({ theme }) => theme.STEEL};
    margin-bottom: 4px;
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

export const Status = styled.div`
    height: 26px;
    border-radius: 13px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.LIGHT_BLUE};
    color: ${({ theme }) => theme.STEEL};
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 11px;
    justify-content: center;
`;

export const Date = styled.span`
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #a5abb7;
`;
