import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { VideoCard } from './';
import { fetchApi } from '../api/fetchApi';


export const VideoDetail = () => {

    const { id } = useParams();
    const [videoDetail, setVideoDetail] = useState();
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchApi(`videos?part=snippet,statistics&id=${id}`)
            .then(data => setVideoDetail(data?.items[0]))
            .catch(console.log);

        fetchApi(`search?maxResults=50&part=snippet&relatedToVideoId=${id}&type=video`)
            .then(data => setVideos(data?.items))
            .catch(console.log);
    }, [id]);

    useEffect(() => {

        if (videoDetail?.snippet?.channelId) {
            fetchApi(`channels?part=snippet%2Cstatistics&id=${videoDetail?.snippet?.channelId}`)
                .then(data => setChannelDetail(data?.items[0]))
                .catch(console.log);
        }

    }, [videoDetail?.snippet?.channelId]);

    return (
        <div className="flex flex-col lg:h-[calc(100vh-80px)] gap-1 overflow-y-scroll lg:flex-row">
            <div className="h-auto mt-5 overflow-scroll lg:pl-5 lg:flex-[0.8]">
                <div className="h-72 sm:h-96 md:h-[500px] lg:h-[700px] ">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                </div>
                <div className="flex flex-col gap-3 px-5 mt-5">
                    <h3 className="text-2xl font-bold text-white">{videoDetail?.snippet?.title}</h3>
                    <p className="text-sm text-[#747478]">
                        {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                    </p>
                    <div className="border-[#747478] border-y-2 border-x-0 lg:border-b-0 flex py-5 gap-2 items-center">
                        <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt={`channel-img-${channelDetail?.snippet?.title}`} className="self-start w-20 h-20 overflow-hidden bg-black rounded-full" />
                        <div className="flex flex-col flex-1 gap-3 ">
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`} className="self-start text-xl font-bold text-white hover:underline">{channelDetail?.snippet?.title}</Link>
                            <p className="text-sm text-[#747478]">{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} suscribed</p>
                            <p className="hidden lg:block text-sm text-[#747478] mr-10">{videoDetail?.snippet?.description} suscribed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-5 px-5 mt-5 overflow-scroll md:flex-[0.2]">
                <h3 className="text-2xl font-bold text-white">Suggested <span className="text-[#FF0000]">Videos</span></h3>
                <div className='grid grid-cols-1 gap-10 mb-5 md:grid-cols-2 lg:grid-cols-1'>
                    {videos.map((video, index) => (
                        <VideoCard key={index} video={video} />
                    ))}
                </div>
            </div>
        </div>
    )
}