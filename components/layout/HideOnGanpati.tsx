"use client";
import { usePathname } from "next/navigation";

export function HideOnGanpati({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the user is on the ganpati page, return null (hide the elements)
  if (pathname === "/ganpati") {
    return null;
  }

  // On every other page, show the elements normally
  return <>{children}</>;
}