'use client'

import { AppFlow } from "@/components/app-flow"

export default function Home() {
  return (
    <div suppressHydrationWarning className="min-h-screen bg-background">
      <AppFlow />
    </div>
  );
}
