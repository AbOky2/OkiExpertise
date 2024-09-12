import React from 'react'
import { Button } from './ui/button'

function SolutionsPersonnalise() {
  return (
    <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Vous avez besoin d une solution personnalisée?</h2>
            <p className="text-center mb-8 max-w-2xl mx-auto">
              Oki Expertise met à votre disposition notre son expertise dans ce domaine pour vous fournir la solution dont vous avez besoin pour atteindre vos objectifs.
            </p>
            <div className="text-center">
              <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">
                Parler à un conseiller
              </Button>
            </div>
          </div>
        </section>
  )
}

export default SolutionsPersonnalise
