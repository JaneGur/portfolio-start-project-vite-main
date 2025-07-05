import styled from "styled-components";
import {fontStyled} from "../../Styles/common/Common.ts";
import {theme} from "../../Styles/Theme.styles.ts";

export const SectionText = styled.p`

    ${fontStyled({
        family: 'Poppins, sans-serif',
        weight: 400,
        Fmax: 18,
        Fmin: 14,
        color: `${theme.colors.textColor}`,
        opacity: 1,
        align: 'left',
    })}
    line-height: 167%;
}
`