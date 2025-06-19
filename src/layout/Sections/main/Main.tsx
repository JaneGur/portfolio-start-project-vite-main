import photo from '../../../assets/images/Me.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {

    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Evgeniya Gurtsieva</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`

    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: beige;
`