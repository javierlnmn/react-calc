import { useState } from "react";

import CalculatorButton from "./CalculatorButton";

const Calculator = (): JSX.Element => {

    const [currentValue , setCurrentValue] = useState(0);
    
    const fillNumber = (value: number): number => {
        console.log('clicking: ', )
        return value;
    }

	return (
		<div className="my-14 bg-stone-700 min-h-[500px]">
            <div className="flex items-center justify-center w-2/4 mx-auto">
                <div className="grid grid-cols-4 w-full my-5">
                    <div className="p-3 col-span-4 min-h-[200px] bg-stone-900 text-8xl">
                        <p className="h-full whitespace-break-spaces break-words mb-5">{currentValue}</p>
                    </div>
                    <CalculatorButton 
                        buttonStyle="white"
                        buttonValue={7}
                        handleClick={() => fillNumber(7)}
                        colStart={1}
                        colEnd={2}
                    />
                    <CalculatorButton 
                        buttonStyle="white"
                        buttonValue={8}
                        handleClick={() => fillNumber(8)}
                        colStart={2}
                        colEnd={3}
                    />
                    <CalculatorButton 
                        buttonStyle="white"
                        buttonValue={9}
                        handleClick={() => fillNumber(9)}
                        colStart={3}
                        colEnd={4}
                    />
                </div>
            </div>
        </div>
	);

}

export default Calculator;