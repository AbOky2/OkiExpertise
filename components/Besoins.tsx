import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface MyCardsProps {
  image: string;
  title: string;
  description: string;
}

function MyCards({ image, title, description }: MyCardsProps) {
  // Transformation pour l'effet parallax
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]); // Modifiez [0, -100] pour ajuster l'intensité du parallax

  return (
    <motion.div
      style={{ y: translateY }} // Applique la transformation sur l'axe Y
      whileHover={{ scale: 1.1 }}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
    >
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En Savoir plus
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function Besoins() {
  const scrollRef = useRef();

  return (
    <section ref={scrollRef} className="py-16 bg-blend-darken">
      <h2 className="text-3xl font-bold text-center mb-12">
        Des solutions pour tous les besoins des entreprises
      </h2>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
        <MyCards
          image="/audit.jpg"
          title="Audit"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
        <MyCards
          image="/expertise.jpg"
          title="Expertise Comptable"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
        <MyCards
          image="/conseil.jpg"
          title="Conseil"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
        <MyCards
          image="/risque.png"
          title="Risques et Reglementaires"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
        <MyCards
          image="/finislam.jpg"
          title="Finance Islamique"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
        <MyCards
          image="/tax.jpg"
          title="Tax & Legal"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"
        />
      </div>
    </section>
  );
}

export default Besoins;
