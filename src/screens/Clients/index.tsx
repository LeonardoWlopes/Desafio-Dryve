import React, { useState } from "react";
import * as S from "./styles";

//icons
import filter from "../../assets/images/filter.jpg";
import options from "../../assets/icons/options.svg";
import left from "../../assets/icons/chevron-left.svg";
import right from "../../assets/icons/chevron-right.svg";
import { ReactComponent as Down } from "../../assets/icons/arrow_down.svg";

//components
import { Search } from "../../components/Search";

//types
import { EClientType } from "./types";

const clients = [
    {
        name: "Paulo Henrique Mattos",
        type: EClientType.CLIENT,
        phone: "(16) 99653-8899",
        email: "ph.mattos@gmail.com",
    },
    {
        name: "Juliana Martins Silva",
        type: EClientType.CLIENT,
        phone: "(16) 99819-3112",
        email: "jumartins.silva@hotmail.com",
    },
    {
        name: "Luís Rocha",
        type: EClientType.CLIENT,
        phone: "(16) 99776-9290",
        email: "luisrocha@yahoo.com.br",
    },
    {
        name: "Adilson Vieira Antunes",
        type: EClientType.LEAD,
        phone: "(16) 99664-0187",
        email: "a.vieira@uol.com.br",
    },
    {
        name: "Felipe Alves",
        type: EClientType.LEAD,
        phone: "(16) 99660-7765",
        email: "felipe_alves@hotmail.com",
    },
    {
        name: "Roberta Vianna",
        type: EClientType.CLIENT,
        phone: "(16) 99765-2233",
        email: "robertavianna@gmail.com",
    },
    {
        name: "Silvia Pereira",
        type: EClientType.CLIENT,
        phone: "(16) 99642-8721",
        email: "silvia.pereira@outlook.com",
    },
    {
        name: "Eduardo Oliveira",
        type: EClientType.CLIENT,
        phone: "(16) 99872-3254",
        email: "eduoliveira@hotmail.com",
    },
    {
        name: "Maria Antônia Silva Santos",
        type: EClientType.CLIENT,
        phone: "(16) 99443-9986",
        email: "maria.ss@uol.com.br",
    },
    {
        name: "Rodrigo Ribeiro Costa",
        type: EClientType.CLIENT,
        phone: "(16) 99876-0012",
        email: "rrc@gmail.com",
    },
];

function Clients() {
    const [checkedIndexList, setCheckedIndexList] = useState<number[]>([]);

    function handleCheckItem(index: number) {
        if (checkedIndexList.includes(index)) {
            setCheckedIndexList((prev) => prev.filter((i) => i !== index));
            return;
        }

        setCheckedIndexList((prev) => [...prev, index]);
    }

    function handleCheckAllItems() {
        if (checkedIndexList.length === clients.length) {
            setCheckedIndexList([]);
            return;
        }

        setCheckedIndexList(
            Array.from({ length: clients.length }, (_, i) => i)
        );
    }

    return (
        <S.Container>
            <S.SearchContainer>
                <S.SearchContent>
                    <S.Filter>
                        <img src={filter} alt="filter" />
                        <span>filtrar</span>
                    </S.Filter>

                    <Search />
                </S.SearchContent>

                <S.AddButton>
                    <span>+</span> adicionar
                </S.AddButton>
            </S.SearchContainer>

            <S.Table>
                <thead>
                    <S.HeadRow>
                        <S.Padding />
                        <S.Column width={26}>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={
                                        checkedIndexList.length ===
                                        clients.length
                                    }
                                    onClick={handleCheckAllItems}
                                />
                            </div>
                        </S.Column>

                        <S.Column>Nome</S.Column>
                        <S.Column>STATUS</S.Column>
                        <S.Column>TELEFONE</S.Column>
                        <S.Column>E-MAIL</S.Column>
                        <S.Column width={2} />
                        <S.Padding />
                    </S.HeadRow>
                </thead>
                <tbody>
                    {React.Children.toArray(
                        clients?.map(({ email, name, phone, type }, i) => (
                            <S.Row>
                                <S.Padding />

                                <S.Item>
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked={checkedIndexList.includes(
                                                i
                                            )}
                                            onClick={() => handleCheckItem(i)}
                                        />
                                    </div>
                                </S.Item>

                                <S.Item>{name}</S.Item>

                                <S.Item>
                                    <S.Status
                                        isActive={type === EClientType.CLIENT}
                                    >
                                        {type}
                                    </S.Status>
                                </S.Item>

                                <S.Item>{phone}</S.Item>

                                <S.Item>{email}</S.Item>

                                <S.Item>
                                    <img src={options} alt="..." />
                                </S.Item>

                                <S.Padding />
                            </S.Row>
                        ))
                    )}
                </tbody>
            </S.Table>
            <S.Footer>
                <div>
                    <S.FooterText1>Intens por página: </S.FooterText1>
                    <strong>{clients.length}</strong>
                    <Down />
                    <S.FooterText1>1-10 de 3.456</S.FooterText1>
                </div>

                <S.ArrowContainer>
                    <img src={left} alt="" />
                    <img src={right} alt="" />
                </S.ArrowContainer>
            </S.Footer>
        </S.Container>
    );
}

export { Clients };
