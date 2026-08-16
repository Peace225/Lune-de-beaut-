"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  User,
  Package,
  Heart,
  MapPin,
  LogOut,
  ChevronRight,
  Settings,
  ArrowRight
} from "lucide-react";

const menuItems = [
  {
    title: "Mes commandes",
    description: "Consultez l'historique de vos achats",
    icon: Package,
    href: "#commandes",
  },
  {
    title: "Mes favoris",
    description: "Retrouvez vos produits préférés",
    icon: Heart,
    href: "#favoris",
  },
  {
    title: "Mes adresses",
    description: "Gérez vos adresses de livraison",
    icon: MapPin,
    href: "#adresses",
  },
  {
    title: "Paramètres",
    description: "Modifiez vos informations",
    icon: Settings,
    href: "#parametres",
  },
];

// Animations - CORRIGÉ VERCEL
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } as const
  },
};

export default function ComptePage() {
  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 pb-24 pt-36 selection:bg-[#a98265] selection:text-white">
      <motion.div 
        className="mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HEADER */}
        <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a98265]">
            Espace Privilège
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-[#30231e]">
            Mon compte
          </h1>
          <p className="mt-4 max-w-xl text-[#77665d] text-sm md:text-base leading-relaxed mx-auto md:mx-0">
            Gérez vos informations personnelles, suivez vos commandes et personnalisez votre expérience Lune de Beauté.
          </p>
        </motion.div>

        {/* PROFIL VIP CARD */}
        <motion.section variants={itemVariants} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#fdfbf9] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#eadbd1]/50 md:p-10">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <User size={150} />
          </div>
          
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between z-10">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#eadbd1] to-[#f4ebe5] text-[#a98265] shadow-inner">
                <User size={38} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#a98265] font-medium mb-1">
                  Bienvenue
                </p>
                <h2 className="font-serif text-3xl text-[#30231e]">
                  Votre espace
                </h2>
                <p className="mt-2 text-sm text-[#77665d]">
                  Connectez-vous pour accéder à vos avantages exclusifs.
                </p>
              </div>
            </div>

            <Link
              href="/connexion"
              className="group flex items-center justify-center gap-2 rounded-full bg-[#2f241f] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#2f241f]/20 transition-all duration-300 hover:bg-[#a98265] hover:shadow-[#a98265]/20 hover:-translate-y-0.5"
            >
              Se connecter
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.section>

        {/* MENU COMPTE (GRID) */}
        <motion.section variants={itemVariants} className="mt-10 grid gap-5 md:grid-cols-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-[#eadbd1] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#faf7f5] text-[#a98265] transition-colors duration-300 group-hover:bg-[#a98265] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-[#30231e] transition-colors group-hover:text-[#a98265]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#77665d]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={20}
                  className="text-[#d9c9c0] transition-all duration-300 group-hover:text-[#a98265] group-hover:translate-x-1"
                />
              </Link>
            );
          })}
        </motion.section>

        {/* SECTION COMMANDES (EMPTY STATE PREMIUM) */}
        <motion.section
          variants={itemVariants}
          id="commandes"
          className="mt-12 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#eadbd1]/50 md:p-10"
        >
          <div className="flex items-center justify-between border-b border-[#faf7f5] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#a98265]">
                Historique
              </p>
              <h2 className="mt-2 font-serif text-3xl text-[#30231e]">
                Mes commandes
              </h2>
            </div>
            <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#faf7f5] text-[#a98265]">
              <Package size={22} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#eadbd1] bg-[#faf7f5]/50 px-6 py-16 text-center transition-colors hover:bg-[#faf7f5]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm mb-6 text-[#d9c9c0]">
              <Package size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-[#30231e]">
              Aucune commande pour le moment
            </h3>
            <p className="mt-3 max-w-md text-sm text-[#77665d] leading-relaxed">
              Votre historique d&apos;achats est vide. Explorez notre catalogue pour découvrir nos essentiels beauté et soins d&apos;exception.
            </p>
            <Link
              href="/produits"
              className="mt-8 rounded-full bg-white border border-[#eadbd1] px-8 py-3 text-sm font-medium text-[#30231e] shadow-sm transition-all hover:bg-[#a98265] hover:text-white hover:border-[#a98265]"
            >
              Découvrir nos produits
            </Link>
          </div>
        </motion.section>

        {/* AUTRES SECTIONS */}
        <motion.div variants={itemVariants} className="mt-8 grid gap-8 md:grid-cols-2">
          
          {/* FAVORIS */}
          <section id="favoris" className="rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#eadbd1]/50 flex flex-col justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#faf7f5] text-[#a98265]">
                <Heart size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-[#30231e]">Mes favoris</h2>
                <p className="mt-2 text-sm text-[#77665d] leading-relaxed">
                  Retrouvez ici les produits que vous avez mis de côté.
                </p>
              </div>
            </div>
            <button className="mt-6 self-start text-sm font-medium text-[#a98265] hover:text-[#30231e] transition-colors flex items-center gap-1">
              Gérer mes favoris <ChevronRight size={16} />
            </button>
          </section>

          {/* ADRESSES */}
          <section id="adresses" className="rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#eadbd1]/50 flex flex-col justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#faf7f5] text-[#a98265]">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-[#30231e]">Mes adresses</h2>
                <p className="mt-2 text-sm text-[#77665d] leading-relaxed">
                  Gérez vos adresses de facturation et de livraison.
                </p>
              </div>
            </div>
            <button className="mt-6 self-start text-sm font-medium text-[#a98265] hover:text-[#30231e] transition-colors flex items-center gap-1">
              Ajouter une adresse <ChevronRight size={16} />
            </button>
          </section>

        </motion.div>

        {/* DÉCONNEXION */}
        <motion.div variants={itemVariants} className="mt-16 mb-8 flex justify-center">
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#77665d] transition-all hover:text-[#cf4a4a] hover:bg-[#cf4a4a]/10"
          >
            <LogOut size={18} className="transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
            Se déconnecter
          </button>
        </motion.div>

      </motion.div>
    </main>
  );
}