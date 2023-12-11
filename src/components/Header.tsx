import { ExternalLink } from "../types";

interface Props {
    links: ExternalLink[];
}

const Header: React.FC<Props> = ({ links }) => {

	return (
		<header className='flex items-center px-4 h-[50px] bg-stone-800 shadow-sm relative z-10'>

            <nav className='flex gap-4'>
                {links.map((link: ExternalLink, index: number) => (
                    <a key={index} target="_blank" className='transition-colors hover:text-amber-500' href={link.value}>{link.name}</a>
                ))}
            </nav>

            <a className='ml-auto py-1 px-4 border-[1px] border-stone-600 hover:bg-stone-700 hover:shadow-lg hover:text-stone-100 transition-all cursor-pointer rounded-md' >See Calculator</a>

		</header>
	);

}

export default Header;