import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MyCardsProps {
  image: string;
  title: string;
  description: React.ReactNode;  // Correction ici
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
      id='services'
    >
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</div>
      </div>
    </motion.div>
  );
}

function Besoins() {
  const scrollRef = useRef<HTMLElement | null>(null);  // Correction ici

  return (
    <section ref={scrollRef} className="md:p-16 bg-blend-darken">
      <h2
      
       className="text-3xl font-bold text-center mb-12 mt-12">
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
                       • Etablissement des états financiers<br/>
            • Conversion des états financiers en
            norme IFRS<br/>
            • Accompagnement sur mesure (revue
            de procédures, automatisation des
            processus, diagnostic de conformité en
            matière comptable, fiscale et sociale)</p>}
        />
        <MyCards
          image="/conseil.jpg"
          title="Conseil"
          description={<p>• Etude de faisabilité et business plan<br/>
            • Evaluation d’entreprise<br/>
            • Restructuration d’entreprise en
            difficulté<br/>
            • Elaboration de manuel de procédures<br/>
            • Stratégie & Innovation<br/>
            • Système d&apos;Information & Technologies<br/>
            • Gouvernance, risques et contrôle
            Interne<br/>
            • Autres interventions selon des
            procédures convenues</p>}
        />
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
            • Risque SI & Technologie<br/>
            • Conformité réglementaire PCJ, OHADA, COBAC, etc.</p>}
        />
        <MyCards
          image="/finislam.jpg"
          title="Finance Islamique"
          description={<p>• Elaboration du dispositif du contrôle
            interne/manuel de procédure conformement aux normes AAOIFI <br/>
            • Evaluation du dispositif du contrôle
            interne<br/>
            • Audit chariatique contractuel
            • Gouvernance chariatique</p>}
        />
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
            </p>}
        />
      </div>
    </section>
  );
}

export default Besoins;
