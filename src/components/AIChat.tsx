import { useState, useRef, useEffect } from 'react'
import './AIChat.css'

interface AIChatProps {
  onClose: () => void
}

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

function AIChat({ onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to Laundri AI Fashion Designer! 👋 I can help you create your fashion label, design products, and connect with suppliers. What would you like to create today?',
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('headwear') || lowerInput.includes('hat') || lowerInput.includes('cap')) {
      return 'Great choice! For headwear, I can help you design custom caps, beanies, bucket hats, or even crochet designs. Would you like to explore fabric options, add embroidery, or connect with suppliers like Printful for on-demand production?'
    } else if (lowerInput.includes('shirt') || lowerInput.includes('tshirt') || lowerInput.includes('t-shirt')) {
      return 'Excellent! Let\'s create some amazing shirts. I can help you choose from various styles - classic tees, oversized fits, long sleeves, or button-ups. Would you like to see fabric templates or discuss printing techniques?'
    } else if (lowerInput.includes('pants') || lowerInput.includes('jeans') || lowerInput.includes('denim')) {
      return 'Perfect for pants design! We can work with denim, chinos, cargo styles, or joggers. I can show you pre-made templates and help you select fabrics. Would you like to explore sustainable fabric options?'
    } else if (lowerInput.includes('jacket') || lowerInput.includes('coat')) {
      return 'Jackets are a great statement piece! I can help you design bombers, hoodies, windbreakers, or corduroy jackets. Let\'s talk about materials, colors, and how to connect with manufacturers.'
    } else if (lowerInput.includes('footwear') || lowerInput.includes('shoe') || lowerInput.includes('sneaker')) {
      return 'Footwear design is exciting! While we mainly connect you with on-demand suppliers for shoes, I can help you create custom designs and mockups to send to manufacturers. Would you like supplier recommendations?'
    } else if (lowerInput.includes('underwear') || lowerInput.includes('essential')) {
      return 'Let\'s design some essentials! From basics to premium underwear, I can help you choose comfortable fabrics and connect with ethical manufacturers. What style are you thinking?'
    } else if (lowerInput.includes('supplier') || lowerInput.includes('printful') || lowerInput.includes('aliexpress')) {
      return 'I can help you connect with various suppliers! Printful is great for on-demand printing and dropshipping, while AliExpress offers bulk manufacturing options. What type of production model are you interested in?'
    } else if (lowerInput.includes('fabric') || lowerInput.includes('material')) {
      return 'Let\'s explore fabric options! We have templates for cotton, polyester, denim, wool, linen, and sustainable materials like organic cotton and recycled fabrics. What type of garment are you designing?'
    } else if (lowerInput.includes('brand') || lowerInput.includes('label')) {
      return 'Exciting! Creating a fashion brand involves defining your aesthetic, target audience, and production strategy. I can help you with brand identity, product line planning, and supplier connections. What\'s your brand vision?'
    } else {
      return 'I\'m here to help you create amazing fashion products! You can ask me about designing specific clothing categories (Headwear, Shirts, Pants, Jackets, Footwear, Underwear), choosing fabrics, creating a brand, or connecting with suppliers. What would you like to know?'
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="ai-chat-overlay">
      <div className="ai-chat-container">
        <div className="ai-chat-header">
          <div className="ai-chat-header-content">
            <h2>🤖 AI Fashion Designer</h2>
            <p>Powered by Laundri</p>
          </div>
          <button className="ai-chat-close" onClick={onClose}>×</button>
        </div>

        <div className="ai-chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message ai">
              <div className="message-content typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-chat-input-container">
          <textarea
            className="ai-chat-input"
            placeholder="Describe your fashion vision..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={2}
          />
          <button 
            className="ai-chat-send" 
            onClick={handleSend}
            disabled={!inputText.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIChat
