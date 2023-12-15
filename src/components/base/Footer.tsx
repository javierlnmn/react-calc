import { LinkData } from "../../types";

interface Props {
    links: LinkData[];
}

const Footer = ({ links }: Props): JSX.Element => {

	return (
		<footer className='mt-5 flex items-center px-4 h-[50px] bg-stone-800 shadow-sm relative z-10'>

            <div className='flex items-center w-full max-w-[1380px] mx-auto'>
                <p className='text-xl font-[700] text-gradient bg-gradient-to-r from-blue-500 to-emerald-400'>ReactCalc</p>
                <nav className='flex gap-4 ml-auto'>
                    {links.map((link: LinkData, index: number) => (
                        <a key={index} target="_blank" className='transition-colors hover:text-amber-500' href={link.value}>{link.title}</a>
                    ))}
                </nav>
            </div>
            
		</footer>
	);

}

export default Footer;