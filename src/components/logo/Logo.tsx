import {Icon} from "../icon/Icon.tsx";
import styled, {css} from "styled-components";
import {theme} from "../../Styles/Theme.styles.ts";

type LogoPropsType = {
    isOpen?: boolean;
}

export const Logo = (props: LogoPropsType) => {
    return (
        <LogoLink href="" isOpen={props.isOpen}>
            <Icon IconId={'logo'} height={'60'} width={'60'} viewBox={'0 0 60 60'}/>
        </LogoLink>
    );
};

const LogoLink = styled.a<{ isOpen?: boolean }>`
    @media ${theme.media.tablet} {
        margin-left: 3%;
        margin-bottom: 0;

        ${props => props.isOpen && css<{ isOpen?: boolean }>`
            visibility: hidden;
        `}
    }
`