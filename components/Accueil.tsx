'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Footer from './Footer'
import Besoins from './Besoins'
import SolutionsPersonnalise from './SolutionsPersonnalise'
import Accompagnement from './Accompagnement'
import Partenaires from './Partenaires'

export function Accueil() {
  return (
    <div className="bg-white">
      <header className="bg-[#1E2738] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <Image
              src="/placeholder.svg?height=50&width=200"
              alt="OkiExpertise Logo"
              width={200}
              height={50}
              className="w-48"
            />
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#1E2738]">
              Parler à un conseiller
            </Button>
          </div>
          <div className="mt-16 mb-32 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Audit - Expertise Comptable - Conseil</h1>
            <p className="text-lg mb-8">
              Oki Expertise accompagne les entreprises et sociétés commerciales dans leurs défis de gestion financière et administrative en matière juridique, légale et managériale.
            </p>
            <Button className="bg-[#2CC2BA] hover:bg-[#25A5A0] text-white">
              Parler à un conseiller
            </Button>
          </div>
        </div>
      </header>

      <main>
        <Besoins/>

        <SolutionsPersonnalise/>
        <Accompagnement/>
        <Partenaires/>
        
       
      </main>
          <Footer/>
      
    </div>
  )
}