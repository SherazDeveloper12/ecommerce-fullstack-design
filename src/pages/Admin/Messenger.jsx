import { User } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getchatsbyconversationid } from '../../store/slices/admin';
import { sendMessage } from '../../store/slices/chat';

export default function Messenger() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.admin.chats);

  const status = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);
  const conversations = useSelector((state) => state.admin.conversations);

  const recipientIDformessage = chats.length > 0 ? chats[0].senderID === "69843421d30a0ace506d9172" ? chats[0].recipientID : chats[0].senderID : null;
  const handlechatopener = (conversationId) => {
    dispatch(getchatsbyconversationid(conversationId));
  }
  const [message, setMessage] = useState('');
  const handlesendmessage = (e) => {
    e.preventDefault();
    const newMessage = {
      recipientID: recipientIDformessage,
      message: message,
      senderID: "69843421d30a0ace506d9172",
    };

    dispatch(sendMessage(newMessage));
    setMessage('');
  }
    const bottomref = useRef(null);
      const scrollToBottom = () => {
          bottomref.current?.scrollIntoView({ behavior: 'smooth' });
      }
      useEffect(() => {
          scrollToBottom();
      }, [chats]);
  return (
    <div className='flex flex-col h-full p-2 py-4 gap-2 w-full'>
      <h1 className='text-neutral-400 text-2xl font-semibold'>Messenger</h1>
      <div className='bg-white rounded shadow p-2 flex gap-1 w-full h-[75vh] '>
        <div className='flex flex-col w-1/4 border border-neutral-200 h-full '>
          {conversations.map((conversation) => (
            <div
              onClick={() => handlechatopener(conversation._id)}
              className=' flex gap-2 p-2 border border-neutral-200  cursor-pointer hover:bg-neutral-100 transition duration-200' key={conversation._id}>
              <div className='size-15 border border-neutral-400 rounded-full flex justify-center items-center' >
                <User className=' text-neutral-400' size={30} />
              </div>
              <div className='flex-1'>
                <h1>Guest</h1>
                <p>last message</p>
                <div className='flex justify-end text-neutral-400 text-xs '>
                  {(() => {
                    const hoursAgo = Math.floor((Date.now() - new Date(conversation.lastMessageTime).getTime()) / (1000 * 60 * 60));

                    if (hoursAgo < 1) {
                      const minutesAgo = Math.floor((Date.now() - new Date(conversation.lastMessageTime).getTime()) / (1000 * 60));
                      return `${minutesAgo} minutes ago`;
                    } else if (hoursAgo < 24) {
                      return `${hoursAgo} hours ago`;
                    } else {
                      const daysAgo = Math.floor(hoursAgo / 24);
                      return `${daysAgo} days ago`;
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-1 h-full  bg-slate-100 p-2'>
          {status === "loading" && <div className='flex justify-center h-full items-center bg-neutral-50'>Loading chats...</div>}
          {status === "failed" && <div className='flex justify-center h-full  items-center bg-neutral-50'>Error: {error}</div>}
          {status === "idle" && <div className='flex justify-center h-full  items-center bg-neutral-50'>No chats loaded yet.</div>}
          {status === "succeeded" && chats.length === 0 && <div>No chats found for this conversation.</div>}
          {status === "succeeded" && chats.length > 0 && (
            <div className='flex flex-col gap-2 h-full'>
              <div className='flex-1 overflow-y-scroll flex flex-col gap-2 p-2'>
                {chats.map((chat) => (
                  <div key={chat._id} className={`p-2 min-w-54 rounded  ${chat.senderID === '69843421d30a0ace506d9172' ? 'bg-green-100 self-end border border-green-200' : 'bg-white border border-neutral-200  self-start'}`}>
                    <p>{chat.message}</p>
                    <div className='text-neutral-400 text-xs text-right'>
                      {/* get time only */}
                   {
                  new Date(chat.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                   }
                      
                    </div>
                  </div>
                ))}
                 <div ref={bottomref}></div>
              </div>
              <div>
                <form onSubmit={(e) => handlesendmessage(e)} className='flex gap-2 static bottom-0 w-full'>
                  <input type="text" placeholder='Type your message...' className='flex-1 p-2 border rounded bg-white' value={message} onChange={(e) => setMessage(e.target.value)} />
                  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Send</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
