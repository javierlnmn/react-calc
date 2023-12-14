import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
  
import Header from './components/Header';
import MainPage from './components/MainPage';
import Calculator from './components/calculator/Calculator';
import Footer from './components/Footer';

import { ExternalLink } from './types';

const myLinks: ExternalLink[] = [
	{ name: 'My LinkedIn', value: 'https://www.linkedin.com/in/javier-liñán-manzanero-935194225/' },
	{ name: 'My GitHub', value: 'https://github.com/javierlnmn' },
]

const App = (): JSX.Element => {

	const location = useLocation();

	return (
		<>
			<main className="font-noto-sans min-h-screen text-gray-200 bg-stone-900">

				<Header
					links={myLinks}
				/>

				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<MainPage />} />
						<Route path='calculator' element={<Calculator />} />
					</Routes>
				</AnimatePresence>

				<Footer
					links={myLinks}
				/>
			</main>

		</>
	);
}

export default App;
