import { useEffect, useState } from 'react';
import { icons } from '../assets';
import { useNavigate } from 'react-router-dom';


export const SearchField = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onSearch = (event) => {
        event.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <form
            onSubmit={onSearch}
            className="flex items-center relative lg:w-[700px] text-white bg-[#2C2C32] px-5 py-1 rounded-2xl">
            <input
                className="bg-[#2C2C32] mr-5 text-sm flex-1 lg:p-1 md:text-md outline-none"
                type="text"
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search"
                required={true}
            />
            <button className="absolute right-0 flex items-center justify-center w-10 h-full rounded-full">{icons.search}</button>
        </form>
    )
}