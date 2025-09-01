import React from 'react';
import ChatbotIcon from "../constant/ChatbotIcon.jsx";

const ChatMessage = ({chat}) => {
    // console.log(chat);
    return (
        <div className={`message ${chat.role === 'model'? 'bot':'user'}-message ${chat.isError?'error':''}`}>

            {chat.role === 'model' && <ChatbotIcon/>}
            <div className="message-text textPreset1Med textMargin">
                {
                    chat.text.includes('Thinking...') ? <div className='loader-big'>
                        <div className='loader'></div>
                        <div className='loader'></div>
                        <div className='loader'></div>
                    </div>: chat.text
                }
                {/*{chat.text}*/}
            </div>
        </div>
    );
};

export default ChatMessage;