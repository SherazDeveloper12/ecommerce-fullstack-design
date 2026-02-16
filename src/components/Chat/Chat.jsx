import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, sendMessage } from '../../store/slices/chat';
export default function Chat(props) {
    const chatMessages = useSelector((state) => state.chat.messages);
    console.log("chats", chatMessages);

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const tempID = useSelector((state) => state.auth.tempID);
    const handlesendmessage = (e) => {
        e.preventDefault();
        const newMessage = {
            message: message,
            senderID: tempID,
        };
        dispatch(sendMessage(newMessage));
        setMessage('');
    }
    return (
        <div className="fixed bottom-0 right-5 w-80 h-96 bg-white shadow-lg z-50 flex flex-col rounded-lg">
            <div className="p-4 border-b border-neutral-300 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Chat Support</h2>
                <X className=' cursor-pointer' onClick={() => props.setChatIsOpen(false)} />
            </div>
            <div className="flex-1 p-4 max-h-66 bg-neutral-100 mx-4    flex flex-col gap-2  overflow-y-scroll ">

                {chatMessages.map((msg) => (
                    <div key={msg._id} 
                    className={`  p-2 rounded flex w-[90%] self-end flex-col gap-1 ${msg.senderID === tempID ? 'self-end bg-white' : 'self-start bg-green-100'}`}>
                        <div><p className="text-sm">{msg.message}</p></div>
                        <div className='flex justify-end '>

                            <p className="text-xs text-gray-500">
                                {(() => {
                                    const hoursAgo = Math.floor((Date.now() - new Date(msg.createdAt).getTime()) / (1000 * 60 * 60));

                                    if (hoursAgo < 1) {
                                        const minutesAgo = Math.floor((Date.now() - new Date(msg.createdAt).getTime()) / (1000 * 60));
                                        return `${minutesAgo} minutes ago`;
                                    } else if (hoursAgo < 24) {
                                        return `${hoursAgo} hours ago`;
                                    } else {
                                        const daysAgo = Math.floor(hoursAgo / 24);
                                        return `${daysAgo} days ago`;
                                    }
                                })()}

                            </p> </div>
                    </div>
                ))}
            </div>
            <div className=' py-2 mx-4  '>
                <form onSubmit={(e) => handlesendmessage(e)}
                    className='flex items-center gap-2'>
                    <input type="text" required placeholder="Type your message..." className="flex-1 w-full p-2 border rounded" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button

                        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Send</button>
                </form>
            </div>
        </div>
    )
}
