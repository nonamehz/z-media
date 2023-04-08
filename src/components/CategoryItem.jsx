

export const CategoryItem = ({ selectedCategory, setSelectedCategory, category: { name, icon } }) => {

    return (
        <li
            onClick={() => setSelectedCategory(name)}
            className={`flex items-center mx-5 text-sm gap-3 cursor-pointer hover:text-[#FF0000] transition-colors ${selectedCategory === name ? "text-[#FF0000]" : "text-[#747478]"}`}
        >
            <span>{icon}</span>
            {name}
        </li>
    )
}