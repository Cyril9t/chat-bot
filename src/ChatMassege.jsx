import './chat.css'
import { useRef, useEffect } from 'react'
export function ChatMessage({ chatMessages }) {
    const scrollELL = useRef(null);
    useEffect(() => {
        const container = scrollELL.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [chatMessages])
    return (

        chatMessages.map((chatMessage) => {

            return (

                < div key={chatMessage.id} className='inputDown'>

                    <div className='screen' >
                        <div className='messages'>

                            <div className={chatMessage.sender === "user" ? "user" : "robot"}  >
                                {chatMessage.sender === "robot" && <img src="src/Robot.jpg" alt="profile" className="profiles" />}
                                <span className='text'>{chatMessage.message}</span>
                                {chatMessage.sender === "user" && <img src="src/User.jpg" alt="profile" className="profiles" />}

                            </div>
                        </div>
                    </div>

                </div>

            )

        })


    )
}