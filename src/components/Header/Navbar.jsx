

export default function Navbar() {
  
  return (
    <div className='relative rounded-xl overflow-hidden w-full'>
            <input
                type="text"
                placeholder="Search..."
                className="border border-blue-500 rounded-xl w-full  py-1 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* selection */}
            <div className="absolute right-0 top-0">
            <select className=" h-full bg-white border-l-2 border-blue-500 pl-2 pr-8 focus:outline-none">
                <option value="all">All</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
            </select>
            <button className="  border border-blue-500 px-3 py-1 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
            </button>
            </div>
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
