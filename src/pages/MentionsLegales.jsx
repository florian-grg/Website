import React from "react";
import Seo from "../components/Seo";

const MentionsLegales = () => (
  <>
    <Seo title="Mentions légales | Florian GIURGIU" description="Mentions légales du site de Florian GIURGIU." />
    <div className="max-w-2xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Mentions légales</h1>
      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Éditeur du site</h2>
          <p>Florian GIURGIU</p>
          <p>SIRET : [à compléter]</p>
          <p>Adresse : [à compléter]</p>
          <p>Email : florian.giurgiu3@gmail.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Hébergement</h2>
          <p>[Nom de l'hébergeur à compléter]</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site sont la propriété exclusive de Florian GIURGIU, sauf mention contraire.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Protection des données</h2>
          <p>
            Ce site ne collecte pas de données personnelles sans consentement.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-blue-700">Contact</h2>
          <p>
            Pour toute question, contactez-moi à l'adresse ci-dessus.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default MentionsLegales;
