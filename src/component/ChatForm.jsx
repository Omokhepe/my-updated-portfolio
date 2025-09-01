import React, {useRef} from 'react';

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit =(e) => {
        e.preventDefault()
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        //Update User History with User's Message
        setChatHistory(history => [...history, {role: 'user', text: userMessage}]);


        //Add thinking placeholder for bot response
        setTimeout(() => {
            setChatHistory(history => [...history, {role: 'model', text: 'Thinking...'}]);

            //call function to generate bot response
            generateBotResponse([...chatHistory,  {role: 'user', text: userMessage}]);
        }, 600)



    }

    return (
        <div>
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
                <input ref={inputRef} type="text" placeholder='Message....' className="message-input" required/>
                <button className="material-symbols-outlined">arrow_upward</button>
            </form>
        </div>
    );
};

export default ChatForm;