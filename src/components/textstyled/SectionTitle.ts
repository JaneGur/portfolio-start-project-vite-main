import styled from "styled-components";
import {fontStyled} from "../../Styles/common/Common.ts";
import {theme} from "../../Styles/Theme.styles.ts";


export const SectionTitle = styled.h2`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 700,
        Fmax: 120,
        Fmin: 50,
        color: `${theme.colors.textColor}`,
        opacity: .07,
        align: 'center',
    })}
    position: relative;
    text-transform: uppercase;
    @media ${theme.media.mobile} {
        white-space: nowrap;
    }
`