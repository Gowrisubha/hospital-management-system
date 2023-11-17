import React, { useState } from 'react'

import styless from './ChatBot.css'

import ChatMessage from './ChatMessage';
import { analyze } from './Utils';
import { Link } from "react-router-dom";


const ChatBot = () => {
    const [messages, setMessages]=useState([
        {
            message: 'Hello and welcome to our Healthbot! 👋 How can I assist you today?'
        }
    ])
    const[text,setText]=useState('');
    const onSend=()=>{
        let list =[...messages, {message: text, user: true}];
        if(list.length>2){
            const reply=analyze(text)
            list =[...list,
                
                {message:reply}
            ]

        }
        else{
            list=[
                ...list,
                {
                    message: `Do you feel any other symptoms. Is there any pain while intaking food?`,
                }
            ];
        }
        setMessages(list)
        setText("")
        setTimeout(()=>{
            document.querySelector("#copyright").scrollIntoView();
        },1);
    }
  return (
    <>
    {/* <div className='container' style={styless}> */}
    <div className='top_container' style={styless}>

        <div className='d-flex  align-items-center justify-content-center padding-top-20px mb-4'>
           
            <h1 className='text-title'>HealthBot</h1>

        </div>
        <div className='chat_message'>
           { messages.length > 0 && messages.map((data) => <ChatMessage {...data}/>) }
           <div className='d-flex' mt-2>
            <input type='text' className='form-control' value={text} onChange={(e)=> setText(e.target.value)}/>
            <button className='send_button' onClick={onSend}>Send</button>
          
           </div>
           <div id='copyright' className='mt-3'>Please be aware that you have been using our beta version. While we are working hard to provide you with the best healthcare assistance, there may be occasional limitations and improvements in progress.
</div>

        </div>
        </div>
        {/* </div> */}
      
    </>
  )
}

export default ChatBot