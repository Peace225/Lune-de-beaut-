"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour réduire la hauteur de la navbar et ajouter un effet "verre"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/produits" },
    { name: "À propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Conseils", href: "/conseils" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Barre d'annonce Premium */}
      <div className="bg-[#2f241f] text-[#ebd9c8] px-4 py-2 text-center text-xs tracking-widest font-medium uppercase z-[60] relative">
        <span>✨ Livraison offerte à partir de 50 000 FCFA</span>
      </div>

      <header
        className={`fixed left-0 w-full z-50 bg-white transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "top-[32px] bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="group flex flex-col items-center sm:items-start z-50">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-[#2f241f] transition-transform group-hover:scale-105 duration-500">
              Lune de Beauté
            </span>
            <span className="mt-0.5 block text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#a98265]">
              L'éclat à l'état pur
            </span>
          </Link>

          {/* Liens Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-[#453832] transition-colors hover:text-[#a98265]"
              >
                {link.name}
                {/* Soulignement animé au survol */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a98265] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Icônes Actions */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="/compte"
              className="hidden sm:flex relative rounded-full p-2 text-[#453832] transition duration-300 hover:bg-[#f7f1ed] hover:text-[#a98265]"
            >
              <User strokeWidth={1.5} size={22} />
            </Link>

            <Link
              href="/panier"
              className="relative rounded-full p-2 text-[#453832] transition duration-300 hover:bg-[#f7f1ed] hover:text-[#a98265]"
            >
              <ShoppingBag strokeWidth={1.5} size={22} />
              {/* Pastille compteur panier */}
              <span className="absolute top-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#2f241f] text-[8px] font-bold text-white border border-white">
                3
              </span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full p-2 text-[#453832] lg:hidden transition duration-300 hover:bg-[#f7f1ed]"
              aria-label="Menu"
            >
              {open ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
            </button>
          </div>
        </nav>

        {/* Menu Mobile Animé (Framer Motion) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full border-t border-black/5 bg-white/95 backdrop-blur-xl px-6 py-8 shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-6 items-center">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-serif text-[#453832] hover:text-[#a98265] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="w-12 h-[1px] bg-[#ebd9c8] my-4"></div>
                
                <Link
                  href="/compte"
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-[#a98265]"
                >
                  Mon Espace Client
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}