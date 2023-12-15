import { DevTechnology } from '../../types.d';

import nodeJSLogo from '../../assets/node-js.svg';
import reactLogo from '../../assets/react.svg';
import tailwindJSLogo from '../../assets/tailwind.svg';
import typescriptLogo from '../../assets/typescript.svg';
import viteLogo from '../../assets/vite.svg';
import framerMotionLogo from '../../assets/framer-motion.svg';

import transition from "../../transition";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import OverlayTechnologyCard from './OverlayTechnologyCard';

const MainPage = (): JSX.Element => {

    const [selectedTechnology, setSelectedTechnology] = useState<DevTechnology | undefined>();

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

    // Names must be unique in order for the animation to work
    const technologiesUsed: DevTechnology[] = [
        { 
            name: 'Vite',
            logo: viteLogo,
            description: `Vite is a modern build tool for web development that focuses on providing a fast and efficient development experience. It is designed for building JavaScript and TypeScript applications, particularly for frameworks like Vue and React. Vite's key feature is its ability to leverage native ES module imports during development, resulting in rapid, near-instantaneous hot module replacement (HMR). This makes the development server extremely fast, contributing to a smoother development workflow.`
        },
        {
            name: 'Typescript',
            logo: typescriptLogo, 
            description: `TypeScript is a superset of JavaScript that adds static typing to the language. It enables developers to catch potential errors early in the development process and enhances code readability and maintainability. TypeScript compiles down to plain JavaScript, allowing developers to use the latest ECMAScript features while providing tools for type checking, interfaces, and other advanced features. It is widely adopted in large-scale web applications and projects to ensure robustness and scalability.`
        },
        {
            name: 'Tailwind CSS',
            logo: tailwindJSLogo ,
            description: `Tailwind CSS is a utility-first CSS framework that simplifies the process of building modern and responsive user interfaces. Unlike traditional frameworks with predefined components, Tailwind provides low-level utility classes that can be composed to create custom designs. This approach allows for flexibility and scalability while minimizing the need to write custom CSS. Tailwind's utility classes cover a wide range of styling properties, making it a popular choice for developers aiming for both efficiency and customization in their styling workflows.`
        },
        {
            name: 'React',
            logo: reactLogo ,
            description: `React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It follows a component-based architecture, allowing developers to create reusable UI components that update efficiently in response to changes in application state. React's virtual DOM optimizes rendering performance, and its declarative syntax simplifies the process of building complex UIs. React is often used in conjunction with other libraries and tools to create single-page applications (SPAs) and is a key player in the ecosystem of modern web development.`
        },
        {
            name: 'Node JS',
            logo: nodeJSLogo,
            description: `Node.js is a server-side JavaScript runtime built on the V8 JavaScript engine. It allows developers to run JavaScript on the server, enabling the development of scalable and high-performance web applications. Node.js is event-driven and non-blocking, making it well-suited for handling concurrent connections. It has a large ecosystem of packages and modules available through npm (Node Package Manager), making it a popular choice for building server-side applications, APIs, and real-time applications.`
        },
        {
            name: 'Framer Motion',
            logo: framerMotionLogo,
            description: `Framer Motion is a popular animation library for React applications that simplifies the creation of fluid and interactive user interfaces. Developed with a focus on declarative syntax and ease of use, Framer Motion empowers developers to add animations and gestures to their React components seamlessly. Key features include a straightforward API for common animations, support for both CSS and SVG properties, and a rich set of motion controls.`
        }
    ]

	return (
		<>
            <div className='my-0 grid lg:grid-cols-2 grid-cols-1 gap-10'>

                <div className='flex flex-col gap-7 w-11/12 max-w-full lg:max-w-2xl mx-auto lg:ml-auto lg:mr-0'>
                    <h1 className="text-5xl font-black text-left mt-12"><span className='text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>React</span>Calc</h1>
                    <p className='text-m font-[300]'>
                        <span className='text-xl font-[700] text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>ReactCalc</span> is not your ordinary calculator. It's a sleek and modern web application that allows&nbsp;
                        you to perform basic arithmetic operations with ease. What sets it apart is that it's built using&nbsp;
                        <span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-cyan-400">TypeScript</span> and <span className="font-bold text-gradient bg-gradient-to-r from-blue-500 to-emerald-400">React</span>, alongside with <span className="font-bold text-gradient bg-gradient-to-r from-blue-600 to-blue-400">Tailwind</span>, making it a fantastic playground to understand the magic of these cutting-edge
                        technologies.
                    </p>

                    <Link to='calculator/' className='transition-all font-black lg:mt-auto cursor-pointer text-center lg:ml-auto py-4 px-5 hover:py-5 hover:px-6 border-[1px] border-stone-600 bg-stone-50 hover:border-blue-400 text-gradient bg-gradient-to-r hover:from-blue-500 hover:to-emerald-400 text-lg rounded-md' >See Calculator</Link>

                </div>

                <div className='lg:min-h-[500px] min-h-[300px] flex items-center justify-center overflow-hidden w-full h-full relative'>
                    <p className='absolute overflow-hidden text-9xl rotate-45 opacity-25 font-black mt-20 text-justify scale-150 text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>{generateRandomExpression()}</p>
                </div>

            </div>

            <div className='mt-12 max-w-[1380px] w-11/12 mx-auto'>

                <h3 className='text-5xl font-black text-left my-12'>Technology Stack:</h3>

                <div className='flex flex-wrap justify-between gap-3'>

                    <AnimatePresence>
                        {technologiesUsed.map((technology) => (
                            <motion.div
                                key={technology.name}
                                layoutId={`card-container-${technology.name}`}
                                onClick={() => setSelectedTechnology(technology)}
                                className='w-full lg:w-auto lg:px-48 whitespace-nowrap py-14 flex-grow-[1] bg-stone-800 cursor-pointer shadow-md flex items-center justify-center gap-5'
                            >
                                <motion.p layoutId={`card-container-${technology.name}-name`} className='font-bold text-xl'>{technology.name}</motion.p>
                                <motion.img layoutId={`card-container-${technology.name}-image`} className='min-w-[30px] h-auto' src={technology.logo} alt="Technology logo" />
                            </motion.div>
                        ))}
                    
                        {selectedTechnology &&
                            <OverlayTechnologyCard
                                key="item"
                                technology={selectedTechnology}
                                handleClick={() => setSelectedTechnology(undefined) }
                            /> 
                        }
                    </AnimatePresence>

                </div>

            </div>
		</>
	); 
}

export default transition(MainPage);
