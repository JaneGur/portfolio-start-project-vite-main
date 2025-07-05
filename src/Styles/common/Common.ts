import {css} from 'styled-components';
import {theme} from "../Theme.styles.ts";

type FontStyledPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    opacity?: number;
    align?: string;
    Fmax?: number;
    Fmin?: number;
};

export const fontStyled = ({family, weight, color, lineHeight, opacity, align, Fmax, Fmin}: FontStyledPropsType) => css`
    font-family: ${family || 'Poppins'};
    //font-size: calc((100vw - Vmin) / (Vmax-Vmin) * (Fmax-Fmin) + Fmin);
    font-size: calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    font-weight: ${weight || 400};
    color: ${color || theme.colors.textColor};
    line-height: ${lineHeight || 1.2};
    opacity: ${opacity || .07};
    text-align: ${align || 'center'};
`;
