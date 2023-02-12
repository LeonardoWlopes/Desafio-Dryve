import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.MEDIUM_GRAY};
    height: calc(100vh - 70px);
    padding: 30px calc(30px + 80px);
`;
