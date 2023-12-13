import { useState } from "react";

import CalculatorButton from "./CalculatorButton";
import { CalculatorButtonTheme } from "./CalculatorButtonTheme.d";
import { CalculatorButtonProps } from "./CalculatorButton";

import { Operation } from "src/types";

const Calculator = (): JSX.Element => {
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [previousValue, setPreviousValue] = useState<number>(0);
    const [currentOperation, setCurrentOperation] = useState<Operation | undefined>();
    const [decimalEnabled, setDecimalEnabled] = useState<boolean>(false);
    const [decimalPlaces, setDecimalPlaces] = useState<number>(0);

    const updateCurrentValue = (value: number): void => {
        if (decimalEnabled) {
            const newValue = (currentValue) + value / Math.pow(10, decimalPlaces + 1);
            setCurrentValue(roundToDecimal(newValue, 20));
            setDecimalPlaces(decimalPlaces + 1);
        } else {
            setCurrentValue((currentValue) * 10 + value);
        }
    }
    
    const roundToDecimal = (value: number, decimalPlaces: number): number => {
        const factor = 10 ** decimalPlaces;
        return Math.round(value * factor) / factor;
    }

    const performCalculation =  (operator: Operation): void => {

        if (!currentValue) {
            return
        } else {
            setPreviousValue(currentValue);
        }

        if (previousValue && currentOperation) {
            setPreviousValue(currentOperation.perform(previousValue, currentValue));
        }
        
        setCurrentValue(0);
        setCurrentOperation(operator);
        setDecimalEnabled(false);
        setDecimalPlaces(0);
        
    }

    const isDecimal = (number: number): boolean => {
        return (number % 1) !== 0;
    }

    const handleDecimal = (): void => {
        if (decimalEnabled || !currentValue || isDecimal(currentValue)) return
        setDecimalEnabled(true);
    }

    const turnNegative = (): void => {
        if(!currentValue) return
        setCurrentValue(currentValue * -1);
    }

    const clearCalculator = (): void => {
        setPreviousValue(0);
        setCurrentValue(0);
        setCurrentOperation(undefined);
        setDecimalEnabled(false);
        setDecimalPlaces(0);
    }

    const handleResult = (): void => {
        if (!currentValue || !previousValue || !currentOperation) {
            return
        }
        
        setCurrentValue(currentOperation.perform(previousValue, currentValue));
        setPreviousValue(0);
        setCurrentOperation(undefined);
        setDecimalEnabled(false);
        setDecimalPlaces(0);
    }

    const operations: Record<string, Operation> = {
        add: {
            symbol: '+',
            name: 'Addition',
            perform: (a, b) => a + b,
        },
        subtract: {
            symbol: '-',
            name: 'Subtraction',
            perform: (a, b) => a - b,
        },
        multiply: {
            symbol: '*',
            name: 'Multiplication',
            perform: (a, b) => a * b,
        },
        divide: {
            symbol: '/',
            name: 'Division',
            perform: (a, b) => a / b,
        },
        power: {
            symbol: '^',
            name: 'Power',
            perform: (a, b) => Math.pow(a, b),
        },
    };

    const buttonsList: CalculatorButtonProps[] = [
        {
            buttonLabel: "7",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(7),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "8",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(8),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "9",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(9),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.add.symbol,
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => performCalculation(operations.add),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "4",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(4),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "5",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(5),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "6",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(6),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.subtract.symbol,
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => performCalculation(operations.subtract),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "1",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(1),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "2",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(2),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "3",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(3),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.multiply.symbol,
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => performCalculation(operations.multiply),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "+/-",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => turnNegative(),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "0",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => updateCurrentValue(0),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: ".",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => handleDecimal(),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.divide.symbol,
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => performCalculation(operations.divide),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "AC",
            buttonStyle: CalculatorButtonTheme.Gray,
            handleClick: () => clearCalculator(),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "=",
            buttonStyle: CalculatorButtonTheme.Orange,
            handleClick: () => handleResult(),
            colStart: "col-start-2",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.power.symbol,
            buttonStyle: CalculatorButtonTheme.Light,
            handleClick: () => performCalculation(operations.power),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
    ];

    return (
        <div className="my-14 bg-stone-700">
            <div className="flex items-center justify-center w-11/12 max-w-md mx-auto">
                <div className="grid grid-cols-4 h-full w-full my-8 shadow-2xl relative rounded-l-lg text-4xl  min-[489px]:text-5xl">
                    <div className="p-3 col-span-4 aspect-[19/9] w-full bg-stone-900">
                        <p className="h-full whitespace-break-spaces break-words mb-5">
                            {currentOperation? previousValue : currentValue} {currentOperation?.symbol} {currentOperation? currentValue : ''}
                        </p>
                    </div>
                    <div className="absolute right-[-30px] w-[30px] flex flex-col bg-stone-50 items-center justify-center gap-3 py-3 rounded-r-lg">
                        <span className="w-[20px] cursor-pointer bg-red-500 hover:bg-red-600 aspect-square rounded-full"></span>
                        <span className="w-[20px] cursor-pointer bg-blue-500 hover:bg-blue-600 aspect-square rounded-full"></span>
                        <span className="w-[20px] cursor-pointer bg-yellow-500 hover:bg-yellow-600 aspect-square rounded-full"></span>
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
