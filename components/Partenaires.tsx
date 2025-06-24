import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Interface pour les partenaires
interface Partner {
  logo: string;
  name: string;
}

// Composant de carte partenaire moderne
function PartnerCard({ partner, index }: { partner: Partner, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteneur principal avec effet glassmorphism */}
      <motion.div
        className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Effet de lueur animée */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#25A5A0]/10 via-[#2CC2BA]/10 to-[#25A5A0]/10 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Particles flottantes */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#25A5A0]/40 rounded-full"
              style={{
                left: `${25 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Container du logo */}
        <motion.div
          className="relative z-10 h-20 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <Image 
              src={partner.logo} 
              alt={partner.name} 
              width={120} 
              height={60}
              className="object-contain filter transition-all duration-300 group-hover:brightness-110"
              style={{
                filter: isHovered ? 'grayscale(0%)' : 'grayscale(20%)'
              }}
            />
            
            {/* Effet de brillance au hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "100%" : "-100%" }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Nom du partenaire (optionnel) */}
        <motion.p
          className="relative z-10 text-center text-sm font-medium text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {partner.name}
        </motion.p>

        {/* Border animé */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          animate={{
            borderColor: isHovered ? 'rgba(37, 165, 160, 0.3)' : 'transparent'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

function Partenaires() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const partners = [
    { logo: "/fulll.png", name: "Fulll" },
    { logo: "/dext.png", name: "Dext" },
    { logo: "/henri.png", name: "Henri" },
    { logo: "/silae.png", name: "Silae" },
    { logo: "/xodo.png", name: "Xodo" },
    { logo: "/microsoft.png", name: "Microsoft" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      {/* Background avec motifs lumineux */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#25A5A0]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2CC2BA]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#25A5A0]/5 rounded-full blur-2xl"></div>
      </div>

      {/* Grille de fond subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(37, 165, 160, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(37, 165, 160, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-[#25A5A0] font-semibold mb-4 tracking-wider uppercase text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Écosystème de confiance
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
              Nos
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#25A5A0] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent">
              Partenaires
            </span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Découvrez les technologies et partenaires de premier plan qui nous permettent d&apos;offrir des solutions comptables innovantes et performantes.
          </motion.p>
        </motion.div>

        {/* Grid des partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <PartnerCard key={partner.name} partner={partner} index={index} />
          ))}
        </div>

        {/* Section de confiance */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl">
            <motion.div
              className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-8"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-700 text-left">Certifié & Agréé</span>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-700 text-left">Technologies de pointe</span>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold text-gray-700 text-left">Sécurité garantie</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Partenaires;
