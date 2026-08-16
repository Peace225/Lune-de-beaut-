"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setMessage("Votre mot de passe a été modifié.");

    setTimeout(() => {
      router.push("/compte");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-center font-serif text-4xl text-[#30231e]">
            Nouveau mot de passe
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white disabled:opacity-50"
            >
              {loading ? "Modification..." : "Modifier le mot de passe"}
            </button>
          </form>

          {error && (
            <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {error}
            </p>
          )}

          {message && (
            <p className="mt-5 rounded-xl bg-green-50 p-4 text-sm text-green-700">
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}