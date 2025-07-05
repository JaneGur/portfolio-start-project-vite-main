import './App.css'
// import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/Sections/main/Main.tsx";
import {Skills} from "./layout/Sections/skills/Skills.tsx";
import {Works} from "./layout/Sections/works/Works.tsx";
import {AboutMe} from "./layout/Sections/about me/AboutMe.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Background} from "./layout/Sections/background/Background.tsx";
import {Sidebar} from "./layout/sidebar/Sidebar.tsx";
import styled from "styled-components";
import {StyledContacts} from "./layout/Sections/contacts/StyledContacts.tsx";
import {theme} from "./Styles/Theme.styles.ts";
import {MobileHeader} from "./layout/mobileHeader/MobileHeader.tsx";


function App() {
    return (
        <div className="App">
            <MobileHeader/>
            <Sidebar/>
            <MainWrapper>
                <Main/>
                <AboutMe/>
                <Background/>
                <Skills/>
                <Works/>
                <StyledContacts/>
                <Footer/>
            </MainWrapper>
        </div>
    )
}

const MainWrapper = styled.div`
    margin-left: 100px;

    @media ${theme.media.tablet} {
        margin-left: 0;
    }
`

export default App
