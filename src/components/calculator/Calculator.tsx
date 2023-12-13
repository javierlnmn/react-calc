import { useState } from "react";

import CalculatorButton from "./CalculatorButton";

import { CalculatorButtonTheme } from "./CalculatorButtonTheme.d"

const Calculator = (): JSX.Element => {

    const [currentValue, setCurrentValue] = useState(0);

    const fillNumber = (value: number): number => {
        console.log('clicking: ',)
        return value;
    }

    return (
        <div className="my-14 bg-stone-700">
            <div className="flex items-center justify-center w-11/12 max-w-lg mx-auto">
                <div className="grid grid-cols-4 h-full w-full my-8 shadow-2xl">
                    <div className="p-3 col-span-4 min-h-[200px] bg-stone-900 text-8xl">
                        <p className="h-full whitespace-break-spaces break-words mb-5">{currentValue}</p>
                    </div>
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'7'}
                        handleClick={() => fillNumber(7)}
                        colStart={'col-start-1'}
                        colEnd={'col-end-2'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'8'}
                        handleClick={() => fillNumber(8)}
                        colStart={'col-start-2'}
                        colEnd={'col-end-3'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'9'}
                        handleClick={() => fillNumber(9)}
                        colStart={'col-start-3'}
                        colEnd={'col-end-4'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Light}
                        buttonLabel={'+'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-4'}
                        colEnd={'col-end-5'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'4'}
                        handleClick={() => fillNumber(4)}
                        colStart={'col-start-1'}
                        colEnd={'col-end-2'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'5'}
                        handleClick={() => fillNumber(5)}
                        colStart={'col-start-2'}
                        colEnd={'col-end-3'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'6'}
                        handleClick={() => fillNumber(6)}
                        colStart={'col-start-3'}
                        colEnd={'col-end-4'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Light}
                        buttonLabel={'-'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-4'}
                        colEnd={'col-end-5'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'1'}
                        handleClick={() => fillNumber(1)}
                        colStart={'col-start-1'}
                        colEnd={'col-end-2'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'2'}
                        handleClick={() => fillNumber(2)}
                        colStart={'col-start-2'}
                        colEnd={'col-end-3'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'3'}
                        handleClick={() => fillNumber(3)}
                        colStart={'col-start-3'}
                        colEnd={'col-end-4'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Light}
                        buttonLabel={'×'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-4'}
                        colEnd={'col-end-5'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'AC'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-1'}
                        colEnd={'col-end-2'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'0'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-2'}
                        colEnd={'col-end-3'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Gray}
                        buttonLabel={'.'}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-3'}
                        colEnd={'col-end-4'}
                    />
                    <CalculatorButton
                        buttonStyle={CalculatorButtonTheme.Orange}
                        buttonLabel={'='}
                        handleClick={() => fillNumber(9)} // This sould be a calculus
                        colStart={'col-start-4'}
                        colEnd={'col-end-5'}
                    />                    
                </div>
            </div>
        </div>
    );

}

export default Calculator;