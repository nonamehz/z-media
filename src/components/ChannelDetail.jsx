import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../api/fetchApi';
import { Videos } from './Videos';
import { ChannelCard } from './';


export const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchApi(`channels?part=snippet%2Cstatistics&id=${id}`)
            .then(data => setChannelDetail(data?.items[0]));

        fetchApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
            .then(data => setVideos(data?.items));
    }, [id]);


    return (
        <>
            <div className="h-80 banner"></div>
            <div className="flex flex-col items-center gap-2 px-5 text-white">
                {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop='-mt-24' enabledRedirect={false} />}
                <div className="mt-10">
                    <Videos videos={videos} />
                </div>
            </div>
        </>
    )
}