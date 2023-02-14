import React from "react";
import * as S from "./styles";

//icons
import { ReactComponent as Up } from "../../assets/icons/arrow_up.svg";
import { ReactComponent as Down } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as device } from "../../assets/icons/devices.svg";
import { ReactComponent as money } from "../../assets/icons/money.svg";

//types
import { ECardsRange } from "./types";

//components
import { FeedBacks } from "../../components/FeedBacks";

//hooks
import { useTheme } from "styled-components";
import { TopList } from "../../components/TopList";
import { Graph } from "../../components/Graph";

const cards = [
    {
        title: "AVALIAÇÕES HOJE",
        value: "29",
        gain: 36,
        isGrowing: true,
        range: ECardsRange.YESTERDAY,
        Icon: car,
    },
    {
        title: "CARROS PUBLICADOS",
        value: "397",
        gain: 4,
        isGrowing: true,
        range: ECardsRange.MONTH,
        Icon: device,
    },
    {
        title: "TICKET MÉDIO DO ESTOQUE",
        value: "R$ 42.567",
        gain: 6,
        isGrowing: false,
        range: ECardsRange.MONTH,
        Icon: money,
    },
];

function DashBoard() {
    const theme = useTheme();

    return (
        <S.Container>
            {React.Children.toArray(
                cards.map(({ gain, isGrowing, value, title, range, Icon }) => (
                    <S.Card>
                        <S.CardContent>
                            <S.CardTitle>{title}</S.CardTitle>
                            <S.CardValue>{value}</S.CardValue>
                            <S.GainContainer>
                                {isGrowing ? (
                                    <Up color={theme.BLUE} />
                                ) : (
                                    <Down color={theme.CORAL} />
                                )}
                                <S.Gain isGrowing={isGrowing}>{gain}%</S.Gain>
                                <S.GainRange>{range}</S.GainRange>
                            </S.GainContainer>
                        </S.CardContent>

                        <S.IconContainer>
                            <Icon />
                        </S.IconContainer>
                    </S.Card>
                ))
            )}

            <S.FeedBackContainer>
                <FeedBacks />
            </S.FeedBackContainer>

            <S.TopListContainer>
                <TopList />
            </S.TopListContainer>

            <S.GraphContainer>
                <Graph />
            </S.GraphContainer>
        </S.Container>
    );
}

export { DashBoard };
