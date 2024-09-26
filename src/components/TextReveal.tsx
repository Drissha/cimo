"use client";

import { TextRevealCard } from "@/components/ui/text-reveal-card";

export function TextRevealCardDemo() {
  return (
    <div className="flex justify-center">
      <TextRevealCard
        text="Saya Malas Untuk Mengelola Keuangan"
        revealText="Saya Rajin Untuk Mengelola Keuangan"
      ></TextRevealCard>
    </div>
  );
}
