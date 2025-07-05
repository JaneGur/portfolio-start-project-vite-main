import styled, {css} from "styled-components";
import {theme} from "../../Styles/Theme.styles.ts";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {Sidebar} from "../sidebar/Sidebar.tsx";

export const MobileHeader = () => {
    return (
        <MobileHeaderBlock isOpen={false}>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo isOpen={false}/>
                <Sidebar isOpen={false}/>
                <ButtonBlock>
                    <BurgerButton isOpen={false}>
                        <span></span>
                    </BurgerButton>
                </ButtonBlock>
            </FlexWrapper>
        </MobileHeaderBlock>
    );
};

const MobileHeaderBlock = styled.div<{ isOpen?: boolean }>`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
        position: sticky;
        top: 0;
        height: 10vh;
        background-color: ${theme.colors.secondary};
        z-index: 9999999999999999;

        ${props => props.isOpen && css<{ isOpen?: boolean }>`

        `}
    }
`
const ButtonBlock = styled.div`
    height: 10vh;
    width: 100px;
    position: relative;
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    @media ${theme.media.tablet} {
        background-color: transparent;
        position: absolute;
        width: 30px;
        height: 25px;
        bottom: 4vh;
        right: 25%;
        cursor: pointer;


        span {
            display: block;
            width: 100%;
            height: 4px;
            background-color: ${theme.colors.accent};
            border-radius: 50px;

            ${props => props.isOpen && css<{ isOpen?: boolean }>`
                background-color: transparent;
            `}
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 4px;
                background-color: ${theme.colors.accent};
                border-radius: 50px;
                top: 0;
                right: 0;
                left: 0;

                ${props => props.isOpen && css<{ isOpen?: boolean }>`
                    transform: translateY(10px) rotate(-45deg);
                `}
            }

            &::after {
                content: "";
                position: absolute;
                width: 60%;
                height: 4px;
                background-color: ${theme.colors.accent};
                border-radius: 50px;
                bottom: 0;
                right: 0;

                ${props => props.isOpen && css<{ isOpen?: boolean }>`
                    width: 100%;
                    transform: translateY(-11px) rotate(45deg);
                `}
            }
        }


        &:hover {
            transform: translateY(-3px);
            transition: 0.1s;
        }
    }
`



