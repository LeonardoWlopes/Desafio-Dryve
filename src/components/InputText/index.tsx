import * as S from "./styles";

//types
import { IInputText } from "./types";

function InputText({ flex = 1, ...rest }: IInputText) {
    return (
        <S.Container flex={flex}>
            <input type="text" {...rest} />
        </S.Container>
    );
}

export { InputText };
