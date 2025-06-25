'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatbotRAG from './ChatbotRAG'

const ChatbotButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(true)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
    if (!isChatOpen) {
      setHasNewMessage(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2
        }}
      >
        <motion.button
          onClick={toggleChat}
          className="relative w-16 h-16 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden group"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(37, 165, 160, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Notification Badge */}
          <AnimatePresence>
            {hasNewMessage && !isChatOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
              >
                1
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{ rotate: isChatOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isChatOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </motion.div>

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2CC2BA] to-[#25A5A0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: 3 }}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
            >
              <div className="relative">
                Besoin d&apos;aide ? Posez votre question !
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chatbot */}
      <ChatbotRAG isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}

export default ChatbotButton 