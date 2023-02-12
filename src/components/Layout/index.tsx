import * as S from "./styles";

//components
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import { Header } from "./Header";

function Layout() {
    return (
        <S.Container>
            <Header />

            <Menu />

            <S.Content>
                <Outlet />
            </S.Content>
        </S.Container>
    );
}

export { Layout };
