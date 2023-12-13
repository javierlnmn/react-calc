import { useState } from "react";

interface Props {
    buttonStyle: string,
    buttonLabel: string,
    handleClick: Function,
    colStart: string,
    colEnd: string,
}

const CalculatorButton = ({ buttonStyle, buttonLabel, handleClick, colStart, colEnd }: Props): JSX.Element => {

    const [isAnimated, setIsAnimated] = useState(false);

    const handleAnimation = () => {
        setIsAnimated(true);

        setTimeout(() => {
            setIsAnimated(false);
        }, 1000);
    };

    return (
        <div 
            className={`p-3 w-full aspect-[11/14] cursor-pointer grid place-content-center ${colStart} ${colEnd} ${buttonStyle}`}
            onClick={() => {
                handleClick();
                handleAnimation()
            }}
        >
            <p className={`select-none whitespace-break-spaces break-words mb-5 text-3xl sm:text-5xl lg:text-6xl ${isAnimated ? 'animate-bounce' : ''}`}>{buttonLabel}</p>
        </div>
    );
};

export default CalculatorButton;
