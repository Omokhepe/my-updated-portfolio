import React, {useEffect, useRef, useState} from "react";
import { Client } from "@gradio/client";
import 'boxicons'
import ChatbotIcon from "../constant/ChatbotIcon.jsx";
import {ChatForm, ChatMessage} from "./index.js";

export default function Chatbot({showChat, setShowChat}) {
    const [chatHistory, setChatHistory] = useState([]);
    const chatBodyRef = useRef();


    const generateBotResponse = async (history) =>{

        const updateHistory = (text, isError = false) => {
            setChatHistory((prevState) => [...prevState.filter((msg)=> msg.text !== 'Thinking ...'), {role: 'model', text, isError}]);
        }

        //This cleans the question that calls the bot API
        const userChat = history.filter(msg => msg.role === 'user').pop()?.text || '';

        try {
            const client = await Client.connect("omohkhepe/career_conversation");
            const result = await client.predict("/chat", {
                message: userChat,
            });

            const apiTextResponse = result.data[0].replace(/\*\*(.*?)\*\*/g, "$1").trim();

            updateHistory(apiTextResponse)

        } catch (error) {
            updateHistory(error.message, true);
            console.log('there', error)
            // setAnswer("⚠️ Something went wrong. Please try again.");
        }
    }

    useEffect(() => {
        chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: 'smooth'});
    })


    return (
        <div className={`container ${showChat ? 'showChat' : ''}`}>
            <button id="chatbot-toggle" onClick={() => setShowChat(prevState => !prevState)}>
                <span className="material-symbols-outlined">mode_comment</span>
                <span className="material-symbols-outlined">close</span>
            </button>
            <div className='chatbox-popup'>
                {/*Chatbot Header*/}
                <div className='chatbox-header'>
                    <div className='header-info'>
                        <ChatbotIcon/>
                        <h2 className='logo-text textPresetBold textMargin'>Chatbot</h2>
                    </div>
                    {/*<img src={down_arrow}/>*/}
                    <button onClick={() => setShowChat(prevState => !prevState)}
                            className="material-symbols-outlined">keyboard_arrow_down</button>
                </div>

                {/*Chatbot Body*/}
                <div ref={chatBodyRef} className='chat-body'>
                    <div className='message bot-message'>
                        <ChatbotIcon/>
                        <p className="message-text textPreset1Med textMargin">
                            Hey there <br/> How can I help you today?
                        </p>
                    </div>

                    {/*Renders Chat histoy Dynammically*/}
                    {
                        chatHistory.map((chat, index) => (
                            <ChatMessage chat={chat} key={index} />
                        ))
                    }
                </div>
                {/*Chatbot Footer*/}
                <div className="chat-footer">
                   <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
                </div>
            </div>
        </div>
    );
}

