import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2f241f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Section Marque */}
          <div>
            <h2 className="font-serif text-3xl">Lune de Beauté</h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Révélez votre éclat naturel grâce à une expérience beauté douce,
              élégante et authentique.
            </p>
          </div>

          {/* Section Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <Link href="/produits" className="hover:text-white transition-colors">Produits</Link>
              <Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/conseils" className="hover:text-white transition-colors">Conseils</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Section Informations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Informations
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/livraison" className="hover:text-white transition-colors">Livraison</Link>
              <Link href="/cgv" className="hover:text-white transition-colors">Conditions générales</Link>
              <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Section Réseaux Sociaux */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Nous suivre
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://wa.me/2250711259816" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-7 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Lune de Beauté. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}