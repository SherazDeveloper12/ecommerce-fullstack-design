import React, { useState } from 'react'

export default function Forget() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const sendOTP = (e) => {
        e.preventDefault();
        const userData = {
            email
        };
        console.log('User Data:', userData);
        setStep(2);
        // Handle sign-up logic here
    }
    const verifyOTP = (e) => {
        e.preventDefault();
        const userData = {
            otp
        };
        console.log('User Data:', userData);
        // Handle sign-up logic here
        setStep(3);
    }
    const ChangePassword = (e) => {
        e.preventDefault();
        const userData = {
            password
        };
        console.log('User Data:', userData);
        // Handle sign-up logic here
    }
    return (
        <div className='flex flex-col justify-center items-center h-full gap-4'>
            <h2 className='font-bold text-4xl text-blue-400'>Forget Password</h2>

            {step === 1 && <>
                <p className=' text-gray-500  w-80'>Please enter your email to reset your password</p>
                <form onSubmit={(e) => sendOTP(e)} className='flex flex-col gap-4 w-80'>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-2 border border-gray-300 rounded focus:outline-blue-400 ' />
                    <button type='submit' className='bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition cursor-pointer'>Send OTP</button>
                </form>
            </>}
            {step === 2 && <>
                <p className=' text-green-500  w-80'>An OTP has been sent to your email</p>
                <form onSubmit={(e) => verifyOTP(e)} className='flex flex-col gap-4 w-80'>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='OTP' className='p-2 border border-gray-300 rounded focus:outline-blue-400 ' />
                    <button type='submit' className='bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition cursor-pointer'>Verify OTP</button>
                </form>
            </>}
            {step === 3 && 
            <>
            <p className=' text-gray-600  w-80'>Please Enter Your New Password</p>
            <form onSubmit={(e) => ChangePassword(e)} className='flex flex-col gap-4 w-80'>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 border border-gray-300 rounded focus:outline-blue-400 ' />
                    <button type='submit' className='bg-blue-400 text-white p-2 rounded hover:bg-blue-500 transition cursor-pointer'>Change Password</button>
                </form>
            </>}

        </div>
    )
}
