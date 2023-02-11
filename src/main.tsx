import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./theme/defaultTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    </React.StrictMode>
);
