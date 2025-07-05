import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {BlockTitle} from "../../../components/textstyled/BlockTitle.ts";
import {BackgroundBlock} from "./backgroundBlock/BackgroundBlock.tsx";
import {SectionStyledTitle} from "../../../components/textstyled/SectionStyledTitle.tsx";
import {theme} from "../../../Styles/Theme.styles.ts";


const MyEducation = [
    {
        year: '2008 – 2014',
        where: 'Engineer in Circuit Design',
        description: 'MPEI (National Research University), Moscow, Russia. Higher education in microelectronics and circuit engineering',
    },
    {
        year: ' 2024 – Present',
        where: 'Student, IT-Incubator',
        description: 'Studying JavaScript, React, HTML/CSS, and backend fundamentals (Node.js)',
    }
]

const MyExperience = [
    {
        year: '2013 – 2017',
        where: '1st Category Hardware Design Engineer',
        description: 'Development of modules for control systems',
    },
    {
        year: '2021 – 2025',
        where: 'EdTech industry (online schools)',
        description: 'Created chatbots, set up workflows, automated processes for online learning platforms',
    },

    {
        year: '2024 – Present',
        where: 'Frontend Developer (Junior)',
        description: 'Working with React, TypeScript, SCSS, styled-components',
    }
]

export const Background = () => {
    return (
        <StyledBackgroundBlock>
            <Container>
                <SectionStyledTitle firstname={'resume'} lastname={'My background'}/>

                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'10px'}>
                    <BackgroundBlockWrapper>
                        <BlockTitle>Experience</BlockTitle>
                        {MyExperience.map((item, i) => {
                            return <BackgroundBlock key={i} year={item.year} name={item.where}
                                                    description={item.description}>
                            </BackgroundBlock>
                        })}
                    </BackgroundBlockWrapper>
                    <BackgroundBlockWrapper>
                        <BlockTitle>Education</BlockTitle>
                        {MyEducation.map((item, i) => {
                            return <BackgroundBlock key={i} year={item.year} name={item.where}
                                                    description={item.description}>
                            </BackgroundBlock>
                        })}
                    </BackgroundBlockWrapper>
                </FlexWrapper>
            </Container>
        </StyledBackgroundBlock>
    );
};

const StyledBackgroundBlock = styled.section`
    background-color: ${props => props.theme.colors.primary};
`

const BackgroundBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 20px;

    @media ${theme.media.tablet} {
        width: 100%;
        gap: 20px;
        h3 {
            margin-bottom: 0;
        }

        &:first-child {
            margin-bottom: 30px;
        }
    }
`

