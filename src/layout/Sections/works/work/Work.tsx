import styled from "styled-components";
import {theme} from "../../../../Styles/Theme.styles.ts";
import {BlockTitle} from "../../../../components/textstyled/BlockTitle.ts";
import {Button} from "../../../../components/button/Button.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SectionText} from "../../../../components/textstyled/SectionText.ts";

type WorkPropsType = {
    title?: string;
    text?: string;
    href?: string
    image?: string;
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWorks>
            <FlexWrapper justify={'space-around'}>
                <TextContent>
                    <BlockTitle>{props.title}</BlockTitle>
                    <SectionText>{props.text}</SectionText>
                    <Button as='a'>Learn more</Button>
                </TextContent>
                <ImageWrapper>
                    <img loading={'lazy'} src={props.image} alt=""/>
                </ImageWrapper>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.article<WorkPropsType>`

    width: 100%;
    background-color: ${theme.colors.primary};
    border-radius: ${props => props.theme.border.borderBlock};
    border: 1px solid ${theme.colors.borderColor};

    @media ${theme.media.tablet} {
        div {
            flex-direction: column-reverse;
        }
    }
`
const TextContent = styled.div`
    padding: 60px 0;
    max-width: 45%;

    p {
        margin-bottom: 60px;
    }

    @media ${theme.media.tablet} {
        max-width: 100%;
        padding: 0 3% 20px 3%;

        p {
            margin-bottom: 20px;
        }
    }
`
const ImageWrapper = styled.div`
    max-width: 45%;

    img {
        width: 94%;
        border-radius: ${props => props.theme.border.borderBlock};
        transform: translate(3%, -8%);

        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }
    }

    @media ${theme.media.tablet} {
        max-width: 100%;
    }
`
