import styled from "styled-components";
import {theme} from "../../../Styles/Theme.styles.ts";

export const Headermenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, i) => {
                    return <ListItem key={i}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

    li:last-child a {
        color: ${theme.colors.primary};
        text-decoration: none;
        padding: 15px 40px;
        border: 2px solid ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        border-radius: ${theme.border.borderButton};
    }
`

const ListItem = styled.li`


`

const Link = styled.a`
    font-weight: 500;
    font-size: 18px;
    color: #000;


    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-style: solid;
        text-decoration-color: ${theme.colors.accent};
    }
`