import React from 'react'
import Image from 'next/image'


function Partenaires() {
  return (
    <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos partenaires</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['/home.jpg', '/ordre.jpg', '/ordre2.jpg', '/home.jpg', '/home.jpg', '/home.jpg'].map((partner, index) => (
                <Image
                  key={index}
                  src={partner}

                  alt={'partenaires'}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </section>
  )
}

export default Partenaires
