import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {BlockTitle} from "../../../components/textstyled/BlockTitle.ts";
import {SectionStyledTitle} from "../../../components/textstyled/SectionStyledTitle.tsx";
import {fontStyled} from "../../../Styles/common/Common.ts";
import {theme} from "../../../Styles/Theme.styles.ts";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionStyledTitle firstname={'my skills'} lastname={'Tech Stack & Tools'}/>
                <SkillsBlockTitle> Technologies I’ve been working with recently</SkillsBlockTitle>
                <FlexWrapper wrap="wrap" justify="space-between" gap={'80px'}>
                    <Icon IconId={'html'}></Icon>
                    <Icon IconId={'css'}></Icon>
                    <Icon IconId={'js'}></Icon>
                    <Icon IconId={'ts'} viewBox={'-8 -8 120 120'}></Icon>
                    <Icon IconId={'react'} viewBox={'-4 -8 120 120'}></Icon>
                    <Icon IconId={'sc'}></Icon>
                    <Icon IconId={'sass'} viewBox={'-6 -20 120 120'}></Icon>
                    <Icon IconId={'figma'} viewBox={'-30 -16 120 120'}></Icon>
                    <Icon IconId={'git'} viewBox={'-8 -8 120 120'}></Icon>
                    <Icon IconId={'github'} viewBox={'-18 -18 120 120'}></Icon>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: ${props => props.theme.colors.primary};

    @media ${theme.media.tablet} {
        div {
            justify-content: space-around;
            gap: 30px;
        }
    }

    @media ${theme.media.tablet} {
        svg {
            width: 100px;
            height: 100px;
        }
    }

`
const SkillsBlockTitle = styled(BlockTitle)`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 600,
        Fmax: 28,
        Fmin: 20,
        color: `${theme.colors.textColor}`,
        opacity: 1,
        align: 'center',
    })}
    margin-bottom: 80px;

    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
`