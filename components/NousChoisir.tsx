/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

function NousChoisir() {
  const cards = [
    {
      title: 'Gain de Temps',
      description: 'Concentrez-vous sur votre activité, nous nous occupons du reste.',
      imgSrc: '/collabo1.jpg',
      svgIcon: '/svg1.svg',
    },
    {
      title: 'Collaborateur dédié',
      description: 'Accompagnement et conseils personnalisés.',
      imgSrc: '/collabo2.jpg',
      svgIcon: '/svg4.svg',
    },
    {
      title: 'Audit, Comptabilité,...',
      description: 'Accompagnement dans toutes vos problématiques du quotidien.',
      imgSrc: '/collabo3.png',
      svgIcon: '/svg5.svg',
    },
    {
      title: 'Tarifs attractifs',
      description: 'Nos honoraires sont compétitifs comparé aux cabinets traditionnels.',
      imgSrc: '/collabo4.jpg',
      svgIcon: '/svg6.svg',
    },
    {
      title: 'Réactivité',
      description: 'Nous sommes disponible, quand vous l\'êtes.',
      imgSrc: '/collabo5.jpg',
      svgIcon: '/svg2.svg',
    },
    {
      title: 'Expertise secteurs',
      description: 'Nous sommes spécialisés dans de nombreux secteurs d\'activités.',
      imgSrc: '/collabo2.jpg',
      svgIcon: '/svg3.svg',
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
      id="pourquoiNous"
      style={{ backgroundImage: "url('/collabo4.jpg')" }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content layer */}
      <div className="relative z-10">
        <h1 className="md:text-6xl text-center font-bold md:mb-12 mb-4 text-white text-3xl">
          Quelques raisons de nous choisir
        </h1>

        {/* Grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group h-80 sm:h-96 w-full sm:w-72 md:w-96 [perspective:1000px]" // Dimensions ajustées pour mobile
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card container with flip effect */}
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front side (Text) */}
                <div className="absolute inset-0 h-full w-full bg-black/40 rounded-xl text-center text-slate-200 [backface-visibility:hidden] flex flex-col items-center justify-center z-10 p-4 border-2 border-neutral-700">
                  <h1 className="text-3xl font-bold mb-8">{card.title}</h1>
                  <p className="text-lg text-gray-500">{card.description}</p>
                </div>

                {/* Back side (Image) */}
                <div className="absolute inset-0 h-full w-full rounded-xl shadow-xl object-cover [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img className="h-full w-full rounded-xl object-cover shadow-black/40" src={card.imgSrc} alt={card.title} />
                  {/* Overlay that dims the image */}
                  <div className="absolute inset-0 bg-[#25A5A0] opacity-80"></div>

                  {/* SVG Icon that appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img src={card.svgIcon} alt="SVG Icon" className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NousChoisir;
