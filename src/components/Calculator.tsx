
const Calculator = (): JSX.Element => {

	return (
		<div className="my-14 bg-stone-700 min-h-[500px]">
            <div className="flex items-center justify-center w-2/4 mx-auto">
                <div className="grid grid-cols-4 w-full my-5">
                    <div className="p-3 col-span-4 min-h-[200px] bg-stone-900 text-8xl">
                        <p className="h-full whitespace-break-spaces break-words mb-5">0</p>
                    </div>
                    <div className="p-3 col-span-1 min-h-[100px] bg-stone-100">
                        <button className="h-full w-full whitespace-break-spaces break-words mb-5">0</button>
                    </div>
                    <div className="p-3 col-span-1 min-h-[100px] bg-stone-100">
                        <button className="h-full w-full whitespace-break-spaces break-words mb-5">0</button>
                    </div>
                    <div className="p-3 col-span-1 min-h-[100px] bg-stone-100">
                        <button className="h-full w-full whitespace-break-spaces break-words mb-5">0</button>
                    </div>
                </div>
            </div>
        </div>
	);

}

export default Calculator;