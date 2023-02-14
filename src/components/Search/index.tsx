import React from "react";
import * as S from "./styles";

//icons
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import { useTheme } from "styled-components";

function Search() {
    const theme = useTheme();

    return (
        <S.Container>
            <input type="text" placeholder="Buscar por nome..." />

            <SearchIcon color={theme.DARK_GRAY} />
        </S.Container>
    );
}

export { Search };
