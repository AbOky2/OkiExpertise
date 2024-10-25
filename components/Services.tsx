/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react'

interface MyCardsProps {
    image: string;
    title: string;
    description: string;
    details : React.ReactNode;
  }
  
  function MyCards({ image, title, description, details }: MyCardsProps) {
  
    return (
      <motion.div
      
        className=" max-w-sm bg-white border-4 p-9 border-[#F4F9FF]  hover:border-[#2CC2BA] transition-colors duration-300"
        id='services'
      >
        <div className='flex mb-9 gap-6  '>
            <div> 
                <img className="" src={image} alt="" />
            </div>
            <div className=' flex justify-center items-center md:text-3xl font-semibold text-[#0D2335]'>
            {title}
            </div>            
        </div>
        <div className="">
          <p className="mb-3 text-sm font-normal text-[#758CA0] leading-7 px-2 ">{description}</p>
        </div>

        <div>
            
                {details}
        </div>


      </motion.div>
    );
  }

function Services() {
  return (<>
  <h1 className='md:text-5xl font-bold text-center text-3xl mb-7 '>Notre offre de services
  </h1>
    <div className="container mx-auto p-4 grid md:grid-cols-3 gap-4">
        <MyCards
          image="/iconAudit.png"
          title="Audit"
          description="Notre équipe d&#39;experts effectue des audits opérationnels pour évaluer l&#39;efficacité des
processus internes, identifier les inefficacités et recommander des solutions pour améliorer
les performances."
          details={
            <div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta1.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                      Audit comptable et financier <br/>
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Commissariat aux apports                    
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit6.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit des coûts pétroliers             
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit qualité            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit7.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit stratégique            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit opérationnel          
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit1.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit et autres missions contractuelles         
                    </div>
                </div>
          
           
            
            </div>
            }
        />

<MyCards
          image="/expert.png"
          title="Expertise Comptable"
          description="Notre équipe d&#39;experts effectue des audits opérationnels pour évaluer l&#39;efficacité des
processus internes, identifier les inefficacités et recommander des solutions pour améliorer
les performances."
          details={
            <div>
                
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="expert1.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Tenu comptable                    
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="expert2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Etablissement des états financiers             
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="expert3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Conversion des états financiers en norme IFRS           
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="expert4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm w-full'>
                    Accompagnement sur mesure 
                    (revue de procédures, automatisation des processus, diagnostic de conformité en matière comptable, fiscale et sociale)                    </div>
                </div>          
            </div>
            }
        />

<MyCards
          image="/conseil1.png"
          title="Conseil"
          description="Nous offrons une gamme complète de services d&#39;expertise comptable pour accompagner nos
clients dans la gestion de leur comptabilité et dans l&#39;élaboration de leurs états financiers."
          details={
            <div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Etude de faisabilité et business plan <br/>
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Evaluation d’entreprise                   
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Restructuration d’entreprise en difficulté            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Elaboration de manuel de procédures            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil6.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Stratégie & Innovation            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil7.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Système d&apos;Information & Technologies          
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil8.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Gouvernance, risques et contrôle Interne        
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Autres interventions selon des procédures convenues       
                    </div>
                </div>
          
           
            
            </div>
            }
        />

<MyCards
          image="/regle1.png"
          title="Risque et Reglementaires"
          description="Nous offrons des services spécialisés dans la cartographie des risques, une analyse approfondie
des risques auxquels votre entreprise est exposée, afin d&#39;identifier les zones de vulnérabilité et
de mettre en place des mesures préventives appropriées."
          details={
            <div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="regle2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Elaboration de la cartographie des risques <br/>
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="regle3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Elaboration de manuel de procédures                 
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm w-full'>
                    Stratégie de gouvernance et de gestion des risques COSO
                     (Risques stratégiques, opérationnels, reporting et réglementaires)           
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Elaboration de manuel de procédures            
                    </div>
                </div>
               
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil7.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Risque SI & Technologie        
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil8.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Conformité réglementaire PCG, OHADA, COBAC, etc.        
                    </div>
                </div>    
            </div>
            }
        />

<MyCards
          image="/finance.png"
          title="Finance Islamique"
          description="Nous offrons des services d&#39;accompagnement dans la finance islamique, en fournissant une
expertise approfondie dans l&#39;analyse des contrats islamiques, la gouvernance islamique et la mise
en place de manuels de procédure pour les institutions financières islamiques."
          details={
            <div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="finance1.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm w-full'>
                    Elaboration du dispositif du contrôle interne/manuel de procédure conformement aux normes AAOIFI <br/>
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="finance2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Evaluation du dispositif du contrôle interne                 
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="finance3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit chariatique contractuel          
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="finance5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Gouvernance chariatique            
                    </div>
                </div>
               
            </div>
            }
        />

<MyCards
          image="/legal.png"
          title="Tax & Legal"
          description="Nous proposons des services spécialisés dans l&#39;accompagnement déclaratif pour vous aider à
remplir correctement et en temps voulu toutes vos obligations fiscales."
          details={
            <div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="legal1.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Fiscalité des Entreprises <br/>
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="legal2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Fiscalité individuelle                
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="legal3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Fiscalité et obligations déclaratives           
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="legal4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Revue fiscale           
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="audit3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit et contentieux fiscal            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="conseil5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    conseil juridique        
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="legal5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm w-full'>
                    Restructuration d’entreprises et de groupes de sociétés (fusion, acquisition, rapprochement d’entreprises)        
                    </div>
                </div>    
            </div>
            }
        />

        

        
        </div>

       
        </>
  )
}

export default Services