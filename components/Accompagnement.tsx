import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Accompagnement() {
  // Variants pour l'animation de slide
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 }, // Départ hors de l'écran à gauche
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // Glisse à sa position
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Démarre l'animation lorsqu'une partie de l'élément est visible
            variants={slideInVariants} // Utilisation des variants définis
          >
            <Image
              src={`/home.jpg`}
              alt="Professionnels discutant"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInVariants}
          >
            <h2 className="text-3xl font-bold mb-4">
              Vous donner les moyens de prendre des décisions financières judicieuses
            </h2>
            <p className="mb-6">
              Nous vous accompagnons dans votre croissance pour vous permettre de prendre les meilleures décisions
              financières. Grâce à notre expertise basée sur des années d'expérience, nous vous aidons à optimiser vos
              ressources et maximiser vos résultats.
            </p>
            <ul className="mb-8">
              {['Gestion d entreprise', 'Comptabilité', 'Fiscalité', 'Optimisation fiscale & sociale', 'Gestion de patrimoine', 'Transmission d entreprise'].map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg className="w-5 h-5 mr-2 text-[#2CC2BA]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">Parler à un conseiller</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Accompagnement;
