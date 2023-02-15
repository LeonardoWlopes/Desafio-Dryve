import React from "react";
import * as S from "./styles";

//icons
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

//hookss
import { useTheme } from "styled-components";

//types
import { ISearch } from "./types";

function Search(props: ISearch) {
    const theme = useTheme();

    return (
        <S.Container>
            <input type="text" {...props} />

            <SearchIcon color={theme.DARK_GRAY} />
        </S.Container>
    );
}

export { Search };
