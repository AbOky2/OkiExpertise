/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'

function ContactForm() {
    const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
<section
id='contact'
      ref={scrollRef} 
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background décoratif avancé */}
      <div className="absolute inset-0">
        {/* Orbes lumineux */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#25A5A0]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2CC2BA]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#25A5A0]/10 rounded-full blur-2xl"></div>
        
        {/* Particules flottantes */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#25A5A0]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(37, 165, 160, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(37, 165, 160, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-[#25A5A0] font-semibold mb-6 tracking-wider uppercase text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contactez-nous
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-white">
              Parlons de votre
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#25A5A0] via-[#2CC2BA] to-[#25A5A0] bg-clip-text text-transparent">
              projet ensemble
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Notre équipe d&apos;experts est là pour vous accompagner dans tous vos projets comptables et financiers.
          </motion.p>
        </motion.div>

        {/* Formulaire de contact moderne */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Effet de lueur */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#25A5A0]/10 via-transparent to-[#2CC2BA]/10 rounded-3xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              {/* Ligne 1: Nom et Prénom */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Nom *
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25A5A0] focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="Votre nom"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Prénom *
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25A5A0] focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="Votre prénom"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
                </motion.div>
      </div>

              {/* Ligne 2: Email et Téléphone */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Email *
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#25A5A0] transition-colors duration-300" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25A5A0] focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="votre@email.com"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Téléphone
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-[#25A5A0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25A5A0] focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/10"
                      placeholder="+33 6 12 34 56 78"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
                </motion.div>
      </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Message *
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25A5A0] focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/10 resize-none"
                    placeholder="Décrivez-nous votre projet ou vos besoins..."
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Bouton d'envoi */}
              <motion.div
                className="flex justify-center pt-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative px-12 py-4 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] text-white font-bold rounded-2xl shadow-2xl overflow-hidden group transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-[#25A5A0]/25 hover:shadow-2xl'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Envoi en cours...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Message envoyé !</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </form>

            {/* Message de statut */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-300 text-center"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
                  <span>Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Informations de contact */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: "Téléphone",
              info: "+33 7 51 51 66 42",
              link: "tel:+33751516642"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Email",
              info: "contact@oki-expertise.fr",
              link: "mailto:contact@oki-expertise.fr"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Adresse",
              info: "Paris, Île-de-France",
              link: "#"
            }
          ].map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#25A5A0] to-[#2CC2BA] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{contact.info}</p>
      </div>
      </div>
        
              {/* Effet de lueur au hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#25A5A0]/20 to-[#2CC2BA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm