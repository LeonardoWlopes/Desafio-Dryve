import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    background-color: ${({ theme }) => theme.MEDIUM_GRAY};
    min-height: calc(100vh - 70px);
    padding: 30px 30px 30px calc(30px + 80px);
`;
