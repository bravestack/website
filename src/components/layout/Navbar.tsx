import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#conheca", label: "Conheça" },
  { href: "#cidade", label: "Na cidade" },
  { href: "#dashboard", label: "Dashboard" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-[var(--shadow-xs)]"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-display font-extrabold text-2xl tracking-tight text-ink">
            Explore
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-neutral-600 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#qrcode">
            <Button variant="primary" iconLeft={<Smartphone className="w-[18px] h-[18px]" />}>
              Baixe o app
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-neutral-200 shadow-[var(--shadow-md)]"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-neutral-600 hover:text-ink py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#qrcode" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="primary"
                className="w-full mt-2"
                iconLeft={<Smartphone className="w-[18px] h-[18px]" />}
              >
                Baixe o app
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
