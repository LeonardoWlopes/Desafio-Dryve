import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 80px;
    height: 100vh;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.WHITE};
    border-right: 2px solid ${({ theme }) => theme.LIGHT_GRAY};
    padding: 45px 15px;
    transition: all 0.2s;
    z-index: 5;

    :hover {
        width: 240px;
    }
`;

export const ProfileContainer = styled.div`
    width: 240px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`;

export const PhotoFrame = styled.div`
    width: 50px;
    height: 50px;
    border: 2.5px solid ${({ theme }) => theme.BLUE};
    border-radius: 50%;
    overflow: hidden;
    padding: 2px;
    margin-right: 16px;

    img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
`;

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ProfileName = styled.span`
    color: ${({ theme }) => theme.DARK_GRAY};
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 0.1px;
`;

export const LogoutContainer = styled.div`
    cursor: pointer;
    width: fit-content;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    gap: 5px;

    span {
        opacity: 0.5;
    }
`;

export const NavigationContainer = styled.div`
    width: 210px;
    display: flex;
    flex-direction: column;
`;

export const NavItem = styled.div<{ isCurrentPath: boolean }>`
    height: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 25px;

    svg {
        color: #b2b2b2;
    }

    span {
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: 0.1px;
    }

    ${({ theme, isCurrentPath }) =>
        isCurrentPath &&
        css`
            background-color: ${theme.LIGHT_BLUE} !important;
            color: ${({ theme }) => theme.BLUE};

            svg {
                color: ${({ theme }) => theme.BLUE};
            }
        `};
`;

export const NavLink = styled(Link)`
    height: 40px;
    text-decoration: none;
    color: ${({ theme }) => theme.DARK_GRAY};

    :hover {
        background-color: ${({ theme }) => theme.LIGHT_BLUE};
    }
`;
