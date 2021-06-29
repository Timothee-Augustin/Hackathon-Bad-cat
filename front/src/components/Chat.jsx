import React, { useState } from 'react';
import io from "socket.io-client";
import "./Chat.css";

function Chat() {
    const [messages, setMessages] = useState([]);
    function setNewMessage(msg) {
      setMessages([...messages, msg]);
    }
    function sendMessage(e) {
      e.preventDefault();
      const msg = {
        username: e.target.username.value,
        text: e.target.text.value,
      };
      const socket = io("localhost:8000");
      socket.emit("CLIENT_MSG", msg);
      setNewMessage(msg);
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">ChatRoom</div>
                <hr />
                <div className="messages">
                  {messages.map((msg) => {
                    return (
                      <div key={msg.username}>
                        {msg.username} : {msg.text}
                      </div>
                    );
                  })}
                </div>
              </div>
              <form onSubmit={(e) => sendMessage(e)}>
                <div className="card-footer">
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="form-control-username"
                  />
                  <br />
                  <input
                    id="text"
                    type="text"
                    placeholder="Your message"
                    className="form-control-message"
                  />
                  <br />
                  <button type="submit" className="btn-send-chat">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Chat;
