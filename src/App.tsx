import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import { ExternalLink } from './types';

const myLinks: ExternalLink[] = [
	{ name: 'LinkedIn', value: 'www.jondoe.com' },
	{ name: 'GitHub', value: 'www.jondoe.com' },
]

const App: React.FC = () => {

	const operators: string[] = ['+', '-', 'x', '/'];
	const numbers: number[] = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10) + 1);

	const generateRandomExpression = ():string => {

		const maxLength = 500;
		let expression = '';

		while (expression.length < maxLength) {
			const number = numbers[Math.floor(Math.random() * numbers.length)];
			const operator = operators[Math.floor(Math.random() * operators.length)];
			expression += `${number} ${operator} `;
		}

		return expression;
	}

	return (
		<>
			<main className="font-noto-sans min-h-screen pb-5 text-gray-200 bg-stone-900">

				<Header
					links={myLinks}
				/>

				<div className='my-0 grid lg:grid-cols-2 grid-cols-1 gap-10'>

					<div className='flex flex-col gap-7 w-11/12 max-w-5xl ml-auto'>
						<h1 className="text-5xl font-[900] text-left mt-12"><span className='text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>React</span>Calc</h1>
						<p className='text-m font-[300]'>
							<span className='text-xl font-[700] text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>ReactCalc</span> is not your ordinary calculator. It's a sleek and modern web application that allows&nbsp;
							you to perform basic arithmetic operations with ease. What sets it apart is that it's built using&nbsp;
							<span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-400">TypeScript</span> and <span className="font-bold text-gradient bg-gradient-to-r from-blue-500 to-emerald-400">React</span>, alongside with <span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-blue-400">Tailwind</span>, making it a fantastic playground to understand the magic of these cutting-edge
							technologies.
						</p>

						<a className='transition-all font-black lg:mt-auto cursor-pointer text-center lg:ml-auto py-4 px-5 hover:py-5 hover:px-6 border-[1px] border-stone-600 bg-stone-50 hover:border-blue-400 text-gradient bg-gradient-to-r hover:from-blue-500 hover:to-emerald-400 text-lg rounded-md'>See Calculator</a>

					</div>

					<div className='lg:min-h-[500px] min-h-[300px] flex items-center justify-center overflow-hidden w-full h-full relative'>
						<p className='absolute overflow-hidden text-9xl rotate-45 opacity-25 font-black mt-20 text-justify scale-150'>{generateRandomExpression()}</p>
					</div>

				</div>
			</main>
		</>
	);
}

export default App;
