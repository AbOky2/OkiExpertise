import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/moving-border';

function SolutionsPersonnalise() {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef} 
      className="bg-gray-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Départ du haut avec une opacité 0
        whileInView={{ opacity: 1, y: 0 }} // Arrive à la position normale avec une opacité 1
        transition={{ duration: 0.8, delay:  0.2 }} // Effet différé pour chaque carte
        viewport={{ once: true }} // Animation se déclenche une fois lorsque la carte est visible

      
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl text-gray-900 font-bold text-center mb-8">Vous avez besoin d&apos;une solution personnalisée?</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Oki Expertise met à votre disposition notre expertise pour vous fournir la solution dont vous avez besoin pour atteindre vos objectifs.
        </p>
        <div className="text-center">
        <Button className="bg-slate-900 border-white text-white">
              <a href="https://wa.me/33751516642">
              Parler à un conseiller</a>
            </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default SolutionsPersonnalise;
