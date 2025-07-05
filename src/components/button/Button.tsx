import styled from "styled-components";
import {theme} from "../../Styles/Theme.styles.ts";

type ButtonPropsType = {
    backgroundColor?: string;
    textColor?: string;
};

export const Button = styled.a<ButtonPropsType>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    display: inline-block;
    padding: 15px 40px;
    border: 2px solid ${props => props.theme.colors.accent};
    border-radius: ${theme.border.borderButton};
    cursor: pointer;
    font-weight: 500;
    font-size: calc((100vw - 360px) / (1440 - 360) * (18 - 14) + 14px);
    transition: all 0.3s ease;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    @media ${theme.media.tablet} {
        padding: 10px 20px;
        white-space: nowrap;
    }
`;

