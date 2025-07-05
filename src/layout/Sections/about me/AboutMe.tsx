import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {BlockTitle} from "../../../components/textstyled/BlockTitle.ts";
import {SectionText} from "../../../components/textstyled/SectionText.ts";
import {SectionStyledTitle} from "../../../components/textstyled/SectionStyledTitle.tsx";
import {theme} from "../../../Styles/Theme.styles.ts";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionStyledTitle firstname={'about me'} lastname={'Who I am'}/>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>

                    <TextWrapper>
                        <BlockTitle>Know me better</BlockTitle>
                        <SectionText>I have a technical background — I graduated from an engineering university and
                            spent 4 years
                            developing firmware for microcontrollers.
                            Later, I shifted into EdTech automation: for 5 years, I built chatbots, designed complex
                            funnels, and streamlined operations for online schools.

                            Now I'm fully focused on web development. I’m drawn to logic, structure, and clean code —
                            and I want to build things that truly work and make a difference.</SectionText>
                    </TextWrapper>
                    <ListWrapper>
                        <ul>
                            <li>Name: <span>Evgeniya Gurtsieva</span></li>
                            <hr/>
                            <li>Email: <span>iliving2007@yandex.ru</span></li>
                            <hr/>
                            <li>Age: <span>34</span></li>
                            <hr/>
                            <li>From: <span>Moscow, Russian Federation</span></li>
                        </ul>
                    </ListWrapper>
                </FlexWrapper>
            </Container>

        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: ${props => props.theme.colors.primary};
`
const TextWrapper = styled.div`
    max-width: 50%;


    @media ${theme.media.tablet} {
        h3 {
            text-align: center;
        }

        max-width: 100%;
    }
`
const ListWrapper = styled.div`
    ul li span {
        color: ${props => props.theme.colors.accent};
        font-weight: 700;
    }

    li {
        font-weight: 500;
        margin: 15px 0;
    }

    @media ${theme.media.tablet} {
        display: none;
        margin: 0 auto;
        max-width: 100%;
    }
`

