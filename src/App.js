// import React, { useState } from "react";
// import "./App.css";

// const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState("");

//   const handleMessageSend = () => {
//     if (messageInput.trim() !== "") {
//       const randomUser =
//         user_list[Math.floor(Math.random() * user_list.length)];
//       const newMessage = { user: randomUser, text: messageInput, likes: 0 };
//       setMessages([...messages, newMessage]);
//       setMessageInput("");
//     }
//   };

//   const handleLike = (index) => {
//     const newMessages = [...messages];
//     newMessages[index].likes += 1;
//     setMessages(newMessages);
//   };

//   return (
//     <div className="App">
//       <div className="ChatContainer">
//         <div className="MessageThread">
//           {messages.map((message, index) => (
//             <div key={index} className="Message">
//               <span className="UserName">{message.user}</span>
//               <span className="MessageText">{message.text}</span>
//               <button className="LikeButton" onClick={() => handleLike(index)}>
//                 Like ({message.likes})
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="InputContainer">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={messageInput}
//             onChange={(e) => setMessageInput(e.target.value)}
//           />
//           <button onClick={handleMessageSend}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMessageSend = () => {
    if (messageInput.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = { user: randomUser, text: messageInput, likes: 0 };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  const handleLike = (index) => {
    const newMessages = [...messages];
    newMessages[index].likes += 1;
    setMessages(newMessages);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <div className={sidebarOpen ? "Sidebar open" : "Sidebar"}>
        <h2>Chats</h2>
        <ul>
          {user_list.map((user, index) => (
            <li key={index} onClick={() => handleUserSelect(user)}>
              {user}
            </li>
          ))}
        </ul>
        <button onClick={() => setSidebarOpen(false)}>Close Sidebar</button>
      </div>
      <div className="ChatContainer">
        <div className="Header">
          <h2>
            {selectedUser ? `Chatting with ${selectedUser}` : "Select a user"}
          </h2>
          <button onClick={() => setSidebarOpen(true)}>Open Sidebar</button>
        </div>
        <div className="MessageThread">
          {messages.map((message, index) => (
            <div key={index} className="Message">
              <span className="UserName">{message.user}</span>
              <span className="MessageText">{message.text}</span>
              <button className="LikeButton" onClick={() => handleLike(index)}>
                Like ({message.likes})
              </button>
            </div>
          ))}
        </div>
        <div className="InputContainer">
          <input
            type="text"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button onClick={handleMessageSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
