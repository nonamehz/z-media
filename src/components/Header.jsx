import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { SearchField } from './SearchField';


export const Header = () => {
    return (
        <header className="md:sticky md:top-0 bg-[#17171E] z-50 h-20 py-5 px-5 flex justify-between items-center">
            <Link
                to="/"
                className="flex items-center text-white w-9">
                <img
                    src={logo}
                    alt="logo app"
                />
                <span className="hidden pl-2 text-lg font-bold uppercase md:block">Media</span>
            </Link>
            <SearchField />
        </header>
    )
}