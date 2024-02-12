import { suppliers } from "../../lib/constant"

export default function Suppliers() {
    return (
        <div className='flex flex-col '>
            <h2 className='text-2xl font-bold '>Suppliers by region</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                {suppliers.map((supplier, index) => (
                    <div key={index} className="flex gap-2 items-center ">
                        <div className="w-12">
                            <img src={supplier.img} alt={supplier.name} className="w-full" />
                        </div>
                        <div>
                            <p className="font-semibold">{supplier.name}</p>
                            <p className="text-sm text-gray-500">shopname.{supplier.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
