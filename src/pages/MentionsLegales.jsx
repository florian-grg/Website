import React from "react";
import Seo from "../components/Seo";

const MentionsLegales = () => (
  <>
    <Seo title="Florian GIURGIU — Mentions légales" description="Mentions légales du site de Florian GIURGIU." />
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 text-center">Mentions légales</h1>
        <div className="space-y-6 text-black bg-white rounded-2xl border border-slate-100 shadow p-6">
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">Éditeur du site</h2>
            <p>Florian GIURGIU</p>
            <p>Email : florian.giurgiu3@gmail.com</p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">Hébergement</h2>
            <p>GitHub Pages</p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce site sont la propriété exclusive de Florian GIURGIU, sauf mention contraire.
            </p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">Protection des données</h2>
            <p>
              Ce site ne collecte pas de données personnelles sans consentement.
            </p>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-2 text-black">Contact</h2>
            <p>
              Pour toute question, contactez-moi à l'adresse ci-dessus.
            </p>
        </div>
        </div>
      </div>
    </section>
  </>
);

export default MentionsLegales;
