import React, { useRef } from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

function SolutionsPersonnalise() {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef} 
      style={{ overflowY: "scroll", maxHeight: "100vh" }}
      className="bg-gray-900 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef, once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl text-gray-300 font-bold text-center mb-8">Vous avez besoin d'une solution personnalisée?</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Oki Expertise met à votre disposition notre expertise pour vous fournir la solution dont vous avez besoin pour atteindre vos objectifs.
        </p>
        <div className="text-center">
          <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">
            Parler à un conseiller
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default SolutionsPersonnalise;
