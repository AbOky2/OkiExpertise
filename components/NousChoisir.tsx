/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function NousChoisir() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: 'Gain de Temps',
      description: 'Concentrez-vous sur votre activité, nous nous occupons du reste.',
      imgSrc: '/collabo1.jpg',
      svgIcon: '/svg1.svg',
      color: 'from-[#25A5A0] to-[#2CC2BA]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: { value: "70%", label: "Temps économisé" }
    },
    {
      title: 'Collaborateur dédié',
      description: 'Accompagnement et conseils personnalisés.',
      imgSrc: '/collabo2.jpg',
      svgIcon: '/svg4.svg',
      color: 'from-[#2CC2BA] to-[#25A5A0]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: { value: "24/7", label: "Disponibilité" }
    },
    {
      title: 'Audit, Comptabilité,...',
      description: 'Accompagnement dans toutes vos problématiques du quotidien.',
      imgSrc: '/collabo3.png',
      svgIcon: '/svg5.svg',
      color: 'from-[#25A5A0] to-[#2CC2BA]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stats: { value: "360°", label: "Solutions complètes" }
    },
    {
      title: 'Tarifs attractifs',
      description: 'Nos honoraires sont compétitifs comparé aux cabinets traditionnels.',
      imgSrc: '/collabo4.jpg',
      svgIcon: '/svg6.svg',
      color: 'from-[#2CC2BA] to-[#25A5A0]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      stats: { value: "-30%", label: "vs concurrence" }
    },
    {
      title: 'Réactivité',
      description: 'Nous sommes disponible, quand vous l\'êtes.',
      imgSrc: '/collabo5.jpg',
      svgIcon: '/svg2.svg',
      color: 'from-[#25A5A0] to-[#2CC2BA]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: { value: "<24h", label: "Temps de réponse" }
    },
    {
      title: 'Expertise secteurs',
      description: 'Nous sommes spécialisés dans de nombreux secteurs d\'activités.',
      imgSrc: '/collabo2.jpg',
      svgIcon: '/svg3.svg',
      color: 'from-[#2CC2BA] to-[#25A5A0]',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: { value: "15+", label: "Secteurs d'expertise" }
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gray-100 overflow-hidden"
      id="pourquoiNous"
    >
      {/* Background décoratif avec lignes courbes et pointillés */}
      <div className="absolute inset-0">
        {/* Pattern de lignes courbes enrichi */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="curvedLines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.15" strokeDasharray="5,5"/>
              <path d="M0,150 Q50,100 100,150 T200,150" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.13" strokeDasharray="3,7"/>
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.11" strokeDasharray="8,4"/>
              <path d="M0,75 Q100,25 200,75" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.09" strokeDasharray="12,3"/>
              <path d="M0,125 Q100,175 200,125" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.1" strokeDasharray="6,8"/>
            </pattern>
            <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#25A5A0" opacity="0.06"/>
              <circle cx="10" cy="10" r="1" fill="#2CC2BA" opacity="0.09"/>
              <circle cx="50" cy="50" r="1.5" fill="#25A5A0" opacity="0.05"/>
              <circle cx="20" cy="45" r="0.8" fill="#2CC2BA" opacity="0.07"/>
            </pattern>
            <pattern id="waves" x="0" y="0" width="300" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q75,20 150,50 T300,50" stroke="#25A5A0" strokeWidth="1.5" fill="none" opacity="0.08" strokeDasharray="20,10"/>
              <path d="M0,70 Q75,40 150,70 T300,70" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.06" strokeDasharray="15,12"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curvedLines)"/>
          <rect width="100%" height="100%" fill="url(#dots)"/>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
        
        {/* Lignes courbes décoratives multiples */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Courbes principales */}
          <svg className="absolute top-20 left-10 w-96 h-96" viewBox="0 0 200 200">
            <path d="M20,100 Q60,40 100,100 Q140,160 180,100" stroke="#25A5A0" strokeWidth="2" fill="none" opacity="0.12" strokeDasharray="10,5"/>
            <path d="M10,80 Q90,20 170,80 Q90,140 10,80" stroke="#2CC2BA" strokeWidth="1.5" fill="none" opacity="0.08" strokeDasharray="8,6"/>
          </svg>
          
          <svg className="absolute bottom-20 right-10 w-80 h-80" viewBox="0 0 200 200">
            <path d="M20,60 Q100,20 180,60 Q100,100 20,140" stroke="#2CC2BA" strokeWidth="2" fill="none" opacity="0.1" strokeDasharray="15,8"/>
            <path d="M30,40 Q100,0 170,40 Q100,80 30,120" stroke="#25A5A0" strokeWidth="1.5" fill="none" opacity="0.07" strokeDasharray="12,5"/>
          </svg>
          
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.08" strokeDasharray="12,6"/>
            <circle cx="100" cy="100" r="60" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.06" strokeDasharray="8,10"/>
            <circle cx="100" cy="100" r="40" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.05" strokeDasharray="6,8"/>
          </svg>
          
          {/* Nouvelles courbes ajoutées */}
          <svg className="absolute top-10 right-1/4 w-72 h-72" viewBox="0 0 200 200">
            <path d="M0,100 Q50,20 100,100 Q150,180 200,100" stroke="#2CC2BA" strokeWidth="1.5" fill="none" opacity="0.09" strokeDasharray="14,7"/>
            <path d="M20,50 Q100,10 180,50 Q100,90 20,130" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.06" strokeDasharray="10,8"/>
          </svg>
          
          <svg className="absolute bottom-10 left-1/4 w-60 h-60" viewBox="0 0 200 200">
            <path d="M50,0 Q100,50 150,0 Q100,100 50,200" stroke="#25A5A0" strokeWidth="1.5" fill="none" opacity="0.08" strokeDasharray="16,6"/>
            <path d="M70,20 Q120,70 170,20 Q120,120 70,180" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.06" strokeDasharray="12,9"/>
          </svg>
          
          <svg className="absolute top-1/3 left-20 w-52 h-52" viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="70" ry="40" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.07" strokeDasharray="18,4"/>
            <ellipse cx="100" cy="100" rx="50" ry="25" stroke="#2CC2BA" strokeWidth="1" fill="none" opacity="0.05" strokeDasharray="14,6"/>
          </svg>
          
          <svg className="absolute bottom-1/3 right-20 w-48 h-48" viewBox="0 0 200 200">
            <path d="M0,100 C50,50 150,150 200,100" stroke="#2CC2BA" strokeWidth="1.5" fill="none" opacity="0.09" strokeDasharray="20,5"/>
            <path d="M20,80 C70,30 130,170 180,120" stroke="#25A5A0" strokeWidth="1" fill="none" opacity="0.06" strokeDasharray="15,8"/>
          </svg>
        </div>
        
        {/* Particules flottantes enrichies */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 bg-[#25A5A0]/25' :
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-[#2CC2BA]/20' :
              'w-0.5 h-0.5 bg-[#25A5A0]/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              x: [-3, 3, -3],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Lignes flottantes animées */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 2) * 40}%`,
              width: '80px',
              height: '2px',
              background: i % 2 === 0 ? 
                'linear-gradient(90deg, transparent, #25A5A0, transparent)' :
                'linear-gradient(90deg, transparent, #2CC2BA, transparent)',
              opacity: 0.1,
            }}
            animate={{
              rotate: [0, 10, -10, 0],
              scaleX: [0.5, 1, 0.5],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-[#25A5A0] font-semibold mb-6 tracking-wider uppercase text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pourquoi nous choisir
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-gray-900">
              Quelques raisons de
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#040b0b] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent">
              nous faire confiance
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Découvrez pourquoi plus de 100 entreprises nous font confiance pour leur gestion comptable et financière.
          </motion.p>
        </motion.div>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Conteneur principal avec glassmorphism */}
              <motion.div
                className="relative bg-white backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-2xl overflow-hidden h-96"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Effet de lueur animée */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 rounded-3xl`}
                  animate={{
                    opacity: hoveredCard === index ? 0.1 : 0,
                    scale: hoveredCard === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Image de background subtile */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img 
                    src={card.imgSrc} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                {/* Contenu de la carte */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header avec icône */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.icon}
                    </motion.div>
                    
                    {/* Statistique */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#25A5A0]">{card.stats.value}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">{card.stats.label}</div>
                    </div>
                  </div>

                  {/* Titre */}
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#25A5A0] transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-700 leading-relaxed flex-grow group-hover:text-gray-800 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Particules flottantes dans la carte */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#25A5A0] rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 30}%`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [-10, -20, -30]
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Bouton d'action au hover */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0,
                      y: hoveredCard === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className={`w-full bg-gradient-to-r ${card.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      En savoir plus
                    </motion.button>
                  </motion.div>
                </div>

                {/* Border animé */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent`}
                  animate={{
                    borderColor: hoveredCard === index ? 'rgba(37, 165, 160, 0.5)' : 'transparent'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section statistiques globales */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { value: "100+", label: "Clients satisfaits" },
            { value: "3+", label: "Années d'expérience" },
            { value: "24/7", label: "Support disponible" },
            { value: "98%", label: "Taux de satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#25A5A0] mb-2">{stat.value}</div>
              <div className="text-gray-700 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default NousChoisir;
