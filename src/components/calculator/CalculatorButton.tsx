import { useState, useEffect } from "react"

interface Props {
    buttonStyle: string,
    buttonValue: number,
    handleClick: Function,
    colStart: number,
    colEnd: number,
}

const CalculatorButton = ({ buttonStyle, buttonValue, handleClick, colStart, colEnd }: Props): JSX.Element => {

    const customColumnStyles = {
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
    }

    return (
        <div 
            className={'p-3 min-h-[200px] bg-stone-50 text-7xl grid place-content-center'}
            style={customColumnStyles}
            onClick={() => handleClick()}
        >
            <p className="whitespace-break-spaces break-words h-full mb-5 text-stone-800">{buttonValue}</p>
        </div>
    );
};

export default CalculatorButton;
