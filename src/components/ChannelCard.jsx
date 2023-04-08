import { useNavigate } from 'react-router-dom';


export const ChannelCard = ({ channelDetail, marginTop = '', enabledRedirect = true }) => {

    if (!channelDetail) return 'loading';

    const navigate = useNavigate();

    return (
        <div
            onClick={() => enabledRedirect && navigate(`/channel/${channelDetail?.id?.channelId}`)}
            className={`flex flex-col items-center justify-center h-full text-center text-white gap-y-3 min-w-min ${marginTop} ${enabledRedirect ? "cursor-pointer" : ''}`}
        >
            <img src={channelDetail?.snippet?.thumbnails?.high?.url} alt={`channel-img-${channelDetail?.snippet?.title}`} className="w-48 h-48 overflow-hidden bg-black rounded-full" />
            <h2 className="text-3xl">{channelDetail?.snippet?.title}</h2>
        </div>
    )
}