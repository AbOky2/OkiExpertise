import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'

function Besoins() {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <motion.section
    // style={{ scaleX: scrollYProgress }}
     className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Des solutions pour tous les besoins des entreprises</h2>


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        <img className="rounded-t-lg" src="/home.jpg" alt="" />
    </a>
    <div className="p-5 hover:mt-4">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        {/* {['Comptabilité', 'Audit', 'Conseil', 'Accompagnement', 'Juridique'].map((service, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <Image
                src={`/home.jpg`}
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
        ))} */}
      </div>
  </motion.section>
  )
}

export default Besoins
