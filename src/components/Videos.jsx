import { Fragment } from 'react';
import { ChannelCard, Spinner, VideoCard } from './';


export const Videos = ({ videos }) => {

    if (!videos) return (
        <Spinner />
    )

    return (
        <main className="grid grid-cols-1 gap-10 px-5 mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                videos?.map((item, index) => (
                    <Fragment key={index}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Fragment>
                ))
            }
        </main>
    )
}