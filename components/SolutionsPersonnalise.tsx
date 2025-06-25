import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function SolutionsPersonnalise() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={sectionRef} 
      className="relative py-20  overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background animé avec particules */}
      <div className="absolute inset-0">
        {/* Orbes lumineux */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#25A5A0]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2CC2BA]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#25A5A0]/10 rounded-full blur-2xl"></div>
        
        {/* Particules flottantes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#25A5A0]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(37, 165, 160, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 165, 160, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge supérieur */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[#25A5A0] rounded-full animate-pulse"></div>
            <span className="text-white/80 font-medium text-sm tracking-wider uppercase">
              Solutions sur mesure
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">
              Vous avez besoin d&apos;une
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#25A5A0] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent">
              solution personnalisée ?
            </span>
          </motion.h2>

          {/* Ligne décorative */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Oki Expertise met à votre disposition notre expertise pour vous fournir la solution dont vous avez besoin pour atteindre vos objectifs. Ensemble, construisons l&apos;avenir de votre entreprise.
          </motion.p>

          {/* Statistiques */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#25A5A0] mb-2">100+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#2CC2BA] mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Support disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#25A5A0] mb-2">3+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Années d&apos;expertise</div>
            </div>
          </motion.div>

          {/* Bouton CTA principal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="https://wa.me/33751516642"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-bold py-4 px-8 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(37, 165, 160, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "100%" : "-100%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Contenu du bouton */}
              <span className="relative z-10 text-lg">Parler à un conseiller</span>
              
              {/* Icône */}
              <motion.svg 
                className="relative z-10 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>

              {/* Particles au hover */}
              {isHovered && (
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [-10, -20, -30]
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.a>
          </motion.div>

          {/* Informations de contact supplémentaires */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-8 h-8 bg-[#25A5A0]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#25A5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm">Réponse sous 24h</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-8 h-8 bg-[#2CC2BA]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#2CC2BA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm">Consultation gratuite</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-8 h-8 bg-[#25A5A0]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#25A5A0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-sm">100% confidentiel</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsPersonnalise;
