import { ChatInput } from "./ChatInput.jsx";
import { ChatMessage } from "./ChatMassege.jsx";
import { Banner } from "./welcome.jsx";
import { useState } from "react";

function App() {
  const [chatMessages, setChatMessages] = useState([]);


  return (
    <>

      <Banner />

      <ChatInput
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
        ChatMessage={ChatMessage}
      />

    </>

  )
}

export default App
