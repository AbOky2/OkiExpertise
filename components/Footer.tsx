import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const services = [
    "Expertise Comptable",
    "Audit & Contrôle",
    "Conseil Juridique",
    "Gestion Financière",
    "Déclarations Fiscales",
    "Accompagnement RH"
  ];

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#pourquoiNous" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Paris, Île-de-France"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "+33 7 69 59 12 20"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "contact@okiexpertise.fr"
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background décoratif */}
      <div className="absolute inset-0">
        {/* Orbes lumineux */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#25A5A0]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2CC2BA]/10 rounded-full blur-3xl"></div>
        
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(37, 165, 160, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 165, 160, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section principale */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Section À propos */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image 
                      src="/bgOki.jpg" 
                      className="h-12 w-20 object-cover" 
                      alt="Logo OKI EXPERTISE" 
                      width={80}
                      height={48}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#25A5A0]/20 to-transparent"></div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] bg-clip-text text-transparent">
                    OKI EXPERTISE
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Expert-comptable inscrit à l&apos;ordre des Experts-Comptables de la région Île-de-France. Nous accompagnons les entreprises dans leurs défis de gestion financière et administrative.
                </p>

                {/* Badges de certification */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                    <span className="text-sm font-medium text-[#25A5A0]">Certifié Expert-Comptable</span>
                  </div>
                 
                </div>
              </div>
            </motion.div>

            {/* Section Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Nos Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-[#25A5A0] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#25A5A0] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Section Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Liens Rapides</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#2CC2BA] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-[#2CC2BA] rounded-full group-hover:w-2 transition-all duration-300"></div>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Section Contact */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-lg flex items-center justify-center text-white">
                  {info.icon}
                </div>
                <span className="text-gray-300">{info.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://wa.me/33751516642"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contactez-nous sur WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Section Copyright */}
        <motion.div
          className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; 2025 OKI EXPERTISE. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">Suivez-nous :</span>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#25A5A0] rounded-lg flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
