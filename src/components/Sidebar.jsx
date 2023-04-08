import { categories } from '../assets';
import { CategoryItem } from './';


export const Sidebar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <aside className="md:fixed md:left-0 py-1 overflow-x-auto md:w-48 md:h-[calc(100vh-80px)] md:mt-8 overflow-hidden">
            <ul className="flex md:gap-10 md:flex-col overflow-y-auto">
                {categories.map((category, index) => (
                    <CategoryItem key={index} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                ))}
            </ul>
        </aside>
    )
}