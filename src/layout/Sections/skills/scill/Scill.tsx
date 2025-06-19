import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillsPropsType = {
    IconId: string;
    title: string;
    text: string;

}


export const Scill = (props: SkillsPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <Icon IconId={props.IconId}></Icon>
                <SKillTitle>{props.title}</SKillTitle>
                <SKillText>{props.text}</SKillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: #cca1bb;
`

const SKillTitle = styled.h3`
    s
`

const SKillText = styled.p`

`