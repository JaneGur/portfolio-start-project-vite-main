import styled, {css} from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Sidebarmenu} from "./sidebarmenu/Sidebarmenu.tsx";
import {theme} from "../../Styles/Theme.styles.ts";

type SidebarPropsType = {
    isOpen?: boolean;
}


export const Sidebar = (props: SidebarPropsType) => {
    return (
        <StyledSidebar isOpen={props.isOpen}>
            <FlexWrapper justify={'flex-start'} align={'center'} direction={'column'} gap={'80px'}>
                <Logo/>
                <Sidebarmenu/>
            </FlexWrapper>
        </StyledSidebar>

    );
};

const StyledSidebar = styled.aside<{ isOpen?: boolean }>`
    background-color: ${props => props.theme.colors.secondary};
    position: fixed;
    height: 100vh;
    width: 100px;
    top: 0;
    left: 0;
    z-index: 9999999;
    border-right: 1px solid #e3e0e0;
    padding-top: 15px;

    @media ${theme.media.tablet} {
        width: 70px;
        transform: translateX(-70px);

        ${props => props.isOpen && css<{ isOpen?: boolean }>`
            transform: translateX(0);
            background-color: whitesmoke;
        `}
    }
`