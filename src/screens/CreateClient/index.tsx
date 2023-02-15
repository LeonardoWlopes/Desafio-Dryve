import React from "react";
import * as S from "./styles";

//hooks
import { useForm } from "react-hook-form";

//components
import { InputText } from "../../components/InputText";

//types
import { ICreateClientForm } from "./types";
import { ControlledInputText } from "../../components/InputText/controlled";

function CreateClient() {
    const { control } = useForm<ICreateClientForm>();

    console.log("render");

    return (
        <S.Container>
            <S.Title>Adicionar cliente</S.Title>

            <S.FormContainer>
                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Nome"
                    />
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Sobrenome"
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="E-mail"
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Telefone"
                        flex={0.48}
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="CEP"
                        flex={0.48}
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Endereço"
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Número"
                    />
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Complemento"
                    />
                </S.Row>

                <S.Row>
                    <ControlledInputText
                        control={control}
                        name=""
                        placeholder="Bairro"
                    />
                </S.Row>

                <S.Row>
                    <InputText placeholder="Cidade" />
                    <InputText placeholder="Estado" />
                </S.Row>
            </S.FormContainer>
        </S.Container>
    );
}

export { CreateClient };
