import { Icon } from "@iconify/react";
import { useState } from "react";
import { generateResponse } from "../services/chatService";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hey, how can I help you today?",
      time: "10:30 AM",
      isUser: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const activeUsers = [
    {
      id: 1,
      name: "John Doe",
      status: "online",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "busy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    {
      id: 3,
      name: "Mike Johnson",
      status: "away",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMsg = {
      id: messages.length + 1,
      sender: "Me",
      message: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Me",
    };

    setMessages((prev) => [...prev, userMsg]);
    setNewMessage("");
    setIsTyping(true);

    try {
      // Get AI response
      const response = await generateResponse(newMessage);
      setMessages((prev) => [...prev, response]);
    } catch (error) {
      console.error("Failed to get response:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex h-full">
      {/* Chat List */}
      <div className="w-80 border-r border-[#DCDFE4] p-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-[#212636]">Active Users</h2>
          <p className="text-sm text-[#8A94A6]">{activeUsers.length} online</p>
        </div>
        <div className="space-y-4">
          {activeUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-3 p-2 hover:bg-[#F8FAFB] rounded-lg cursor-pointer"
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    user.status === "online"
                      ? "bg-green-500"
                      : user.status === "busy"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                />
              </div>
              <div>
                <h3 className="font-medium text-[#212636]">{user.name}</h3>
                <p className="text-sm text-[#8A94A6] capitalize">
                  {user.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-[#DCDFE4] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={activeUsers[0].avatar}
              alt={activeUsers[0].name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-medium text-[#212636]">
                {activeUsers[0].name}
              </h2>
              <p className="text-sm text-[#8A94A6]">Active now</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Icon
              icon="heroicons:phone"
              className="w-5 h-5 text-[#8A94A6] cursor-pointer"
            />
            <Icon
              icon="heroicons:video-camera"
              className="w-5 h-5 text-[#8A94A6] cursor-pointer"
            />
            <Icon
              icon="heroicons:information-circle"
              className="w-5 h-5 text-[#8A94A6] cursor-pointer"
            />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex ${
                  msg.isUser ? "flex-row-reverse" : "flex-row"
                } items-start space-x-2 max-w-[70%]`}
              >
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full"
                />
                <div className={`${msg.isUser ? "ml-2" : "mr-2"}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      msg.isUser
                        ? "bg-[#15B79F] text-white"
                        : "bg-[#F8FAFB] text-[#212636]"
                    }`}
                  >
                    {msg.message}
                  </div>
                  <span className="text-xs text-[#8A94A6] mt-1 block">
                    {msg.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="John"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-[#F8FAFB] p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Message Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t border-[#DCDFE4]"
        >
          <div className="flex items-center space-x-4">
            <button type="button" className="text-[#8A94A6]">
              <Icon icon="heroicons:paper-clip" className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-[#DCDFE4] rounded-lg focus:outline-none focus:border-[#15B79F]"
            />
            <button
              type="submit"
              className="bg-[#15B79F] text-white p-2 rounded-lg hover:bg-[#0E9382] transition-colors"
            >
              <Icon icon="heroicons:paper-airplane" className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
