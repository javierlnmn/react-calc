import { useState } from "react";

import CalculatorButton, { CalculatorButtonProps } from "./CalculatorButton";

import { Operation } from "src/types.d";

import transition from "./../../transition";
import { CalculatorTheme, calculatorThemes } from "./CalculatorTheme.d";

const Calculator = (): JSX.Element => {
    
    const [theme, setTheme] = useState<CalculatorTheme>(calculatorThemes[0]);
    const [currentValue, setCurrentValue] = useState<string>('');
    const [previousValue, setPreviousValue] = useState<string>('');
    const [currentOperation, setCurrentOperation] = useState<Operation | undefined>();
    const [decimalEnabled, setDecimalEnabled] = useState<boolean>(false);

    const updateCurrentValue = (value: number): void => {

        if (currentValue === '0' && value === 0) return;

       
        let insertedValue: string = value.toString();

        // Edge cases
        
        if (currentValue === '0' && value > 0 && !decimalEnabled) {
            setCurrentValue(value.toString());
            return;
        }

        if (currentValue === '' && decimalEnabled) {
            insertedValue = '0';
        }

        if (decimalEnabled && !currentValue.includes('.')) {
            insertedValue = '.' + insertedValue;
        }
        
        setCurrentValue(currentValue + insertedValue);
        
    }
    
    const handleOperator =  (operator: Operation): void => {

        if (!previousValue) {
            setPreviousValue(currentValue);
        }

        if (previousValue && currentOperation) {
            handleResult();
            setCurrentOperation(operator);
        }

        if(!isStringDecimal(currentValue)) {
            setDecimalEnabled(false);
        } else {
            setDecimalEnabled(true);
        }
        
        setCurrentValue('');
        setCurrentOperation(operator);
        
    }

    const isStringDecimal = (value: string): boolean => {
        return value.includes(',');
    }

    const handleDecimal = (): void => {
        if (decimalEnabled || isStringDecimal(currentValue)) return;
        setDecimalEnabled(true);
    }

    const turnNegative = (): void => {
        if (currentValue === '' || currentValue === '0') return;

        if (!currentValue.includes('-')) {
            setCurrentValue('-' + currentValue);
        } else {
            setCurrentValue(currentValue.replace('-', ''));
        }   
    }

    const clearCalculator = (): void => {
        setPreviousValue('');
        setCurrentValue('');
        setCurrentOperation(undefined);
        setDecimalEnabled(false);
    }

    const handleResult = (): void => {
        if (!previousValue || !currentOperation) {
            return
        }
        
        const numericPreviousValue: number = parseFloat(previousValue);
        const numericCurrentValue: number = parseFloat(currentValue);

        const result: string = currentOperation.perform(numericPreviousValue, numericCurrentValue).toString();

        setCurrentValue(result);
        setPreviousValue('');
        setCurrentOperation(undefined);

        if(!isStringDecimal(currentValue)) {
            setDecimalEnabled(false);
        }
    }

    const handleDeleteDigit = (): void => {

        if(!currentValue) return;

        let currentValueSliced = currentValue.slice(0, -1);

        if (currentValueSliced[currentValueSliced.length -1] === '.') {
            currentValueSliced = currentValueSliced.slice(0, -1);
            setDecimalEnabled(false);
        }

       setCurrentValue(currentValueSliced);
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
            handleClick: () => handleDeleteDigit(),
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
                        {calculatorThemes.map((theme, key) => (
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
