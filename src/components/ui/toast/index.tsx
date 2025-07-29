"use client"

import { Toaster } from "sonner";

export function InicializarToat() {
  return (
    <Toaster
      position="top-right"
      duration={3000}
      toastOptions={{
        style: {
          backgroundColor: "#f1f1f1",
          color: "#131313",
          borderColor: '#rgba(255,255,255, 0.5)'
        }
      }}
    />
  )
}