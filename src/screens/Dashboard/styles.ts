import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 30px;
`;

export const Card = styled.div`
    height: 110px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.span`
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.DARK_GRAY};
    opacity: 0.5;
    margin-bottom: 6px;
`;

export const CardValue = styled.span`
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.06;
    letter-spacing: normal;
    margin-bottom: 8px;
`;

export const GainContainer = styled.span`
    display: flex;
    align-items: center;
`;

export const Gain = styled.span<{ isGrowing: boolean }>`
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.4px;
    color: ${({ theme, isGrowing }) => theme.BLUE_VIOLET};
    color: ${({ theme, isGrowing }) =>
        isGrowing ? theme.BLUE_VIOLET : theme.CORAL};
    margin: 0 5px 0 0px;
`;

export const GainRange = styled.span`
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    color: ${({ theme }) => theme.DARK_GRAY};
    opacity: 0.5;
`;

export const IconContainer = styled.div`
    aspect-ratio: 1/1;
    width: 64px;
    background-color: ${({ theme }) => theme.LIGHT_BLUE};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.BLUE};
    border-radius: 50%;
`;
