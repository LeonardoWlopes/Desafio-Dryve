import React from "react";
import * as S from "./styles";

//icons
import power from "../../../assets/icons/power.svg";
import { ReactComponent as Client } from "../../../assets/icons/person.svg";
import { ReactComponent as Home } from "../../../assets/icons/home.svg";
import { ReactComponent as Vehicles } from "../../../assets/icons/car.svg";
import { ReactComponent as Tracking } from "../../../assets/icons/triangle.svg";

//hooks
import { useLocation } from "react-router-dom";

//navigation
const links = [
    { Icon: Home, name: "Início", path: "/" },
    { Icon: Client, name: "Clientes", path: "/clients" },
    { Icon: Vehicles, name: "Veículos", path: "/vehicles" },
    { Icon: Tracking, name: "Triangulação", path: "/Tracking" },
    { Icon: Home, name: "Financeiro", path: "/t" },
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

                    <S.LogoutContainer>
                        <img src={power} alt="power" />

                        <span>SAIR</span>
                    </S.LogoutContainer>
                </S.ProfileContent>
            </S.ProfileContainer>

            <S.NavigationContainer>
                {React.Children.toArray(
                    links.map(({ path, name, Icon }) => {
                        return (
                            <S.NavLink to={path}>
                                <S.NavItem isCurrentPath={pathname === path}>
                                    <Icon />

                                    <span>{name}</span>
                                </S.NavItem>
                            </S.NavLink>
                        );
                    })
                )}
            </S.NavigationContainer>
        </S.Container>
    );
}

export { Menu };
