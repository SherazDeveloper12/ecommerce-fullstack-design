

export default function Navbar() {

    return (
        <div className=' border border-blue-500 rounded-xl  relative rounded-xl flex items-center overflow-hidden'>
            <input
            disabled
                type="text"
                placeholder="Search..."
                className="flex-1 py-1 px-4 pl-10 border-r border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <select className=" bg-white   px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Categories</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
            </select>
            <button className="  border border-blue-500 px-3 py-1.5 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
            </button>

            <svg
                className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
            </svg>

        </div>
    )
}
