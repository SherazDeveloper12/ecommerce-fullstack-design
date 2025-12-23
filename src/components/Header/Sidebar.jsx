

export default function Sidebar() {
    const Links = [
        { name: "Home", route: "/" },
        { name: "Your Orders", route: "/your-orders" },
        { name: "Find Dhobi", route: "/find-dhobi" },
        { name: "Become a Dhobi", route: "/become-dhobi" },
        { name: "Become a Rider", route: "/become-rider" },
      
    ];
  return (
    <div className='flex flex-col items-center  bg-foreground absolute top-13 min-h-screen right-0 w-full border-t border-textSecondary md:hidden '>
       {Links.map((link) => (
               <li key={link.name}  className='border-b p-2 w-full flex justify-center items-center text-textSecondary hover:text-textColor cursor-pointer transition duration-300 ease-in-out '>
                    {link.name}
                </li>
            ))}
    </div>
  )
}
