import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

function Besoins() {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Des solutions pour tous les besoins des entreprises</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {['Comptabilité', 'Audit', 'Conseil', 'Accompagnement', 'Juridique'].map((service, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <Image
                src={`/placeholder.svg?height=80&width=80`}
                alt={service}
                width={80}
                height={80}
                className="mb-4 mx-auto"
              />
              <h3 className="text-lg font-semibold text-center mb-2">{service}</h3>
              <p className="text-sm text-gray-600 text-center">
                Description brève du service {service.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Besoins
