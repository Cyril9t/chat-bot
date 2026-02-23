import { ChatInput } from "./ChatInput.jsx";
import { ChatMessage } from "./ChatMassege.jsx";
import { Banner } from "./welcome.jsx";
import { useState } from "react";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hi",
      sender: "user",
      id: crypto.randomUUID()
    }, {
      message: "response",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }, {

      message: "what can you do",
      sender: "user",
      id: crypto.randomUUID()

    }, {
      message: "say your mind i can help",
      sender: "robot",
      id: crypto.randomUUID()
    }
  ]);


  return (
    <>

      <Banner />

      <ChatInput
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
        ChatMessage={ChatMessage}
      />

    </>

  );
}

export default App
