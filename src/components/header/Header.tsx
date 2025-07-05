import styled from "styled-components";
import {Logo} from "../logo/Logo.tsx";
import {Headermenu} from "./headermenu/Headermenu.tsx";
import {Container} from "../Container.ts";
import {FlexWrapper} from "../FlexWrapper.ts";

const items = ['Home', 'About me', 'My background', 'My skills', 'Projects', 'Contact me', 'Resume']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Headermenu menuItems={items}/>
                </FlexWrapper>
            </Container>

        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    padding: 20px 0;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999999;
`