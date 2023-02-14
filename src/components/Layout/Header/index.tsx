import React from "react";
import * as S from "./styles";

//icons
import logo from "../../../assets/icons/dryve_logo.svg";
import { ReactComponent as Search } from "../../../assets/icons/search.svg";
import bell from "../../../assets/icons/notifications.svg";

import { useTheme } from "styled-components";

function Header() {
    const theme = useTheme();

    return (
        <S.Container>
            <S.LogoContainer>
                <img src={logo} alt="dryve logo" />
                <span>Backoffice</span>
            </S.LogoContainer>

            <S.IconsContainer>
                <Search color={theme.LIGHT_GRAY} />
                <img src={bell} alt={bell} />
            </S.IconsContainer>
        </S.Container>
    );
}

export { Header };
