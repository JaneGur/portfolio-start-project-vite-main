import styled from "styled-components";
import {SectionTitle} from "./SectionTitle.ts";
import {theme} from "../../Styles/Theme.styles.ts";
import {fontStyled} from "../../Styles/common/Common.ts";

type SectionStyledTitleProps = {
    firstname: string;
    lastname: string;
}

export const SectionStyledTitle = (props: SectionStyledTitleProps) => {
    return (
        <SectionStyledTitleBlock>
            <SectionTitle>{props.firstname}</SectionTitle>
            <SectionStyleText>{props.lastname}</SectionStyleText>
        </SectionStyledTitleBlock>

    );
};

const SectionStyledTitleBlock = styled.div`
    display: flex;
    margin-bottom: 60px;
    justify-content: center;
    align-items: center;

    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
`

const SectionStyleText = styled.span`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 700,
        Fmax: 36,
        Fmin: 22,
        color: `${theme.colors.textColor}`,
        opacity: 1,
        align: 'center',
    })}
    line-height: 167%;
    position: absolute;
`

