/* eslint-disable @next/next/no-img-element */
import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'

interface MyCardsProps {
    image: string;
    title: string;
    description: string;
    details: React.ReactNode;
    index: number;
}

function MyCards({ image, title, description, details, index }: MyCardsProps) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="relative w-full max-w-sm bg-white rounded-2xl p-6 md:p-8 group cursor-pointer overflow-hidden mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -8 }}
        >
            {/* Animated Border SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    rx="14"
                    ry="14"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray="400"
                    strokeDashoffset={isHovered ? "0" : "400"}
                    className="transition-all duration-1000 ease-in-out"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#25A5A0" />
                        <stop offset="50%" stopColor="#2CC2BA" />
                        <stop offset="100%" stopColor="#25A5A0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Static border for non-hovered state */}
            <div className={`absolute inset-0 rounded-2xl border-3 transition-all duration-300 ${
                isHovered ? 'border-transparent' : 'border-gray-100'
            }`}></div>

            {/* Gradient background overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#25A5A0]/5 to-[#2CC2BA]/5 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className='flex flex-col sm:flex-row mb-6 md:mb-8 gap-4 sm:gap-6 items-center sm:items-center text-center sm:text-left'>
                    <motion.div
                        className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-[#25A5A0]/10 to-[#2CC2BA]/10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img className="w-8 h-8 object-contain" src={image} alt="" />
                    </motion.div>
                    <motion.h3 
                        className='text-xl sm:text-2xl font-bold text-[#0D2335] leading-tight'
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                        {title}
                    </motion.h3>
                </div>

                {/* Description */}
                <motion.p 
                    className="mb-4 md:mb-6 text-sm font-normal text-[#758CA0] leading-relaxed text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                    {description}
                </motion.p>

                {/* Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="space-y-3"
                >
                    {details}
                </motion.div>

                {/* Hover effect - Learn more button */}
                <motion.div
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="flex items-center gap-2 text-[#25A5A0] font-semibold text-sm hover:gap-3 transition-all duration-300">
                        En savoir plus
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Enhanced service detail items
function ServiceDetailItem({ icon, text, index }: { icon: string, text: string, index: number }) {
    return (
        <motion.div 
            className='flex p-3 gap-4 mb-2 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
        >
            <div className="flex-shrink-0">
                <img src={icon} width={20} height={20} alt="" className="transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className='text-[#758CA0] text-sm leading-relaxed group-hover:text-[#25A5A0] transition-colors duration-200'>
                {text}
            </div>
        </motion.div>
    );
}

