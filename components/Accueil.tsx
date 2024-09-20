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
import Chatbot from 'react-chatbot-kit'


const words = `Audit - Expertise Comptable - Conseil`;

export function Accueil() {
  const { scrollY, scrollXProgress } = useScroll()

  return (
    <motion.div 
    
    className="  w-full">
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
              Parler à un conseiller
            </Button>
          </div>
        </motion.div>
      </header>

      <main>
        <Besoins/>

        <SolutionsPersonnalise/>
        <Accompagnement/>             
        <NousChoisir/>

        <section className=" relative w-full overflow-hidden  flex flex-col items-center justify-center ">
   
 
   <h1 className=" text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  mx-auto antialiased font-bold text-center mt-16 ">Nos Valeurs</h1>
   <Valeurs/>
   </section>
        <Partenaires/>


                    {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}
      </main>
          <Footer/>
      
    </motion.div>
  )
}