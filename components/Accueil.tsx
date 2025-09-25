/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Footer from './Footer'
import SolutionsPersonnalise from './SolutionsPersonnalise'
import Partenaires from './Partenaires'
import { motion, useScroll, useTransform } from "framer-motion";
import Valeurs from './Valeurs'
import NousChoisir from './NousChoisir'
import Navbar from './Navbar'
import NewForm from './NewForm'
import Services from './Services'
import { useRef } from 'react'
import ChatbotButton from './ChatbotButton'

export function Accueil() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);



  return (
    <motion.div 
      ref={containerRef}
      className="w-full overflow-hidden">
      <Navbar/>      
      
      {/* Hero Section Modernisée */}
      <motion.header 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-screen bg-[url('/bgOki.jpg')] bg-blend-overlay brightness-75 w-full flex justify-center bg-no-repeat bg-cover text-white overflow-hidden"
      >
        {/* Overlay avec gradient renforcé */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
        
        {/* Particules flottantes dans le hero */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#25A5A0]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="container px-6 py-8 items-center flex justify-center md:justify-start md:items-start relative z-10">
          
          <div className="mt-24 p-6 max-w-4xl flex justify-center flex-col items-center md:items-start">
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-[#25A5A0] flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-[#25A5A0] rounded-full animate-pulse"></div>
              <span>Inscrit à l&apos;Ordre des Experts-Comptables</span>
            </motion.div>

            {/* Titre principal avec animation progressive */}
            <motion.h1 
              className="md:text-7xl text-4xl font-bold mb-6 leading-tight text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Audit
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-[#25A5A0] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Expertise Comptable
              </motion.span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Conseil
              </motion.span>
            </motion.h1>

            {/* Description améliorée */}
            <motion.p 
              className="text-xl mb-10 text-white max-w-3xl leading-relaxed text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Oki Expertise accompagne les entreprises et sociétés commerciales dans leurs défis de 
              <span className="text-[#25A5A0] font-semibold"> gestion financière</span> et 
              <span className="text-[#2CC2BA] font-semibold"> administrative</span> en matière comptable, 
              juridique, fiscale et managériale.
            </motion.p>
          
            {/* CTA Button amélioré */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <motion.a
                href="https://wa.me/33751516642"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-bold rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Parler à un conseiller</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              <motion.div
                className="text-white text-sm flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-[#25A5A0] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">S</div>
                  <div className="w-8 h-8 bg-[#2CC2BA] rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">+</div>
                </div>
                <span>Réponse sous 24h</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>


      </motion.header>

      {/* Main content avec animations de section */}
      <main className="relative">
        {/* Services Section */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <Services/>
        </motion.section>

        {/* Solutions Personnalisées */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <SolutionsPersonnalise/>
        </motion.section>

        {/* Nous Choisir */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <NousChoisir/>
        </motion.section>

        {/* Valeurs */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <Valeurs/>
        </motion.section>

        {/* Partenaires */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <Partenaires/>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <NewForm/>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Footer/>
      </motion.footer>

      {/* Chatbot */}
      <ChatbotButton />
    </motion.div>
  )
}