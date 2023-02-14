import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchContainer = styled.div`
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
`;

export const SearchContent = styled.div`
    gap: 8px;
    display: flex;
`;

export const AddButton = styled.button`
    width: 130px;
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

    span {
        font-size: 26px;
    }

    :active {
        opacity: 0.8;
    }
`;

export const Filter = styled.div`
    width: 106px;
    height: 36px;
    padding: 0px 11px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;

    :active {
        opacity: 0.8;
    }

    img {
        width: 18px;
        height: 12px;
    }

    span {
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: normal;
        text-align: center;
        color: ${({ theme }) => theme.BLUE_VIOLET};
        text-transform: uppercase;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 8px;
    border-collapse: collapse;
    background-color: ${({ theme }) => theme.WHITE};
    border-radius: 4px;

    thead {
        border-bottom: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
    }
`;

export const Padding = styled.td`
    width: 20px;
    height: 64px;
`;

export const HeadRow = styled.tr`
    border-bottom: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
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

    div {
        display: flex;
        align-items: center;
    }
`;

export const Item = styled.td`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;

    div {
        display: flex;
        align-items: center;
    }

    img {
        cursor: pointer;

        :active {
            opacity: 0.8;
        }
    }
`;

export const Status = styled.div<{ isActive: boolean }>`
    width: 80px;
    height: 26px;
    border-radius: 13px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.LIGHT_BLUE : "#f6f6f6"};
    color: ${({ theme, isActive }) => (isActive ? theme.BLUE : "#666666")};
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    height: 54px;
    border-top: 1px solid ${({ theme }) => theme.LIGHT_GRAY};
    padding: 0 21px;
    background-color: ${({ theme }) => theme.WHITE};
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;

        strong {
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: 0.1px;
            margin-left: 7px;
        }
    }
`;

export const FooterText1 = styled.span`
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #a5abb7;
`;

export const ArrowContainer = styled.div`
    display: flex;
    gap: 32px;

    img {
        cursor: pointer;

        :active {
            opacity: 0.7;
        }
    }
`;