function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const services = [
        {
            image: "/iconAudit.png",
            title: "Audit",
            description: "Notre équipe d'experts effectue des audits opérationnels pour évaluer l'efficacité des processus internes, identifier les inefficacités et recommander des solutions pour améliorer les performances.",
            details: [
                { icon: "compta1.png", text: "Audit comptable et financier" },
                { icon: "audit3.png", text: "Commissariat aux apports" },
                { icon: "audit6.png", text: "Audit des coûts pétroliers" },
                { icon: "audit4.png", text: "Audit qualité" },
                { icon: "audit7.png", text: "Audit stratégique" },
                { icon: "audit4.png", text: "Audit opérationnel" },
                { icon: "audit1.png", text: "Audit et autres missions contractuelles" }
            ]
        },
        {
            image: "/expert.png",
            title: "Expertise Comptable",
            description: "Notre équipe d'experts en comptabilité travaille en étroite collaboration avec nos clients pour assurer une tenue de comptabilité précise et conforme aux normes en vigueur.",
            details: [
                { icon: "expert1.png", text: "Tenu comptable" },
                { icon: "expert2.png", text: "Etablissement des états financiers" },
                { icon: "expert3.png", text: "Conversion des états financiers en norme IFRS" },
                { icon: "expert4.png", text: "Accompagnement sur mesure (revue de procédures, automatisation des processus, diagnostic de conformité en matière comptable, fiscale et sociale, etc)" }
            ]
        },
        {
            image: "/conseil1.png",
            title: "Conseil",
            description: "Nous offrons une gamme complète de services d'expertise comptable pour accompagner nos clients dans la gestion de leur comptabilité et dans l'élaboration de leurs états financiers.",
            details: [
                { icon: "conseil2.png", text: "Etude de faisabilité et business plan" },
                { icon: "conseil3.png", text: "Evaluation d'entreprise" },
                { icon: "conseil4.png", text: "Restructuration d'entreprise en difficulté" },
                { icon: "conseil5.png", text: "Elaboration de manuel de procédures" },
                { icon: "conseil6.png", text: "Stratégie & Innovation" },
                { icon: "conseil7.png", text: "Système d'Information & Technologies" },
                { icon: "conseil8.png", text: "Gouvernance, risques et contrôle Interne" },
                { icon: "conseil5.png", text: "Autres interventions selon des procédures convenues" }
            ]
        },
        {
            image: "/regle1.png",
            title: "Risque et Reglementaires",
            description: "Nous offrons des services spécialisés dans la cartographie des risques, une analyse approfondie des risques auxquels votre entreprise est exposée, afin d'identifier les zones de vulnérabilité et de mettre en place des mesures préventives appropriées.",
            details: [
                { icon: "regle2.png", text: "Elaboration de la cartographie des risques" },
                { icon: "conseil4.png", text: "Stratégie de gouvernance et de gestion des risques COSO (Risques stratégiques, opérationnels, reporting et réglementaires)" },
                { icon: "conseil5.png", text: "Elaboration de manuel de procédures" },
                { icon: "conseil7.png", text: "Risque SI & Technologie" },
                { icon: "conseil8.png", text: "Conformité réglementaire PCG, OHADA, COBAC, etc." }
            ]
        },
        {
            image: "/finance.png",
            title: "Finance Islamique",
            description: "Nous offrons des services d'accompagnement dans la finance islamique, en fournissant une expertise approfondie dans l'analyse des contrats islamiques, la gouvernance islamique et la mise en place de manuels de procédure pour les institutions financières islamiques.",
            details: [
                { icon: "finance1.png", text: "Elaboration du dispositif du contrôle interne/manuel de procédure conformement aux normes AAOIFI" },
                { icon: "finance2.png", text: "Evaluation du dispositif du contrôle interne" },
                { icon: "finance3.png", text: "Audit chariatique contractuel" },
                { icon: "finance5.png", text: "Gouvernance chariatique" }
            ]
        },
        {
            image: "/legal.png",
            title: "Tax & Legal",
            description: "Nous proposons des services spécialisés dans l'accompagnement déclaratif pour vous aider à remplir correctement et en temps voulu toutes vos obligations fiscales.",
            details: [
                { icon: "legal1.png", text: "Fiscalité des Entreprises" },
                { icon: "legal2.png", text: "Fiscalité individuelle" },
                { icon: "legal3.png", text: "Fiscalité et obligations déclaratives" },
                { icon: "legal4.png", text: "Revue fiscale" },
                { icon: "audit3.png", text: "Audit et contentieux fiscal" },
                { icon: "conseil5.png", text: "conseil juridique" },
                { icon: "legal5.png", text: "Restructuration d'entreprises et de groupes de sociétés (fusion, acquisition, rapprochement d'entreprises)" }
            ]
        }
    ];

    return (
        <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0D2335] to-[#25A5A0] bg-clip-text text-transparent px-4'>
                        Notre offre de services
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#25A5A0] to-[#2CC2BA] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {services.map((service, index) => (
                        <MyCards
                            key={index}
                            index={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            details={
                                <div className="space-y-1">
                                    {service.details.map((detail, detailIndex) => (
                                        <ServiceDetailItem
                                            key={detailIndex}
                                            icon={detail.icon}
                                            text={detail.text}
                                            index={detailIndex}
                                        />
                                    ))}
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services 