import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";

type SkillsPropsType = {
    IconId: string;
    title: string;
    text: string;
}


export const Skill = (props: SkillsPropsType) => {
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
    width: 30%;
    background-color: #efe2c9;
`

const SKillTitle = styled.h3`
    s
`

const SKillText = styled.p`

`