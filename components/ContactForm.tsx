import { motion } from 'framer-motion'
import React, { useRef } from 'react'
function ContactForm() {
    const scrollRef = useRef(null);

  return (
<section
id='contact'
      ref={scrollRef} 
      className="bg-gray-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Départ du haut avec une opacité 0
        whileInView={{ opacity: 1, y: 0 }} // Arrive à la position normale avec une opacité 1
        transition={{ duration: 0.8, delay:  0.2 }} // Effet différé pour chaque carte
        viewport={{ once: true }} // Animation se déclenche une fois lorsque la carte est visible

      
        className="container mx-auto px-4"
      >
        <h2 className="md:text-5xl text-3xl text-gray-900 font-bold text-center mb-8">Contactez-nous  </h2>
                


  <form className="">
    <div className='grid md:grid-cols-3 grid-cols-1 mx-auto gap-4 mb-4'>

          
      <div className="relative">   
            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Nom</label>

        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 md:p-8 " placeholder="Tapez votre nom"/>
      </div>

      <div className="relative">  
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Prénom</label>

        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 md:p-8 " placeholder="Tapez votre prénom"/>
      </div>

      <div className="">  
        <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <div className='relative'>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 md:p-8 md:mx-1 " placeholder="Tapez votre email"/>
      </div>
      </div>

      <div className="relative">  
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Telephone</label>
        <div className='relative'>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-6 h-6 text-gray-500  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
          </div>
          <input type="text" id="email-address-icon" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4 md:mx-1 md:p-8  " placeholder="Numero de telephone"/>
      </div>
      </div>
        

      </div>
      <div className='mb-4'>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
   placeholder="Tapez votre message "></textarea>
      </div>
   
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>

</form>

</motion.div>
    </section>
  )
}

export default ContactForm