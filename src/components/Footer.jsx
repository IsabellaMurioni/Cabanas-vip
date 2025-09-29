"use client"

import { useState } from "react"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  return (
    <footer className="bg-[#fffaf5] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo y texto principal */}
        <div className="text-center ">
          <div className="flex flex-col items-center">
            {/* Logo de cabañas como imagen */}
            <img src="/src/assets/logo1.png" alt="Cabañas VIP" className="w-[140px] h-[140px]" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 mb-8">
          {/* Instagram */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("instagram")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`
              flex items-center gap-3 px-3 py-2 rounded-full border transition-all duration-500 ease-out cursor-pointer
              ${
                hoveredIcon === "instagram"
                  ? "bg-transparent border-[#775e5e] min-w-[140px] scale-105"
                  : "bg-transparent border-transparent w-10 h-10 justify-center hover:scale-110"
              }
            `}
            >
              <div className="w-6 h-6 text-[#775e5e] transition-all duration-300 ease-out hover:text-[#5a4444] flex-shrink-0">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="transform transition-transform duration-300 hover:rotate-12"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              {hoveredIcon === "instagram" && (
                <span className="text-[#775e5e] text-sm font-light whitespace-nowrap animate-fade-in-right">
                  @cabanasvip
                </span>
              )}
            </div>
          </div>

          {/* Teléfono */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("telefono")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`
              flex items-center gap-3 px-3 py-2 rounded-full border transition-all duration-500 ease-out cursor-pointer
              ${
                hoveredIcon === "telefono"
                  ? "bg-transparent border-[#775e5e] min-w-[130px] scale-105"
                  : "bg-transparent border-transparent w-10 h-10 justify-center hover:scale-110"
              }
            `}
            >
              <div className="w-6 h-6 text-[#775e5e] transition-all duration-300 ease-out hover:text-[#5a4444] flex-shrink-0">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="transform transition-transform duration-300 hover:rotate-12"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              {hoveredIcon === "telefono" && (
                <span className="text-[#775e5e] text-sm font-light whitespace-nowrap animate-fade-in-right">
                  11 3030303
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredIcon("email")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div
              className={`
              flex items-center gap-3 px-3 py-2 rounded-full border transition-all duration-500 ease-out cursor-pointer
              ${
                hoveredIcon === "email"
                  ? "bg-transparent border-[#775e5e] min-w-[180px] scale-105"
                  : "bg-transparent border-transparent w-10 h-10 justify-center hover:scale-110"
              }
            `}
            >
              <div className="w-6 h-6 text-[#775e5e] transition-all duration-300 ease-out hover:text-[#5a4444] flex-shrink-0">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="transform transition-transform duration-300 hover:rotate-12"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              {hoveredIcon === "email" && (
                <span className="text-[#775e5e] text-sm font-light whitespace-nowrap animate-fade-in-right">
                  info@cabanasvip.com
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="w-full relative pt-6 text-center">
          <div className="absolute top-0 left-0 w-full h-px bg-[#e5d5c8] animate-draw-line"></div>
          <p className="text-sm text-[#775e5e] font-light">© 2025 - Cabañas vip. Todos los derechos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes draw-line {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.3s ease-out forwards;
        }
        
        .animate-draw-line {
          animation: draw-line 2s ease-out forwards;
        }
      `}</style>
    </footer>
  )
}
