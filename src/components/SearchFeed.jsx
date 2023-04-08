import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Videos } from './';
import { fetchApi } from '../api/fetchApi';


export const SearchFeed = () => {

    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchApi(`search?part=snippet&maxResults=50&q=${searchTerm}`)
            .then(data => setVideos(data.items))
            .catch(console.log);
    }, [searchTerm]);

    return (
        <section className="">
            <p className="px-5 my-5 mt-5 text-2xl font-bold text-white">Search Results for: <span className="text-[#FF0000]">{searchTerm}</span></p>
            <Videos videos={videos} />
        </section>
    )
}