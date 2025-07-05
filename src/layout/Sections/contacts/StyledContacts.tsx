import styled from "styled-components";
import {SectionStyledTitle} from "../../../components/textstyled/SectionStyledTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {BlockTitle} from "../../../components/textstyled/BlockTitle.ts";
import {Button} from "../../../components/button/Button.tsx";
import {theme} from "../../../Styles/Theme.styles.ts";
import {Container} from "../../../components/Container.ts";
import TelIcon from '../../../assets/images/phone.svg'
import EmailIcon from '../../../assets/images/email.svg'
import {SmallText} from "../../../components/textstyled/SmallText.ts";
import {fontStyled} from "../../../Styles/common/Common.ts";

export const StyledContacts = () => {
    return (
        <StyledContact>
            <Container>
                <SectionStyledTitle firstname={'contacts'} lastname={'Get in touch'}/>
                <FlexWrapper justify={'space-between'}>
                    <ContactLeftWrapper>
                        <BlockTitle>Contacts</BlockTitle>
                        <ContactBlockSmallText>Moscow, Russia</ContactBlockSmallText>
                        <ContactLink href=""><span><img src={TelIcon} alt=""/></span>+7 985 156 34 23</ContactLink>
                        <ContactLink href=""><span><img src={EmailIcon}
                                                        alt=""/></span>evgeniyagurtsieva@yandex.ru</ContactLink>
                    </ContactLeftWrapper>
                    <ContactRightWrapper>
                        <BlockTitle>Send me a note</BlockTitle>
                        <StyledForm>
                            <FlexWrapper wrap={'wrap'} justify={'space-between'}>

                                <Field placeholder={'Name'}></Field>
                                <Field placeholder={'Email'}></Field>

                                <Textarea as={'textarea'} placeholder={'Your message'}></Textarea>
                                <Button as={'button'} backgroundColor={theme.colors.accent}
                                        textColor={theme.colors.primary}>Send</Button>
                            </FlexWrapper>
                        </StyledForm>
                    </ContactRightWrapper>

                </FlexWrapper>

            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    height: 100vh;
    background-color: ${props => props.theme.colors.secondary};

    @media ${theme.media.tablet} {
        padding: 60px 0;
        div > div {
            flex-direction: column-reverse;
            align-items: center;
            gap: 80px;

        }
    }
`

const StyledForm = styled.form`
    width: 100%;
    padding: 20px;
    border-radius: ${theme.border.borderBlock};
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    button {
        width: 100%;
    }
`

const Field = styled.input`
    padding: 12px 16px;
    border-radius: ${theme.border.borderBlock};
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.primary};
    box-shadow: 0 2px 6px ${theme.colors.secondary};
    font-size: 14px;
    outline: none;
    width: 48%;

    &:focus {
        border-color: ${theme.colors.accent};
        box-shadow: 0 0 0 4px rgba(0, 120, 255, 0.2);
    }

    @media ${theme.media.mobile} {
        width: 100%;
    }
`

const Textarea = styled(Field).attrs({as: 'textarea'})`
    min-height: 100px;
    resize: none;
    width: 100%;
    margin: 10px 0 20px;
`


const ContactLeftWrapper = styled.div`
    @media ${theme.media.mobile} {
        h3, a {
            text-align: center;
        }
    }
`

const ContactRightWrapper = styled.div`
    width: 60%;

    @media ${theme.media.tablet} {
        width: 100%;
    }

    @media ${theme.media.mobile} {
        h3 {
            text-align: center;
        }
    }
`

const ContactLink = styled.a`
    margin-bottom: 15px;
    display: block;

    span {
        margin-right: 15px;
    }

    img {
        transform: translateY(5px);
    }
`
const ContactBlockSmallText = styled(SmallText)`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 400,
        Fmax: 18,
        Fmin: 16,
        color: `${theme.colors.textColor}`,
        align: 'left',
        opacity: 1,
    })}
    display: inline-block;
    margin-bottom: 15px;

    @media ${theme.media.mobile} {
        transform: translateX(65%);
    }
`
