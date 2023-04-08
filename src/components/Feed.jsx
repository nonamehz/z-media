import { useEffect, useState } from 'react';
import { Sidebar, Videos } from './'
import { fetchApi } from '../api/fetchApi';



export const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchApi(`search?maxResults=50&part=snippet&q=${selectedCategory}`)
            .then(data => setVideos(data.items))
            .catch(console.log);
    }, [selectedCategory]);

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="w-full md:ml-40 md:mt-5">
                <Videos videos={videos} />
            </div>
        </div>
    )
}