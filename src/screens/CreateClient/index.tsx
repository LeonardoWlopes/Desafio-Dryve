import React, { useCallback, useState } from "react";
import * as S from "./styles";

//hooks
import { useForm } from "react-hook-form";

//components
import { ControlledInputText } from "../../components/InputText/controlled";

//types
import { ICreateClientForm } from "./types";

const headerItems = [
    "Dados do cliente",
    "Dados do veículo",
    "Intenção de compra",
];

function CreateClient() {
    const [activeTabIndex, seActiveTabIndex] = useState(0);
    const [haveExtraPhone, setHaveExtraPhone] = useState(false);

    const { control, reset, handleSubmit } = useForm();

    const handleAddPhoneField = useCallback(() => {
        setHaveExtraPhone(true);
    }, []);

    const handleChangeTab = useCallback((index: number) => {
        seActiveTabIndex(index);
    }, []);

    const handleReset = useCallback(() => {
        if (window.confirm("Deseja cancelar o formulário?")) {
            reset();
        }
    }, []);

    const submit = handleSubmit((data) => {
        alert("Dados disponíveis no console");

        console.table(data);
    });

    return (
        <S.Container>
            <S.Title>Adicionar cliente</S.Title>

            <S.Header>
                {React.Children.toArray(
                    headerItems.map((item, i) => (
                        <S.HeaderItem
                            active={activeTabIndex === i}
                            onClick={() => handleChangeTab(i)}
                        >
                            <span>{item}</span>
                        </S.HeaderItem>
                    ))
                )}
            </S.Header>
            <S.FormContainer>
                <S.Form>
                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="name"
                            placeholder="Nome"
                        />

                        <ControlledInputText
                            control={control}
                            name="last_name"
                            placeholder="Sobrenome"
                        />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="email"
                            placeholder="E-mail"
                        />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="phone_1"
                            placeholder="Telefone"
                        />

                        {haveExtraPhone ? (
                            <ControlledInputText
                                control={control}
                                name="phone_2"
                                placeholder="Telefone"
                            />
                        ) : (
                            <S.EmptySlot>
                                <S.AddField onClick={handleAddPhoneField}>
                                    + adicionar outro
                                </S.AddField>
                            </S.EmptySlot>
                        )}
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="cep"
                            placeholder="CEP"
                        />

                        <S.EmptySlot />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="address"
                            placeholder="Endereço"
                        />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="number"
                            placeholder="Número"
                        />

                        <ControlledInputText
                            control={control}
                            name="complement"
                            placeholder="Complemento"
                        />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="district"
                            placeholder="Bairro"
                        />
                    </S.Row>

                    <S.Row>
                        <ControlledInputText
                            control={control}
                            name="city"
                            placeholder="Cidade"
                        />

                        <ControlledInputText
                            control={control}
                            name="state"
                            placeholder="Estado"
                        />
                    </S.Row>
                </S.Form>
            </S.FormContainer>
            <S.Footer>
                <S.Button onClick={submit}>Salvar</S.Button>
                <S.Cancel onClick={handleReset}>Cancelar</S.Cancel>
            </S.Footer>
        </S.Container>
    );
}

export { CreateClient };
