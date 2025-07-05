import styled from "styled-components";
import {theme} from "../../../Styles/Theme.styles.ts";
import Icon1 from "../../../assets/menu/Home.svg";
import Icon2 from "../../../assets/menu/cv.svg";
import Icon3 from "../../../assets/menu/Services.svg";
import Icon4 from "../../../assets/menu/Blog.svg";
import Icon5 from "../../../assets/menu/Portfolio.svg";
import Icon6 from "../../../assets/menu/Contact.svg";

export const Sidebarmenu = () => {
    return (
        <StyledMenu>
            <ListBlock>
                <ListItem><Link href={'#'}><img src={Icon1} alt=""/><Tooltip>Home</Tooltip></Link></ListItem>
                <ListItem><Link href={'#'}><img src={Icon2} alt=""/><Tooltip>About me</Tooltip></Link></ListItem>
                <ListItem><Link href={'#'}><img src={Icon4} alt=""/><Tooltip>My background</Tooltip></Link></ListItem>
                <ListItem><Link href={'#'}><img src={Icon3} alt=""/><Tooltip>My skills</Tooltip></Link></ListItem>
                <ListItem><Link href={'#'}><img src={Icon5} alt=""/><Tooltip>My projects</Tooltip></Link></ListItem>
                <ListItem><Link href={'#'}><img src={Icon6} alt=""/><Tooltip>Contacts</Tooltip></Link></ListItem>
            </ListBlock>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    max-width: 150px;
`

const ListBlock = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`

const ListItem = styled.li`
    border: 1px solid transparent;
    padding: 12px;
    border-radius: 5px;

    &:hover {
        border: 1px solid ${theme.colors.accent};
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: .1s;
    }

`;


const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover > span {
        opacity: 1;
        transform: translateX(10px);
        visibility: visible;
        transition: .5s;
    }

    &:hover {
        transform: scale(1.1);
        transition: .5s;
    }
`

const Tooltip = styled.span`
    position: absolute;
    left: 50px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primary};
    padding: 6px 14px 6px 16px;
    border-radius: 6px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transform: translateX(0);

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent white transparent transparent;
    }
`;