'use client'

import { AppFlow } from "@/components/app-flow"
import ClientOnly from "@/components/client-only"

export default function Home() {
  return (
    <ClientOnly>
      <AppFlow />
    </ClientOnly>
  );
}
