import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Scill} from "./scill/Scill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Scill IconId={'codeSvg'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'html5'}></Scill>
                <Scill IconId={'css'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'CSS3'}></Scill>
                <Scill IconId={'react'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'React'}></Scill>
                <Scill IconId={'typeScript'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'TypeScript'}></Scill>
                <Scill IconId={'styledComponents'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'Styled Components'}></Scill>
                <Scill IconId={'figma'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}
                       title={'Figma'}></Scill>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    background-color: #efcdd9;
`