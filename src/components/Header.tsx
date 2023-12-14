import { Link, Location } from "react-router-dom";

import { LinkData } from "../types";
import { useEffect, useState } from "react";

interface Props {
    links: LinkData[],
    location: Location,
}

const Header = ({ links, location }: Props): JSX.Element => {

    const [buttonData, setButtonData] = useState<LinkData>({
        title: 'See Calculator',
        value: 'calculator/'
    })

    useEffect(() => {
        if (location.pathname === '/calculator/') {
            setTimeout(() => {
                setButtonData({
                    title: 'Back to Main',
                    value: '/'
                });
            }, 1000);
    } else {
            setTimeout(() => {
                setButtonData({
                    title: 'See Calculator',
                    value: 'calculator/'
                });
            }, 1000);
        }
    }, [location.pathname]);

	return (
		<header className='flex items-center px-4 h-[50px] bg-stone-800 shadow-sm relative z-10'>

            <div className='flex items-center w-full max-w-[1380px] mx-auto'>
                <nav className='flex gap-4'>
                    {links.map((link: LinkData, index: number) => (
                        <a key={index} target="_blank" className='transition-colors hover:text-amber-500' href={link.value}>{link.title}</a>
                    ))}
                </nav>

                <Link to={buttonData.value} className='ml-auto py-1 px-4 border-[1px] border-stone-600 hover:bg-stone-700 hover:shadow-lg hover:text-stone-100 transition-all cursor-pointer rounded-md' >{buttonData.title}</Link>
            </div>
            
		</header>
	);

}

export default Header;