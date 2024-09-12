import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

function Accompagnement() {
  return (
    <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professionnels discutant"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Vous donner les moyens de prendre des décisions financières judicieuses</h2>
                <p className="mb-6">
                  Nous vous accompagnons dans votre croissance pour vous permettre de prendre les meilleures décisions financières. Grâce à notre expertise basée sur des années d expérience, nous vous aidons à optimiser vos ressources et maximiser vos résultats.
                </p>
                <ul className="mb-8">
                  {['Gestion d entreprise', 'Comptabilité', 'Fiscalité', 'Optimisation fiscale & sociale', 'Gestion de patrimoine', 'Transmission d entreprise'].map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2 text-[#2CC2BA]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">
                  Parler à un conseiller
                </Button>
              </div>
            </div>
          </div>
        </section>

  )
}

export default Accompagnement
