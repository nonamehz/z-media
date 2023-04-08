import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChannelDetail, Feed, Header, SearchFeed, VideoDetail } from '../components';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </BrowserRouter>
    )
}