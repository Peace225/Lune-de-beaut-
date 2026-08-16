"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function ConnexionPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    router.push("/compte");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
              Lune de Beauté
            </p>

            <h1 className="mt-3 font-serif text-4xl text-[#30231e]">
              Connexion
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <div className="text-right">
              <Link
                href="/mot-de-passe-oublie"
                className="text-sm text-[#a98265]"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white transition hover:bg-[#a98265] disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          {error && (
            <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}

          <p className="mt-7 text-center text-sm text-[#77665d]">
            Pas encore de compte ?{" "}
            <Link
              href="/inscription"
              className="font-medium text-[#a98265]"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}