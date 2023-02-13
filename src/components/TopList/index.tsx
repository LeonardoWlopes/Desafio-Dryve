import React from "react";
import * as S from "./styles";

//icons
import hb from "../../assets/images/hb20.png";
import cross from "../../assets/images/cross.png";
import onix from "../../assets/images/onix.png";
import jeep from "../../assets/images/jeep.png";
import nissan from "../../assets/images/nissan.png";

//mokc
const tops = [
    { photo: hb, name: "BH20", value: 197 },
    { photo: onix, name: "Onix", value: 183 },
    { photo: jeep, name: "Renegade", value: 125 },
    { photo: cross, name: "T-Cross", value: 109 },
    { photo: nissan, name: "Kicks", value: 86 },
];

function TopList() {
    return (
        <S.Container>
            <S.Header>
                <S.Title>Últimas avaliações</S.Title>
            </S.Header>
            {React.Children.toArray(
                tops.map(({ name, photo, value }) => (
                    <S.Item>
                        <div>
                            <img src={photo} alt={name} />
                            <span>{name}</span>
                        </div>

                        <span>{value}</span>
                    </S.Item>
                ))
            )}
        </S.Container>
    );
}

export { TopList };
