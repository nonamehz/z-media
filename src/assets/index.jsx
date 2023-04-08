import logo from './logo.png';
import videoPlaceholder from './video-placeholder.png';
import { RiHome4Line, RiCodeSSlashFill, RiBallPenFill, RiFootballFill, RiMusic2Fill, RiClapperboardLine, RiReactjsFill, RiGamepadFill } from 'react-icons/ri';

const icons = {
    search: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
    </svg>,
}

const categories = [
    {
        name: 'New',
        icon: <RiHome4Line />
    },
    {
        name: 'React JS',
        icon: <RiReactjsFill />
    },
    {
        name: 'Code',
        icon: <RiCodeSSlashFill />
    },
    {
        name: 'Education',
        icon: <RiBallPenFill />
    },
    {
        name: 'Sport',
        icon: <RiFootballFill />
    },
    {
        name: 'Music',
        icon: <RiMusic2Fill />
    },
    {
        name: 'Entertainment',
        icon: <RiClapperboardLine />
    },
    {
        name: 'Games',
        icon: <RiGamepadFill />
    },
]

export {
    logo,
    videoPlaceholder,
    icons,
    categories,
}