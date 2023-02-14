import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 18px 20px 0px;
    height: 226px;
    border-radius: 4px;
    border: solid 1px rgba(0, 0, 0, 0.12);
    background-color: ${({ theme }) => theme.WHITE};
    height: fit-content;
`;

export const Header = styled.div`
    display: flex;
    gap: 6px;
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

export const Content = styled.div`
    display: flex;
`;

export const ChartContainer = styled.div`
    max-width: 190px;
`;

export const LabelsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LabelRow = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
`;

export const Color = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${({ color }) => color};
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.1px;
`;

export const Value = styled.span`
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #a5abb7;
`;
