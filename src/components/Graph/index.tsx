import React from "react";
import * as S from "./styles";

//icons
import help from "../../assets/icons/help.svg";

//components
import { VictoryPie } from "victory";

const data = [
    { color: "#1070ca", title: "Na média", value: 60 },
    { color: "#ec4c47", title: "Acima da média", value: 25 },
    { color: "#f7d154", title: "Abaixo da média", value: 15 },
];

function Graph() {
    return (
        <S.Container>
            <S.Header>
                <S.Title>Preços - Dryve x KBB</S.Title>
                <img src={help} alt="" />
            </S.Header>

            <S.Content>
                <S.ChartContainer>
                    <VictoryPie
                        innerRadius={120}
                        data={data.map(({ title, value }) => ({
                            x: title,
                            y: value,
                        }))}
                        colorScale={["#1070ca", "#ec4c47", "#f7d154"]}
                        labelComponent={<></>}
                    />
                </S.ChartContainer>

                <S.LabelsContainer>
                    {React.Children.toArray(
                        data.map(({ color, title, value }) => (
                            <S.LabelRow>
                                <S.Color color={color} />
                                <S.Label>{title}</S.Label>
                                <S.Value>{value}%</S.Value>
                            </S.LabelRow>
                        ))
                    )}
                </S.LabelsContainer>
            </S.Content>
        </S.Container>
    );
}

export { Graph };
