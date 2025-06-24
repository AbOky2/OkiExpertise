import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Composant de carte de valeur moderne
interface ValueType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ModernValueCard({ value, index }: { value: ValueType, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 15 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
      className="relative group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteneur principal avec effet de profondeur */}
      <motion.div
        className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
      >
        {/* Effet de lueur animée */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#25A5A0]/20 via-[#2CC2BA]/20 to-[#25A5A0]/20 rounded-3xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#25A5A0]/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Icône moderne */}
        <motion.div
          className="relative z-10 mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-2xl flex items-center justify-center shadow-lg">
            {value.icon}
          </div>
        </motion.div>

        {/* Titre avec animation de typing */}
        <motion.h3
          className="relative z-10 text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          {value.title}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] rounded-full"
            initial={{ width: 0 }}
            animate={isHovered ? { width: "100%" } : { width: "30%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.h3>

        {/* Description avec effet de révélation */}
        <motion.div
          className="relative z-10 overflow-hidden"
          initial={{ height: "auto" }}
        >
          <motion.p
            className="text-gray-300 leading-relaxed text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          >
            {value.description}
          </motion.p>
        </motion.div>

        {/* Effet de brillance au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Valeurs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden mt-20"
    >
             {/* Background statique */}
       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />

      {/* Motif de fond animé */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #25A5A0 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #2CC2BA 0%, transparent 50%)`
        }} />
      </div>

      {/* Grille de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(37, 165, 160, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(37, 165, 160, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal avec animations */}
        <motion.div
          className="text-center mb-20"
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
            Excellence • Innovation • Engagement
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Nos
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#25A5A0] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent">
              Valeurs
            </span>
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Découvrez les principes fondamentaux qui guident notre excellence et forgent notre identité d&apos;expert-comptable de confiance.
          </motion.p>
        </motion.div>

        {/* Grid des valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {valeurs.map((valeur, index) => (
            <ModernValueCard key={valeur.title} value={valeur} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Travaillons ensemble
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Données des valeurs avec icônes
export const valeurs = [
  {
    title: "Excellence",
    description: "Dans notre cabinet, l'Excellence est bien plus qu'une simple aspiration ; c'est une norme que nous nous efforçons de surpasser à chaque étape de notre travail. Nous croyons fermement que la qualité de nos services est la pierre angulaire de notre réputation.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Proximité",
    description: "Nous considérons nos clients comme des partenaires et nous comprenons l'importance d'une communication transparente et ouverte. La proximité signifie que nous sommes là pour écouter, comprendre et répondre aux besoins spécifiques de chaque client.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Efficacité",
    description: "Nous investissons dans des processus modernes et des technologies de pointe pour garantir une prestation de services rapide, précise et adaptée aux besoins spécifiques de nos clients. Notre engagement envers l'efficacité ne compromet jamais la qualité.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];