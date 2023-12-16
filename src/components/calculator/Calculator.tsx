import { useState } from "react";

import CalculatorButton from "./CalculatorButton";
import { CalculatorButtonTheme } from "./CalculatorButtonTheme.d";
import { CalculatorButtonProps } from "./CalculatorButton";

import { Operation } from "src/types";

import transition from "./../../transition";
import { CalculatorTheme } from "./CalculatorTheme";

const Calculator = (): JSX.Element => {

    const themes: CalculatorTheme[] = [
        {
            name: 'Initial Theme',
            screenBgTailwindProperty: 'bg-stone-900',
            screenTextTailwindProperty: 'text-stone-50',
            primaryButtonTheme: CalculatorButtonTheme.Gray,
            secondaryButtonTheme: CalculatorButtonTheme.Light,
            tertiaryButtonTheme: CalculatorButtonTheme.Blue,
            themeButtonBgTailwindProperty: 'bg-stone-500',
        },
        {
            name: 'Red Theme',
            screenBgTailwindProperty: 'bg-red-900',
            screenTextTailwindProperty: 'text-stone-50',
            primaryButtonTheme: CalculatorButtonTheme.Red,
            secondaryButtonTheme: CalculatorButtonTheme.Light,
            tertiaryButtonTheme: CalculatorButtonTheme.DarkRed,
            themeButtonBgTailwindProperty: 'bg-red-600',
        },
        {
            name: 'Blue Theme',
            screenBgTailwindProperty: 'bg-blue-900',
            screenTextTailwindProperty: 'text-blue-100',
            primaryButtonTheme: CalculatorButtonTheme.Blue,
            secondaryButtonTheme: CalculatorButtonTheme.Yellow,
            tertiaryButtonTheme: CalculatorButtonTheme.Light,
            themeButtonBgTailwindProperty: 'bg-blue-600',
        },
        {
            name: 'Yellow Theme',
            screenBgTailwindProperty: 'bg-stone-900',
            screenTextTailwindProperty: 'text-stone-50',
            primaryButtonTheme: CalculatorButtonTheme.Gray,
            secondaryButtonTheme: CalculatorButtonTheme.Orange,
            tertiaryButtonTheme: CalculatorButtonTheme.Yellow,
            themeButtonBgTailwindProperty: 'bg-orange-500',
        },
        {
            name: 'Pink Theme',
            screenBgTailwindProperty: 'bg-stone-100',
            screenTextTailwindProperty: 'text-pink-600',
            primaryButtonTheme: CalculatorButtonTheme.Pink,
            secondaryButtonTheme: CalculatorButtonTheme.Rose,
            tertiaryButtonTheme: CalculatorButtonTheme.DarkRose,
            themeButtonBgTailwindProperty: 'bg-pink-600',
        },
    ];
    
    const [theme, setTheme] = useState<CalculatorTheme>(themes[0]);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [previousValue, setPreviousValue] = useState<number>(0);
    const [currentOperation, setCurrentOperation] = useState<Operation | undefined>();
    const [decimalEnabled, setDecimalEnabled] = useState<boolean>(false);

    const updateCurrentValue = (value: number): void => {
        if (decimalEnabled) {
            const stringCurrentValue = currentValue.toString();

            let [whole, decimal] = stringCurrentValue.split('.');
            const newDecimal = decimal ? decimal + value.toString() : value.toString();
            
            setCurrentValue(parseFloat(`${whole}.${newDecimal}`));

        } else {
            setCurrentValue((currentValue) * 10 + value);
        }
    }
    
    const handleOperator =  (operator: Operation): void => {

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
        
        if (!isDecimal(previousValue)) {
            setDecimalEnabled(false);

        }
        
    }

    const isDecimal = (number: number): boolean => {
        return (number % 1) !== 0;
    }

    const handleDecimal = (): void => {
        if (decimalEnabled || isDecimal(currentValue)) return
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
    }

    const handleResult = (): void => {
        if (!previousValue || !currentOperation) {
            return
        }
        
        setCurrentValue(currentOperation.perform(previousValue, currentValue));
        setPreviousValue(0);
        setCurrentOperation(undefined);
        if (!isDecimal(previousValue)) {
            setDecimalEnabled(false);

        }
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
            symbol: '×',
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
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(7),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "8",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(8),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "9",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(9),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.add.symbol,
            buttonStyle: theme.secondaryButtonTheme,
            handleClick: () => handleOperator(operations.add),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "4",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(4),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "5",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(5),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "6",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(6),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.subtract.symbol,
            buttonStyle: theme.secondaryButtonTheme,
            handleClick: () => handleOperator(operations.subtract),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "1",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(1),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "2",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(2),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: "3",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(3),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.multiply.symbol,
            buttonStyle: theme.secondaryButtonTheme,
            handleClick: () => handleOperator(operations.multiply),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "+/-",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => turnNegative(),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: "0",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => updateCurrentValue(0),
            colStart: "col-start-2",
            colEnd: "col-end-3",
        },
        {
            buttonLabel: ".",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => handleDecimal(),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.divide.symbol,
            buttonStyle: theme.secondaryButtonTheme,
            handleClick: () => handleOperator(operations.divide),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
        {
            buttonLabel: "AC",
            buttonStyle: theme.primaryButtonTheme,
            handleClick: () => clearCalculator(),
            colStart: "col-start-1",
            colEnd: "col-end-2",
        },
        {
            buttonLabel: 'DEL',
            buttonStyle: theme.tertiaryButtonTheme,
            handleClick: () => console.log('click'),
            colStart: 'col-start-2',
            colEnd: 'col-end-3'
        },
        {
            buttonLabel: "=",
            buttonStyle: theme.tertiaryButtonTheme,
            handleClick: () => handleResult(),
            colStart: "col-start-3",
            colEnd: "col-end-4",
        },
        {
            buttonLabel: operations.power.symbol,
            buttonStyle: theme.secondaryButtonTheme,
            handleClick: () => handleOperator(operations.power),
            colStart: "col-start-4",
            colEnd: "col-end-5",
        },
    ];

    return (
        <div className="my-14">
            <div className="flex items-center justify-center w-5/6 max-w-md mx-auto">
                <div className="grid grid-cols-4 h-full w-full my-8 shadow-2xl relative rounded-l-lg text-4xl  min-[489px]:text-5xl">
                    <div className={`p-3 col-span-4 aspect-[19/9] w-full ${theme.screenBgTailwindProperty} ${theme.screenTextTailwindProperty}`}>
                        <p className="h-full whitespace-break-spaces break-words mb-5">
                            {currentOperation? previousValue : currentValue} {currentOperation?.symbol} {currentOperation? currentValue : ''}
                        </p>
                    </div>
                    <div className="absolute right-[-30px] w-[30px] flex flex-col bg-stone-50 items-center justify-center gap-3 py-3 rounded-r-lg">
                        {themes.map((theme, key) => (
                            <span
                                key={key}
                                className={`w-[20px] cursor-pointer aspect-square rounded-full ${theme.themeButtonBgTailwindProperty}`}
                                onClick={() => setTheme(theme)}
                            >
                            </span>
                        ))}
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

export default transition(Calculator);
