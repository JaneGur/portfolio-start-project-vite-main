import styled from "styled-components";
import {theme} from "../../Styles/Theme.styles.ts";

type PhotoPropsType = {
    src: string;
}

export const Photo = (props: PhotoPropsType) => {
    return (
        <MainPhoto src={props.src} alt="EG"/>
    );
};

const MainPhoto = styled.img`
    border-radius: ${theme.border.borderBlock};
    max-height: 450px;
    width: 350px;
    object-fit: cover;

    @media ${theme.media.tablet} {
        max-height: 400px;
        width: 300px;
    }

    @media ${theme.media.mobile} {
        height: 320px;
        width: 220px;
    }
`

