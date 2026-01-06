import { ImagePlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { data } from 'react-router';




export default function ImageUploader() {

    const [image, setImage] = useState(null);
    console.log(image);
    const handlechange = async(e) => {
        console.log("handle changed called", e.target.files[0]);
        
         try {
           let  data = {
                file: e.target.files[0],
                upload_preset: "image_uploader_preset",
                cloud_name: "dcli1vwir"
            }
            const response = await fetch("https://api.cloudinary.com/v1_1/dcli1vwir/image/upload", {
                method: "post",
                body: data
            })
            const json = await response.json();
            
            console.log(json.url);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    const uploadclickhandler = async (e) => {
        
       
    }

    return (
        <div>
            <label htmlFor="imageuploader" className=' text-gray-400 flex flex-col justify-center items-center border-dashed border-2 border-gray-300 py-24 rounded cursor-pointer bg-white hover:border-black hover:text-black transition-all duration-300'>
                <ImagePlusIcon className='size-24' />
                <p className='text-xl'>Upload Image here</p>
            </label>
            <input type="file" accept="image/*" name='imageuploader' id="imageuploader" className='hidden bg-red-600' onChange={(e)=>handlechange(e)} />
        </div>
    )
}
