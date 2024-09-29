'use client'
import { Button } from '@/components/ui/button'
import Footer from './Footer'
import Besoins from './Besoins'
import SolutionsPersonnalise from './SolutionsPersonnalise'
import Accompagnement from './Accompagnement'
import Partenaires from './Partenaires'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { delay, motion } from "framer-motion";
import { useScroll } from "framer-motion"
import Valeurs from './Valeurs'
import NousChoisir from './NousChoisir'
import config from './config';
import MessageParser from './MessageParser'
import ActionProvider from './ActionProviders'
//import Chatbot from 'react-chatbot-kit'
import ChatBot from "react-chatbotify";
import ContactForm from './ContactForm'
import Navbar from './Navbar'
import { HeroSection } from './HeroSection'


const words = `Audit - Expertise Comptable - Conseil`;

export function Accueil() {
  const flow={
		start: {
      component: (
				<div className=''>
    <p className=' font-regular text-black'>
    Hello !
    <br/>
    <br/>

Je m&apos;appelle Saleh, je suis un jeune Expert-Comptable et je suis là pour vous aider.
    </p>
  </div>
			),
      			path: "ask_choice"
		},
		
		
		ask_choice: {
			message: "Select at least 2 pets that you are comfortable to work with:",
			checkboxes: {items: ["Dog", "Cat", "Rabbit", "Hamster"], min: 2},
			chatDisabled: true,
			path: "ask_work_days"
		},
		ask_work_days: {
			message: "How many days can you work per week?",
			path: "end"
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			component: (
				<div >
					
					ABC
				</div>
			),
			options: ["New Application"],
			chatDisabled: true,
			path: "start"
		},
	}
  const { scrollY, scrollXProgress } = useScroll()

  return (
    <motion.div 
    
    className="  w-full">
      <Navbar/>
      <header className="bg-[url('/home.jpg')] h-screen bg-blend-overlay brightness-75  w-full  bg-no-repeat bg-cover text-white">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.4, 0.71, 0.8, 1.01]}}
        className="container  px-4 py-8">
          <div className="flex justify-between items-center">
            
          </div>
          <div className="mt-16 p-4 max-w-2xl">
            <h1 className="md:text-6xl text-3xl font-bold mb-4 ">Audit - Expertise Comptable - Conseil</h1>
            <p className="text-lg mb-8 text-gray-400">
              Oki Expertise accompagne les entreprises et sociétés commerciales dans leurs défis de gestion financière et administrative en matière juridique, légale et managériale.
            </p>
            <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">
              <a href="https://wa.me/33755763318">
              Parler à un conseiller</a>
            </Button>
          </div>
        </motion.div>
      </header>

      <main>
        <Besoins/>

        <SolutionsPersonnalise/>
        <Accompagnement/>             
        <NousChoisir/>

   
 
   <Valeurs/>
        <Partenaires/>
        {/* <ChatBot settings={{ chatHistory: {storageKey: "example_basic_form"}}} flow={flow}/> */}

                    {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}

      <ContactForm/>
      </main>
          <Footer/>
      
    </motion.div>
  )
}