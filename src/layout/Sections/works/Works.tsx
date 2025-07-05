import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import {Container} from "../../../components/Container.ts";
import {Menu} from "../../../components/menu/Menu.tsx";
import Image1 from '../../../assets/Projects/proj2.jpg'
import Image2 from '../../../assets/Projects/proj3.jpg'
import Image3 from '../../../assets/Projects/proj4.png'
import {SectionStyledTitle} from "../../../components/textstyled/SectionStyledTitle.tsx";
import {theme} from "../../../Styles/Theme.styles.ts";

const WorksArr = [{
    text: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    title: 'Project Name',
    href: 'https://www.research.design',
    image: Image1,
},
    {
        text: 'What was your role, your deliverables, if the project was personal, freelancing.',
        title: 'Project Name',
        href: 'https://www.research.design',
        image: Image2,
    },
    {
        text: 'You can also add in this description the type of the project, if it was for web, mobile, electron.',
        title: 'Project Name',
        href: 'https://www.research.design',
        image: Image3,
    },
]

const worksItems = ['All', 'Landing Page', 'React', 'Spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionStyledTitle firstname={'Portfolio'} lastname={'My projects'}/>
                <Menu menuItems={worksItems}></Menu>

                <FlexWrapper justify={'space-around'} gap={'80px'} wrap={'wrap'}>
                    {WorksArr.map((item, i) => {
                        return <Work key={i} title={item.title}
                                     text={item.text}
                                     href={item.href} image={item.image}></Work>
                    })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: ${props => props.theme.colors.primary};
    margin-bottom: 110px;

    nav {
        margin-bottom: 110px;
    }

    @media ${theme.media.tablet} {
        margin-bottom: 0;
    }
`