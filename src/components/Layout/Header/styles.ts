import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${({ theme }) => theme.WHITE};
    border-bottom: 2px solid ${({ theme }) => theme.LIGHT_GRAY};
    padding-left: calc(80px + 30px);
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 7px;

    span {
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #a5abb7;
        margin-bottom: 5px;
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 27px;

    img {
        cursor: pointer;
        :active {
            opacity: 0.8;
        }
    }
`;
