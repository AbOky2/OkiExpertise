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


const words = `Audit - Expertise Comptable - Conseil`;

export function Accueil() {
  const { scrollY, scrollYProgress } = useScroll()

  return (
    <motion.div 
    
    className="  w-full">
      <header className="bg-[url('/home.jpg')] h-screen bg-red-900 w-full  bg-no-repeat bg-cover text-white">
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
            <h1 className="text-6xl font-bold mb-4 ">Audit - Expertise Comptable - Conseil</h1>
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
        <Partenaires/>
        
       
      </main>
          <Footer/>
      
    </motion.div>
  )
}