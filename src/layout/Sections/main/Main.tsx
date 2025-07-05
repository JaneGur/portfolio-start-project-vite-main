import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Photo} from "../../../components/photo/Photo.tsx";
import {Container} from "../../../components/Container.ts";
import {Button} from "../../../components/button/Button.tsx";
import mainPhoto from "../../../assets/images/1.jpg"
import {theme} from "../../../Styles/Theme.styles.ts";
import {SectionText} from "../../../components/textstyled/SectionText.ts";
import Circle1 from '../../../assets/details/Ellipse 2.png'
import Circle2 from '../../../assets/details/Ellipse 1.png'
import {SectionTitle} from "../../../components/textstyled/SectionTitle.ts";
import {fontStyled} from "../../../Styles/common/Common.ts";
import {SmallText} from "../../../components/textstyled/SmallText.ts";

export const Main = () => {

    return (
        <StyledMain>
            <Container>
                <MainFlexWrapper justify={'space-between'} wrap={"wrap"} align={'center'}>
                    <WrapperText>
                        <SmallText>Hello, I’m</SmallText>
                        <MainTitle>Evgeniya Gurtsieva</MainTitle>
                        <SectionText>I’m Front End Developer based in
                            Moscow, Russian Federation. I love designing, coding, creating and building
                            stuff. </SectionText>
                        <div>
                            <Button backgroundColor={theme.colors.accent} textColor={theme.colors.primary}>Contact
                                me</Button>
                            <Button backgroundColor={'transparent'}
                                    textColor={theme.colors.textColor}>Projects</Button>
                        </div>
                    </WrapperText>
                    <WrapperPhoto>
                        <Photo src={mainPhoto}/>
                    </WrapperPhoto>
                </MainFlexWrapper>
            </Container>

        </StyledMain>
    );
};


const StyledMain = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 220px 0;
    overflow: hidden;

    &::before {
        content: '';
        top: 2px;
        right: -70px;
        background-image: url(${Circle1});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 80;
        width: 200px;
        height: 200px;
    }

    &::after {
        content: '';
        bottom: 0;
        left: -50px;
        background-image: url(${Circle2});
        transform: rotate(-90deg);
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: 80;
        width: 200px;
        height: 200px;
    }

    @media ${theme.media.tablet} {

        height: 100vh;
        padding: 60px 0;
        overflow: visible;

        &::after {
            left: 80%;
        }

        &::before {
            content: none;
            display: none;
        }
    }

    @media ${theme.media.mobile} {

        padding: 60px 0;

        &::after {
            content: none;
            display: none;
        }
    }
`

const MainFlexWrapper = styled(FlexWrapper)`
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media ${theme.media.tablet} {
        justify-content: center;
        flex-wrap: wrap-reverse;
    }
`

const MainTitle = styled(SectionTitle)`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 700,
        Fmax: 55,
        Fmin: 40,
        color: `${theme.colors.textColor}`,
        opacity: 1,
        align: 'left',
    })}

    text-transform: none;
    margin: 7px 0 20px;

    @media ${theme.media.mobile} {
        white-space: wrap;
    }
`


const WrapperText = styled.div`
    display: flex;
    max-width: 60%;
    flex-direction: column;
    align-items: flex-start;


    p {
        margin-bottom: 60px;

        @media ${theme.media.tablet} {
            margin-bottom: 30px;
        }
    }

    div {
        display: flex;
        gap: 20px;

        @media ${theme.media.mobile} {
            //flex-direction: column;
            gap: 10px;
        }
    }

    @media ${theme.media.tablet} {
        max-width: 100%;
    }
`

const WrapperPhoto = styled.div`
    position: relative;
    z-index: 5;

    &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 350px;
        height: 450px;
        border: 3px solid ${theme.colors.accent};
        bottom: -10px;
        right: -10px;
        border-radius: ${theme.border.borderBlock};
        z-index: -1;

        @media ${theme.media.tablet} {
            max-height: 400px;
            width: 300px;
        }

        @media ${theme.media.mobile} {
            height: 320px;
            width: 220px;
        }
    }

    @media ${theme.media.tablet} {
        margin-bottom: 65px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 45px;
    }
`

