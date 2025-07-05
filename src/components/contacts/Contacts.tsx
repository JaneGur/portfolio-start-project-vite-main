import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.ts";
import {Icon} from "../icon/Icon.tsx";
import {Container} from "../Container.ts";
import {Button} from "../button/Button.tsx";
import {theme} from "../../Styles/Theme.styles.ts";
import {BlockTitle} from "../textstyled/BlockTitle.ts";
import {SectionTitle} from "../textstyled/SectionTitle.ts";
import {SectionText} from "../textstyled/SectionText.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContactBlock>
                    <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                        <WrapperTextContactBlock>
                            <SectionTitle>contacts</SectionTitle>
                            <SectionText>Contact me, let’s make magic
                                together</SectionText>
                            <StyledSocialIconList>

                                <SocialItem>
                                    <SocialLink href=""><Icon IconId={'vk'} height={'50px'} width={'50px'}
                                                              viewBox={'0 0 70 70'}></Icon></SocialLink>
                                </SocialItem>

                                <SocialItem>
                                    <SocialLink href=""><Icon IconId={'instagram'} height={'50px'} width={'50px'}
                                                              viewBox={'0 0 70 70'}></Icon></SocialLink>
                                </SocialItem>

                                <SocialItem>
                                    <SocialLink href=""><Icon IconId={'telegram'} height={'50px'} width={'50px'}
                                                              viewBox={'0 0 70 70'}></Icon></SocialLink>
                                </SocialItem>

                            </StyledSocialIconList>
                        </WrapperTextContactBlock>
                        <StyledForm>

                            <FlexWrapper direction={'column'} justify={'space-around'} gap={'10px'}>
                                <BlockTitle></BlockTitle>
                                <Field placeholder={'Name'}></Field>
                                <Field placeholder={'Email'}></Field>
                                <Textarea as={'textarea'} placeholder={'Your message'}></Textarea>
                                <Button backgroundColor={theme.colors.accent}
                                        textColor={theme.colors.primary}>Send</Button>
                            </FlexWrapper>
                        </StyledForm>
                    </FlexWrapper>
                </ContactBlock>

            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: ${theme.colors.secondary};
    padding: 0;
`

const StyledForm = styled.form`
    border: 2px solid ${theme.colors.secondary};
    max-width: 500px;
    width: 100%;
    background-color: ${theme.colors.primary};
    padding: 20px;
    border-radius: 16px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Field = styled.input`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderColor};
    background-color: #fff;
    box-shadow: 0 2px 6px ${theme.colors.secondary};
    font-size: 14px;
    outline: none;

    &:focus {
        border-color: ${theme.colors.accent};
        box-shadow: 0 0 0 4px rgba(0, 120, 255, 0.2);
    }
`

const Textarea = styled(Field).attrs({as: 'textarea'})`
    min-height: 100px;
    resize: none;
`


const StyledSocialIconList = styled.ul`
    display: flex;
    list-style: none;
`

const SocialItem = styled.li`

    &:hover {
        transform: translateY(-2px);
    }
`

const SocialLink = styled.a`

`

const ContactBlock = styled.div`
    padding: 30px;
    background-color: ${theme.colors.accent};
    border-radius: ${theme.border.borderBlock};
    position: relative;
    transform: translateY(-30%);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
    }
`


const WrapperTextContactBlock = styled.div`
    p {
        margin-bottom: 30px;
    }
`