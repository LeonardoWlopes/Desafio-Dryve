import * as S from "./styles";

//hooks
import { useLocation } from "react-router-dom";
import React from "react";

//navigation
const links = [
    { icon: "", name: "Início", path: "/" },
    { icon: "", name: "Clientes", path: "/clients" },
    { icon: "", name: "Veículos", path: "/vehicles" },
    { icon: "", name: "Triangulação", path: "/Tracking" },
    { icon: "", name: "Financeiro", path: "/t" },
];

function Menu() {
    const { pathname } = useLocation();

    return (
        <S.Container>
            <S.ProfileContainer>
                <S.PhotoFrame>
                    <img
                        src="https://github.com/leonardowlopes.png"
                        alt="profile photo"
                    />
                </S.PhotoFrame>

                <S.ProfileContent>
                    <S.ProfileName>Leonardo Lopes</S.ProfileName>

                    <S.LogoutContainer>Sair</S.LogoutContainer>
                </S.ProfileContent>
            </S.ProfileContainer>

            <S.NavigationContainer>
                {React.Children.toArray(
                    links.map(({ path, name }) => (
                        <S.NavLink isCurrentPath={pathname === path} to={path}>
                            <span>{name}</span>
                        </S.NavLink>
                    ))
                )}
            </S.NavigationContainer>
        </S.Container>
    );
}

export { Menu };
