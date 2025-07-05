import IconSprite from '../../assets/images/IconSprite.svg'

type IconPropsType = {
    IconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"}
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.IconId}`}></use>
        </svg>
    );
};
