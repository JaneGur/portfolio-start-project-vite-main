import styled from "styled-components";
import {fontStyled} from "../../Styles/common/Common.ts";
import {theme} from "../../Styles/Theme.styles.ts";

export const SmallText = styled.span`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 400,
        Fmax: 30,
        Fmin: 20,
        color: `${theme.colors.accent}`,
        align: 'left',
        opacity: 1,
    })}
`