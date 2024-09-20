import React from 'react';

function NousChoisir() {
  const cards = [
    {
      title: 'Gain de Temps',
      description: 'Concentrez-vous sur votre activité, nous nous occupons du reste.',
      imgSrc: '/collabo1.jpg',
      text: 'Texte de base 1',
    },
    {
      title: 'Collaborateur dédié',
      description: 'Accompagnement et conseils personnalisés.',
      imgSrc: '/collabo2.jpg',
      text: 'Texte de base 2',
    },
    {
      title: 'Audit, Comptabilité,...',
      description: 'Accompagnement dans toutes vos problématiques du quotidien.',
      imgSrc: '/collabo3.png',
      text: 'Texte de base 3',
    },
    {
      title: 'Tarifs attractifs',
      description: 'Nos honoraires sont compétitifs comparé aux cabinets traditionnels.',
      imgSrc: '/collabo4.jpg',
      text: 'Texte de base 4',
    },
    {
      title: 'Réactivité',
      description: 'Nous sommes disponible, quand vous l\'êtes.',
      imgSrc: '/collabo5.jpg',
      text: 'Texte de base 5',
    },
    {
      title: 'Expertise secteurs ',
      description: 'Nous sommes spécialisés dans de nombreux secteurs d\'activités.',
      imgSrc: '/collabo6.wepb',
      text: 'Texte de base 6',
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center" style={{ backgroundImage: "url('/collabo4.jpg')" }}>
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content layer */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white">Quelques raisons de nous choisir</h1>
        
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group h-96 w-96 [perspective:1000px]">
              {/* Card container with flip effect */}
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front side (Text) */}
                <div className="absolute inset-0 h-full w-full bg-black/40 rounded-xl text-center text-slate-200 [backface-visibility:hidden] flex flex-col items-center justify-center z-10 p-4" >
                <p className="text-base text-start flex">{card.text}</p>
                  <h1 className="text-3xl font-bold mb-8">{card.title}</h1>
                  <p className="text-lg text-gray-500">{card.description}</p>
                </div>
                
                {/* Back side (Image) */}
                <div className="absolute inset-0 h-full w-full rounded-xl shadow-xl object-cover [transform:rotateY(180deg)] [backface-visibility:hidden] opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
                  <img
                    className="h-full w-full rounded-xl object-cover shadow-black/40"
                    src={card.imgSrc}
                    alt={card.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NousChoisir;