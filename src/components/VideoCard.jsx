import { Link } from 'react-router-dom';


export const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <div className="flex flex-col justify-between gap-y-3">
            <Link
                to={`/video/${videoId}`}
            >
                <div className="rounded-2xl overflow-clip">
                    <img src={snippet?.thumbnails?.high?.url} alt={`video-image-${snippet?.title}`} className="w-full" />
                </div>
            </Link>
            <div className="flex items-center justify-between gap-2">
                <Link
                    to={`/video/${videoId}`}
                    className="text-lg font-bold text-white hover:underline line-clamp-2">
                    {snippet?.title}
                </Link>
                <Link
                    to={`/channel/${snippet?.channelId}`}
                    className="text-sm text-[#747478] hover:underline">
                    {snippet?.channelTitle}
                </Link>
            </div>
        </div>
    )
}