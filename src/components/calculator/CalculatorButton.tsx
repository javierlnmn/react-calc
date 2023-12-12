interface Props {
    buttonStyle: string;
    buttonValue: number;
    onClick: Function;
  }

const CalculatorButton = ({ buttonStyle, buttonValue, onClick }: Props): JSX.Element => {
    return (
        <div className="p-3 col-span-4 min-h-[200px] bg-stone-900 text-8xl">
            <p className="h-full whitespace-break-spaces break-words mb-5">0</p>
        </div>
    );
};

export default CalculatorButton;
