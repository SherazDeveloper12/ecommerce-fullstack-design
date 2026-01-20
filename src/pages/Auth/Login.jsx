import React, {useState} from 'react'

export default function Login() {
 
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
           
            email,
            password
        };
        console.log('User Data:', userData);
        // Handle sign-up logic here
    }
  return (
    <div className='flex flex-col justify-center items-center h-full gap-4'>
        <h2 className='font-bold text-4xl text-blue-400'>Log In</h2>
        <p className='font-semibold text-gray-500 text-2xl'>Please enter your log in details</p>
        <div className= 'text-left  text-gray-600'>Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Sign Up</a></div>
        <form  onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4 w-80'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-2 border border-gray-300 rounded focus:outline-blue-400 '/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 border border-gray-300 rounded focus:outline-blue-400 '/>
                    <span className='text-gray-600'>Forget your password? <a href="/forget-password" className="text-blue-400 hover:underline">Forget Password</a></span>

            <button type='submit' className='bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition cursor-pointer'>Log In</button>
        </form>
    </div>
  )
}
