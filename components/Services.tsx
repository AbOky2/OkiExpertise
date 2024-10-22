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
      
        className=" max-w-sm bg-white border-4 p-5 border-[#c3dbf0]  hover:border-[#2CC2BA] transition-colors duration-300"
        id='services'
      >
        <div className='flex mb-4 '>
            <div> 
                <img className="" src={image} alt="" />
            </div>
            <div className=' flex justify-center items-center md:text-3xl font-semibold'>
            {title}
            </div>            
        </div>
        <div className="">
          <p className="mb-3 text-sm font-normal text-[#758CA0] ">{description}</p>
        </div>

        <div>
            
                {details}
        </div>


      </motion.div>
    );
  }

function Services() {
  return (<>
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
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
                        <img src="compta2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Commissariat aux apports                    
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit des coûts pétroliers             
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta4.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit qualité            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta2.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit stratégique            
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta5.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit opérationnel          
                    </div>
                </div>
                <div className='flex p-2 gap-4 mb-1'>
                    <div>
                        <img src="compta3.png" width={20} height={20} alt="" />
                    </div>
                    <div className='text-[#758CA0] text-sm'>
                    Audit et autres missions contractuelles         
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