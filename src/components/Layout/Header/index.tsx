import React from "react";
import * as S from "./styles";

//icons
import logo from "../../../assets/icons/dryve_logo.svg";
import search from "../../../assets/icons/search.svg";
import bell from "../../../assets/icons/notifications.svg";

function Header() {
    return (
        <S.Container>
            <S.LogoContainer>
                <img src={logo} alt="dryve logo" />
                <span>Backoffice</span>
            </S.LogoContainer>

            <S.IconsContainer>
                <img src={search} alt={search} />
                <img src={bell} alt={bell} />
            </S.IconsContainer>
        </S.Container>
    );
}

export { Header };
