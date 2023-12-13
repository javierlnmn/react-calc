import { useState } from "react";

export interface CalculatorButtonProps {
    buttonStyle: string,
    buttonLabel: string,
    handleClick: Function,
    colStart: string,
    colEnd: string,
}

const CalculatorButton = ({ buttonStyle, buttonLabel, handleClick, colStart, colEnd }: CalculatorButtonProps): JSX.Element => {

    const [isAnimated, setIsAnimated] = useState(false);

    const handleAnimation = () => {
        setIsAnimated(true);

        setTimeout(() => {
            setIsAnimated(false);
        }, 1000);
    };

    return (
        <div 
            className={`p-5 w-full cursor-pointer grid place-content-center ${colStart} ${colEnd} ${buttonStyle}`}
            onClick={() => {
                handleClick();
                handleAnimation();
            }}
        >
            <p className={`select-none whitespace-break-spaces break-words mb-5 ${isAnimated ? 'animate-bounce' : ''}`}>{buttonLabel}</p>
        </div>
    );
};

export default CalculatorButton;
