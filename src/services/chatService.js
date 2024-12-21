const RESPONSE_DELAY = 1000; // Simulate API delay

const predefinedResponses = {
  greetings: [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "Welcome! How may I assist you?",
  ],
  orderRelated: [
    "I can help you with your order. Could you please provide your order number?",
    "I'll be happy to assist with your order. What seems to be the issue?",
    "Let me check that order for you. What's your order reference?",
  ],
  shipping: [
    "Your order is currently in transit. It should arrive within 2-3 business days.",
    "I can see your package is being processed at our warehouse.",
    "The delivery service has picked up your package.",
  ],
  general: [
    "I understand. Let me help you with that.",
    "I'll look into this for you right away.",
    "Thank you for bringing this to my attention.",
  ],
};

const keywords = {
  greetings: [
    "hi",
    "hello",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ],
  orderRelated: ["order", "purchase", "bought", "buy", "ordered"],
  shipping: ["shipping", "delivery", "track", "package", "arrive", "shipped"],
};

const getResponseCategory = (message) => {
  const lowerMessage = message.toLowerCase();

  for (const [category, words] of Object.entries(keywords)) {
    if (words.some((word) => lowerMessage.includes(word))) {
      return category;
    }
  }
  return "general";
};

const getRandomResponse = (category) => {
  const responses = predefinedResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
};

export const generateResponse = async (message) => {
  const category = getResponseCategory(message);
  const response = getRandomResponse(category);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, RESPONSE_DELAY));

  return {
    id: Date.now(),
    sender: "John Doe",
    message: response,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    isUser: false,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  };
};
