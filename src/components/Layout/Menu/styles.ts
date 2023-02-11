import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 160px;
    height: 100vh;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.WHITE};
    border-right: 2px solid ${({ theme }) => theme.LIGHT_GRAY};
    padding: 78px 22px;
    transition: all 0.2s;

    :hover {
        width: 480px;
    }
`;

export const ProfileContainer = styled.div`
    width: 480px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const PhotoFrame = styled.div`
    width: 116px;
    height: 116px;
    border: 2.5px solid ${({ theme }) => theme.BLUE};
    border-radius: 50%;
    overflow: hidden;
    padding: 3px;
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
`;

export const LogoutContainer = styled.div`
    cursor: pointer;
    width: fit-content;
`;

export const NavigationContainer = styled.div`
    width: 480px;
    display: flex;
    flex-direction: column;
`;

export const NavLink = styled(Link)<{ isCurrentPath: boolean }>`
    height: 78px;
    text-decoration: none;
    color: ${({ theme }) => theme.DARK_GRAY};

    :hover {
        background-color: ${({ theme }) => theme.LIGHT_BLUE};
    }

    ${({ theme, isCurrentPath }) =>
        isCurrentPath &&
        css`
            background-color: ${theme.LIGHT_BLUE};
            color: ${({ theme }) => theme.BLUE};
        `}
`;
