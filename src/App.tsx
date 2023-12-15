import { useLocation, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
  
import Header from './components/base/Header';
import MainPage from './components/mainpage/MainPage';
import Calculator from './components/calculator/Calculator';
import Footer from './components/base/Footer';

import { LinkData } from './types';

const myLinks: LinkData[] = [
	{ title: 'My LinkedIn', value: 'https://www.linkedin.com/in/javier-liñán-manzanero-935194225/' },
	{ title: 'My GitHub', value: 'https://github.com/javierlnmn' },
]

const App = (): JSX.Element => {

	const location = useLocation();

	return (
		<>
			<main className="font-noto-sans min-h-screen text-gray-200 bg-stone-900">

				<Header
					links={myLinks}
					location={location}
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
