// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Calculator from './components/calculator/Calculator';
import Footer from './components/Footer';

import { ExternalLink, DevTechnology } from './types';

import nodeJSLogo from './assets/node-js.svg';
import reactLogo from './assets/react.svg';
import tailwindJSLogo from './assets/tailwind.svg';
import typescriptLogo from './assets/typescript.svg';
import viteLogo from './assets/vite.svg';

const myLinks: ExternalLink[] = [
	{ name: 'My LinkedIn', value: 'https://www.linkedin.com/in/javier-liñán-manzanero-935194225/' },
	{ name: 'My GitHub', value: 'https://github.com/javierlnmn' },
]

const technologiesUsed: DevTechnology[] = [
	{ name: 'Vite', logo: viteLogo  },
	{ name: 'Typescript', logo: typescriptLogo  },
	{ name: 'Tailwind CSS', logo: tailwindJSLogo  },
	{ name: 'React', logo: reactLogo  },
	{ name: 'Node JS', logo: nodeJSLogo  },
]

const App = (): JSX.Element => {

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
			<main className="font-noto-sans min-h-screen text-gray-200 bg-stone-900">

				<Header
					links={myLinks}
				/>

				<div className='my-0 grid lg:grid-cols-2 grid-cols-1 gap-10'>

					<div className='flex flex-col gap-7 w-11/12 max-w-full lg:max-w-2xl mx-auto lg:ml-auto lg:mr-0'>
						<h1 className="text-5xl font-black text-left mt-12"><span className='text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>React</span>Calc</h1>
						<p className='text-m font-[300]'>
							<span className='text-xl font-[700] text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>ReactCalc</span> is not your ordinary calculator. It's a sleek and modern web application that allows&nbsp;
							you to perform basic arithmetic operations with ease. What sets it apart is that it's built using&nbsp;
							<span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-400">TypeScript</span> and <span className="font-bold text-gradient bg-gradient-to-r from-blue-500 to-emerald-400">React</span>, alongside with <span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-blue-400">Tailwind</span>, making it a fantastic playground to understand the magic of these cutting-edge
							technologies.
						</p>

						<a className='transition-all font-black lg:mt-auto cursor-pointer text-center lg:ml-auto py-4 px-5 hover:py-5 hover:px-6 border-[1px] border-stone-600 bg-stone-50 hover:border-blue-400 text-gradient bg-gradient-to-r hover:from-blue-500 hover:to-emerald-400 text-lg rounded-md'>See Calculator</a>

					</div>

					<div className='lg:min-h-[500px] min-h-[300px] flex items-center justify-center overflow-hidden w-full h-full relative'>
						<p className='absolute overflow-hidden text-9xl rotate-45 opacity-25 font-black mt-20 text-justify scale-150 text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>{generateRandomExpression()}</p>
					</div>

				</div>

				<div className='mt-12 max-w-[1380px] w-11/12 mx-auto'>

					<h3 className='text-5xl font-black text-left my-12'>Technologies used:</h3>

					<div className='flex flex-wrap justify-between gap-3'>

						{technologiesUsed.map((technology, key) => (
							<div key={key} className='transition-all w-full lg:w-auto hover:px-52 whitespace-nowrap py-14 px-48 flex-grow-[1] bg-stone-800 flex items-center justify-center gap-5'>
								<p className='font-bold text-xl'>{technology.name}</p>
								<img className='min-w-[30px] h-auto' src={technology.logo} alt="Technology logo" />
							</div>
						))}
					
					</div>

				</div>

				<Calculator />

				<Footer
					links={myLinks}
				/>
			</main>
		</>
	);
}

export default App;
