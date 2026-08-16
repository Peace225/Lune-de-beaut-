"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function logout() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="inline-flex items-center gap-2 rounded-full border border-[#d9c9c0] px-6 py-3 text-sm text-[#6b574d] transition hover:bg-white"
    >
      <LogOut size={17} />
      Se déconnecter
    </button>
  );
}