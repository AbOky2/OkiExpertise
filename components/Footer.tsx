import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
        <footer className="bg-[#1E2738] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Image
              src="/home.jpg"
              alt="OkiExpertise Logo"
              width={160}
              height={40}
              className="w-40"
            />
            <p>&copy; 2024 OkiExpertise. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
      
  )
}

export default Footer
