import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface MyCardsProps {
  image: string;
  title: string;
  description: object;
}

function MyCards({ image, title, description }: MyCardsProps) {
  // Transformation pour l'effet parallax
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100]); // Modifiez [0, -100] pour ajuster l'intensité du parallax

  return (
    <motion.div
      style={{ y: translateY }} // Applique la transformation sur l'axe Y
      whileHover={{ scale: 1.1 }}
      
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
      id='besoins'
    >
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</div>
        {/* <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          En Savoir plus
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}
      </div>
    </motion.div>
  );
}

function Besoins() {
  const scrollRef = useRef();

  return (
    <section ref={scrollRef} className=" md:p-16 bg-blend-darken">
      <h2 className="text-3xl font-bold text-center mb-12">
        Des solutions pour tous les besoins des entreprises
      </h2>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
        <MyCards
          image="/audit.jpg"
          title="Audit"
          description={<p>• Audit comptable et financier <br/>
• Commissariat aux apports <br/>
• Audit des coûts pétroliers <br/>
• Audit qualité<br/>
• Audit stratégique<br/>
• Audit opérationnel<br/>
• Audit et autres missions contractuelles</p>}
        />
        <MyCards
          image="/expertise.jpg"
          title="Expertise Comptable"
          description={<p>• Tenue comptable<br/>
            • Diagnostic d’impact comptable d’un
            changement de règlementation<br/>
            • Optimisation financière<br/>
            • Etablissement des états financiers<br/>
            • Conversion des états financiers en
            norme IFRS<br/>
            • Restructuration comptable et
            financière<br/>
            • Accompagnement sur mesure (revue
            de procédures, automatisation des
            processus, diagnostic de conformité en
            matière comptable, fiscale et sociale)</p>}        />
        <MyCards
          image="/conseil.jpg"
          title="Conseil"
          description={<p>• Etude de faisabilité et business plan<br/>
            • Evaluation d’entreprise<br/>
            • Restructuration d’entreprise en
            difficulté<br/>
            • Elaboration de manuel de procédures<br/>
            • Stratégie & Innovation<br/>
            • Marketing & Commercial<br/>
            • Opérations, Supply Chain & Achats<br/>
            • Système d&apos;Information & Technologies<br/>
            • Gouvernance, risques et contrôle
            Interne<br/>
            • Autres interventions selon des
            procédures convenues</p>}        />
        <MyCards
          image="/risque.png"
          title="Risques et Reglementaires"
          description={<p>• Elaboration de la cartographie des
            risques<br/>
            • Elaboration de manuel de procédures<br/>
            • Stratégie de gouvernance et de gestion
            des risques COSO (Risques stratégiques,
            opérationnels, reporting et
            réglementaires)<br/>
            • Risque SI & Technologique<br/>
            • Cyber-Risque<br/>
            • Conformité réglementaire OHADA,
            CEMAC, COBAC etc.</p>}        />
        <MyCards
          image="/finislam.jpg"
          title="Finance Islamique"
          description={<p>• Elaboration du dispositif du contrôle
            interne/manuel de procédure d’une
            banque islamique<br/>
            • Evaluation du dispositif du contrôle
            interne d’une banque islamique<br/>
            • Audit chariatique contractuel
            • Gouvernance chariatique</p>}        />
        <MyCards
          image="/tax.jpg"
          title="Tax & Legal"
          description={<p>• Fiscalité des Entreprises<br/>
            • Fiscalité individuelle<br/>
            • Fiscalité et obligations déclaratives<br/>
            • Revue fiscale<br/>
            • Audit et contentieux fiscal<br/>
            • conseil juridique<br/>
            • Restructuration d’entreprises et de
            groupes de sociétés (fusion, acquisition,
            rapprochement d’entreprises)<br/>
            • Négociation ou renégociation de
            conventions fiscales internationales</p>}        />
      </div>
    </section>
  );
}

export default Besoins;
