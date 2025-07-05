import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {theme} from "../../Styles/Theme.styles.ts";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledSocialIconList>

                    <SocialItem>
                        <SocialLink href=""><Icon IconId={'gitsocial'} height={'50px'} width={'50px'}
                                                  viewBox={'0 0 70 70'}></Icon></SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=""><Icon IconId={'linkdin'} height={'50px'} width={'50px'}
                                                  viewBox={'0 0 70 70'}></Icon></SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink href=""><Icon IconId={'telegram'} height={'50px'} width={'50px'}
                                                  viewBox={'0 0 70 70'}></Icon></SocialLink>
                    </SocialItem>

                </StyledSocialIconList>
                <Copyright>@2025 Gurtsieva Evgeniya</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondary};
    min-height: 80px;
    padding: 20px 0;
`

const Copyright = styled.small`
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