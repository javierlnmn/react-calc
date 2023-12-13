import { useState } from "react";

import CalculatorButton from "./CalculatorButton";

import { CalculatorButtonTheme } from "./CalculatorButtonTheme.d";
import { CalculatorButtonProps } from "./CalculatorButton";

const Calculator = (): JSX.Element => {
    const [currentValue, setCurrentValue] = useState(0);

    const fillNumber = (value: number): void => {
        setCurrentValue(currentValue * 10 + value);
    };

    const buttonsList: CalculatorButtonProps[] = [
        {
            buttonLabel: "7",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(7),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "8",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(8),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "9",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(9),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: "+",
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => fillNumber(1),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        }, // performCalculation("+")
        {
            buttonLabel: "4",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(4),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "5",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(5),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "6",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(6),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: "-",
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => fillNumber(1),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        }, // performCalculation("-")
        {
            buttonLabel: "1",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(1),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "2",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(2),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "3",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(3),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: "×",
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => fillNumber(1),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        }, // performCalculation("×")
        {
            buttonLabel: "AC",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(1),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        }, // clearCalculator()
        {
            buttonLabel: "0",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(0),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: ".",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => fillNumber(1),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        }, // handleDecimal()
        {
            buttonLabel: "=",
            buttonStyle: CalculatorButtonTheme.Orange,
            handleClick: () => fillNumber(1),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        }, // calculateResult()
    ];

    return (
        <div className="my-14 bg-stone-700">
            <div className="flex items-center justify-center w-11/12 max-w-md mx-auto">
                <div className="grid grid-cols-4 h-full w-full my-8 shadow-2xl">
                    <div className="p-3 col-span-4 aspect-[19/9] w-full bg-stone-900 text-7xl">
                        <p className="h-full whitespace-break-spaces break-words mb-5">
                            {currentValue}
                        </p>
                    </div>
                    {buttonsList.map((button, index) => (
                        <CalculatorButton
                            key={index}
                            buttonStyle={button.buttonStyle}
                            buttonLabel={button.buttonLabel}
                            handleClick={button.handleClick}
                            colStart={button.colStart}
                            colEnd={button.colEnd}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calculator;
