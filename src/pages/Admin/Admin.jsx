import { useNavigate } from 'react-router';

export default function Admin() {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
        <h2 className='font-bold text-4xl'>Continue to Dashboard</h2>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer' onClick={()=>navigate("/admin/dashboard")}>Go to Dashboard</button>
    </div>
  )
}
