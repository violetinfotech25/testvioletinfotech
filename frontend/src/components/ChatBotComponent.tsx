import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../bot/config";
import ActionProvider from "../bot/ActionProvider";
import MessageParser from "../bot/MessageParser";
import ChatbotHeader from "./widgets/ChatbotHeader";

import "react-chatbot-kit/build/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ChatBotComponent: React.FC = () => {
  const [showBot, setShowBot] = React.useState(false);

  return (
    <div style={{ position: "fixed", bottom: 20, left: 20, zIndex: 1000, width: 300 }}>
      {showBot && (
        <div style={{ border: "1px solid #007bff", width: 275, borderRadius: 5, overflow: "hidden" }}>
          <ChatbotHeader onClose={() => setShowBot(false)} />
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
      )}

      {!showBot && (
        <button
          onClick={() => setShowBot(true)}
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 55,
            height: 55,
            cursor: "pointer",
            fontSize: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Open chatbot"
          title="Open chatbot"
        >
          <FontAwesomeIcon icon={faComments} />
        </button>
      )}
    </div>
  );
};

export default ChatBotComponent;