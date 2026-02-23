import { useState } from "react";
import './chat.css'
export function ChatInput({ ChatMessage, setChatMessages, chatMessages }) {

    const [input, setInput] = useState("")

    const handlechange = (e) => {
        setInput(e.target.value);


    }

    const send = () => {


        const newMessage = [...chatMessages, {
            message: input,
            sender: "user",
            id: crypto.randomUUID()
        }]

        setChatMessages(newMessage)

        const response = Chatbot.getResponse(input);


        setChatMessages([...newMessage, {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
        }])

        setInput("")
    }

    return (
        <>

            <div className="bothComponent">
                <div className="overflow">


                    <ChatMessage chatMessages={chatMessages} />
                </div>
                <div className="TypeingSpace">
                    <input type="text"
                        className="Input"
                        onChange={handlechange}
                        value={input}
                        placeholder="Send Message To BIx"
                    />
                    <button
                        className="sendButton"
                        onClick={send}

                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );

}