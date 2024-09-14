import { HoverEffect } from "./ui/card-hover-effect";

export default function Valeurs() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Excellence",
    description:
      `Dans notre cabinet, l'Excellence est bien plus qu'une
      simple aspiration ; c'est une norme que nous nous
      efforçons de surpasser à chaque étape de notre travail.
      Nous croyons fermement que la qualité de nos services
      est la pierre angulaire de notre réputation, et c'est
      pourquoi nous nous engageons à atteindre l'excellence
      dans chaque mission que nous entreprenons`,
    link: "",
  },
  {
    title: "Proximité",
    description:
     `Nous considérons nos clients comme des partenaires
     et nous comprenons l'importance d'une
     communication transparente et ouverte. La
     proximité signifie que nous sommes là pour écouter,
     comprendre et répondre aux besoins spécifiques de
     chaque client.`,
    link: "",
  },
  {
    title: "Efficacité",
    description:
      `Nous investissons dans des processus modernes et des
      technologies de pointe pour garantir une prestation de
      services rapide, précise et adaptée aux besoins
      spécifiques de nos clients. Notre engagement envers
      l'efficacité ne compromet jamais la qualité ; au
      contraire, il renforce notre capacité à offrir des solutions
      rapides et intelligentes, tout en maintenant un niveau
      élevé de professionnalisme`,
    link: "",
  },
  
];