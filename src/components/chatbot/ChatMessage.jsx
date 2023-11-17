import React from 'react'
import {ChatDots, Person }from "react-bootstrap-icons"
import styled from './ChatMessage.css'
import styless from './ChatBot.css'
const ChatMessage = (props) => {
  return (
    <div className='top_container' style={styless}>
    <div className={`d-flex ${props.user && 'justify-content-end'}`} style={styled}>
        {
            props.user ? (
                <span className='message-right'>
                    <span className='message-text'>{props.message}</span>
                  <Person className='message-icon'/>
                </span>
            ) :
            (
                <span className='message-left'>
                    <ChatDots className='message-icon'/>
                    <span className='message-text'>{props.message}</span>
                </span>
            )

        }
      
    </div>
    </div>
  )
}

export default ChatMessage