import * as S from "./styles";

//components
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";

function Layout() {
    return (
        <S.Container>
            <Menu />

            <Outlet />
        </S.Container>
    );
}

export { Layout };
