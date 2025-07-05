import styled from "styled-components";
import {fontStyled} from "../../Styles/common/Common.ts";
import {theme} from "../../Styles/Theme.styles.ts";

export const BlockTitle = styled.h3`
    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 600,
        Fmax: 28,
        Fmin: 20,
        color: `${theme.colors.textColor}`,
        opacity: 1,
        align: 'left',
    })}
    margin-bottom: 18px;
`