import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../store/slices/auth';
import { Toaster, toast } from 'sonner';
import { User } from 'lucide-react';
export default function AdminProfile() {
    const { user , token, status, error} = useSelector((state) => state.auth);
    const [Username, setUsername] = useState(user?.username || '');
    const [Email, setEmail] = useState(user?.email || '');
    const [Password, setPassword] = useState(user?.password || '');
    const [ProfilePic, setProfilePic] = useState(user?.profilePic || '');
    useEffect(() => {
        if (status === 'succeeded') {
            toast.dismiss();
            toast.success('Profile updated successfully!');
        }
        else if (status === 'loading') {
            toast.loading('Updating profile...');
        }   
        else if (status === 'failed') {
            toast.dismiss();
            toast.error(`${error}`);
        }
    }, [status, error]);
    const dispatch = useDispatch();
    const handlesubmit = (e) => {
        e.preventDefault();
        const updatedProfile = {
            username: Username,
            email: Email,
            password: Password,
            profilePic: ProfilePic
        };
        console.log(updatedProfile);
        dispatch(updateProfile({ token, profileData: updatedProfile, id: user._id }));
    
    }
    const handlechange = async (e) => {
        try {
            const data = new FormData();
            data.append("file", e.target.files[0]);
            data.append("upload_preset", "image_uploader_preset");
            data.append("cloud_name", "dcli1vwir");

            const response = await fetch("https://api.cloudinary.com/v1_1/dcli1vwir/image/upload", {
                method: "post",
                body: data
            })
            const json = await response.json();
            const url = json.url;
            setProfilePic(url);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='flex flex-col w-full p-4'>
           <Toaster position="top-right" richColors />
            <h2 className='text-xl font-semibold text-gray-400'>Profile Settings</h2>
            <div className='mt-4 bg-white shadow rounded-lg p-4 w-full'>
                <form className='flex flex-col gap-4 w-full' onSubmit={handlesubmit}>
                    {/* image */}
                    <div className='flex flex-col gap-1'>
                        <label  className='text-sm text-gray-500'>Profile Image</label>
                        <label
                            htmlFor="ProfileImage"
                            className='border border-gray-300 rounded-full p-2 w-40 h-40 m-auto cursor-pointer flex justify-center items-center text-center text-gray-500'
                        >
                            {ProfilePic ? <img src={ProfilePic} alt="Profile" className="w-40 h-40 rounded-full object-cover" /> : <User size={70} />}
                        </label>
                        <input
                            type="file"
                            id="ProfileImage"
                            onChange={handlechange}
                            className='border border-gray-300 rounded p-2 w-full hidden' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm text-gray-500'>Username</label>
                        <input required type="text" onChange={(e) => setUsername(e.target.value)} className='border border-gray-300 rounded p-2 w-full' placeholder='i.e John fin' value={Username} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm text-gray-500'>Email</label>
                        <input required type="email" onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 rounded p-2 w-full' placeholder='example@gmail.com' value={Email} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm text-gray-500'>Password</label>
                        <input required value={Password} onChange={(e) => setPassword(e.target.value)} type="password" className='border border-gray-300 rounded p-2 w-full' placeholder='example@12' />
                    </div>
                    <button type='submit' className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded  mt-4'>Update Profile</button>
                </form>
            </div>
        </div>
    )
}
