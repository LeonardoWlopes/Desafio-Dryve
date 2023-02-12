import React from "react";
import * as S from "./styles";

//icons
import { ReactComponent as Down } from "../../assets/icons/arrow_down.svg";

//services
import { useFeedBacks } from "../../services/feedbacks.service";

//utils
import { numberToKM, toMoney } from "../../utils/format";

//icons
import { ReactComponent as Loading } from "../../assets/icons/loading.svg";

function FeedBacks() {
    const { feedBacks, isLoading } = useFeedBacks();

    if (isLoading) {
        return (
            <S.Container>
                <Loading />
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.Header>
                <S.Title>Últimas avaliações</S.Title>
                <S.Selector>
                    Hoje <Down />
                </S.Selector>
            </S.Header>

            <S.Table>
                <thead>
                    <S.HeadRow>
                        <S.Padding />
                        <S.Column>Dados do veículo</S.Column>
                        <S.Column>Valor</S.Column>
                        <S.Column>Status</S.Column>
                        <S.Padding />
                    </S.HeadRow>
                </thead>
                <tbody>
                    {React.Children.toArray(
                        feedBacks?.map(
                            ({
                                image,
                                model_name,
                                brand_name,
                                mileage,
                                model_year,
                                fuel_type,
                                transmission_type,
                                version_name,
                                ad_selling_price,
                            }) => (
                                <S.Row>
                                    <S.Padding />
                                    <S.Item>
                                        <S.CarContainer>
                                            <img src={image} alt={model_name} />

                                            <div>
                                                <span>{`${model_name} ${brand_name}`}</span>

                                                <p>{version_name}</p>
                                                <p>{`${model_year} - ${fuel_type}`}</p>
                                                <p>
                                                    {` ${transmission_type} - ${numberToKM(
                                                        mileage
                                                    )}
                                                    `}
                                                </p>
                                            </div>
                                        </S.CarContainer>
                                    </S.Item>

                                    <S.Item>
                                        <S.ValueContainer>
                                            <S.ValueLabel>ANÚNCIO</S.ValueLabel>
                                            <strong>
                                                {toMoney(ad_selling_price)}
                                            </strong>

                                            <S.ValueLabel>
                                                MÍNIMO ACEITO
                                            </S.ValueLabel>

                                            <span>
                                                {" "}
                                                {toMoney(ad_selling_price)}
                                            </span>
                                        </S.ValueContainer>
                                    </S.Item>

                                    <S.Item>
                                        <S.StatusContainer>
                                            <S.Status>
                                                Aguardando precificação
                                            </S.Status>

                                            <S.Date>18/04/2020 às 14:35</S.Date>
                                        </S.StatusContainer>
                                    </S.Item>

                                    <S.Padding />
                                </S.Row>
                            )
                        )
                    )}
                </tbody>
            </S.Table>
        </S.Container>
    );
}

export { FeedBacks };
