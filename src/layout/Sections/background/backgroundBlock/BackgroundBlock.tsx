import styled from "styled-components";
import {theme} from "../../../../Styles/Theme.styles.ts";
import {SectionText} from "../../../../components/textstyled/SectionText.ts";

type BackgroundBlockPropsType = {
    year: string,
    name: string,
    description: string,
}

export const BackgroundBlock = (props: BackgroundBlockPropsType) => {
    return (
        <WrapperBlock>
            <BackgroundBlockStyle>
                <Years>{props.year}</Years>
                <BlockTitle>{props.name}</BlockTitle>
                <SectionText size={'16px'}>{props.description}</SectionText>
            </BackgroundBlockStyle>
        </WrapperBlock>
    );
};

const BackgroundBlockStyle = styled.div`

    min-height: 200px;
    width: 100%;
    border-radius: ${props => props.theme.border.borderBlock};
    border: 2px solid ${props => props.theme.colors.borderColor};
    background-color: ${props => props.theme.colors.primary};
    padding: 30px;
`

const Years = styled.span`
    display: inline-block;
    padding: 5px 20px;
    background-color: ${props => props.theme.colors.accent};
    border-radius: ${props => props.theme.border.borderButton};
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
`

const BlockTitle = styled.h4`
    color: ${theme.colors.textColor};
    text-align: left;
    font-weight: 500;
    padding-bottom: 18px;
    font-size: 20px;
    font-style: italic;
`

const WrapperBlock = styled.div`
    position: relative;
    z-index: 5;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid ${props => props.theme.colors.accent};
        bottom: -8px;
        right: -8px;
        border-radius: ${props => props.theme.border.borderBlock};
        z-index: -5;
    }
`