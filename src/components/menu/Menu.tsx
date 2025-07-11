import styled from "styled-components";
import {theme} from "../../Styles/Theme.styles.ts";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ListBlock>
                {props.menuItems.map((item, i) => {
                    return <ListItem key={i}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ListBlock>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

`

const ListBlock = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
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