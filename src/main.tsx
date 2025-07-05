import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {theme} from "./Styles/Theme.styles.ts";
import {GlobalStyle} from "./Styles/GlobalStyle.tsx";


createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <StrictMode>
            <GlobalStyle/>
            <App/>
        </StrictMode>
    </ThemeProvider>
)
