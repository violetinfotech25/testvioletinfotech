import React from "react";
import logo from "../../assets/image/logo/LOGO 3.jpg";

type ChatbotHeaderProps = {
  onClose: () => void;
};

const ChatbotHeader: React.FC<ChatbotHeaderProps> = ({ onClose }) => (
  <div
    style={{
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      height: "50px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: "28px", marginRight: "10px" }}
      />
      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Violet Infotech</span>
    </div>

    <button
      onClick={onClose}
      style={{
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
        lineHeight: "1",
      }}
      aria-label="Close chatbot"
      title="Close chatbot"
    >
      &times;
    </button>
  </div>
);

export default ChatbotHeader;