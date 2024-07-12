import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "../sass/Chatbot.module.scss";

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      addMessage(input, true);
      setInput("");
      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://mindharmony-ji32.onrender.com/api/chat",
          { user_input: input }
        );

        console.log("API Response:", response.data);

        if (response.data && response.data.response) {
          addMessage(response.data.response, false);
        } else {
          addMessage("I'm sorry, I couldn't generate a response.", false);
        }
      } catch (error) {
        console.error("Error:", error);
        addMessage("Sorry, there was an error processing your request.", false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [...prev, { text, isUser }]);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className={styles.chatbotContainer}>
      <button className={styles.chatbotToggle} onClick={toggleChat}>
        <i className="fas fa-comments"></i>
      </button>
      {isOpen && (
        <div className={styles.chatbotDialog}>
          <div className={styles.chatHeader}>
            <h3>Harmony Virtual Assistant</h3>
            <button onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className={styles.chatIntro}>
            <p>
              😊 Hi! I am Harmony virtual assistant. How can I help you today?
            </p>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.isUser ? styles.userMessage : styles.botMessage
                }`}
              >
                <i
                  className={`${
                    message.isUser ? "fas fa-user" : "fas fa-robot"
                  }`}
                ></i>
                <p>{message.text}</p>
              </div>
            ))}
            {isLoading && (
              <div className={styles.loadingMessage}>
                <i className="fas fa-spinner fa-spin"></i>
                <p>Thinking...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;