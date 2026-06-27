import { useEffect } from "react"
import Lenis from "lenis"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { MeetSole } from "@/components/sections/MeetSole"
import { Features } from "@/components/sections/Features"
import { CityPresence } from "@/components/sections/CityPresence"
import { UserJourney } from "@/components/sections/UserJourney"
import { Dashboard } from "@/components/sections/Dashboard"
import { DataInsights } from "@/components/sections/DataInsights"
import { CTA } from "@/components/sections/CTA"

function App() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Página 1 - Conheça o Explore */}
        <Hero />
        <MeetSole />
        <Features />

        {/* Página 2 - O Explore faz parte da cidade */}
        <CityPresence />
        <UserJourney />

        {/* Página 3 - Inteligência para transformar o turismo */}
        <Dashboard />
        <DataInsights />

        {/* CTA Final */}
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
