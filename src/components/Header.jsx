"use client"

import { useState } from "react"
import { Link } from "react-router-dom"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="font-instrument relative text-[#775e5e] h-20 flex items-center px-4 xl:px-8 mt-4 font-light">
      {/* Menú desktop - izquierdo */}
      <div className="hidden xl:flex space-x-20 ml-24">
        <Link to="/" className="relative text-base font-light tracking-wider transition-all duration-300 group">
          INICIO
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/cabanas" className="relative text-base font-light tracking-wider transition-all duration-300 group">
          CABAÑAS
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/servicios" className="relative text-base font-light tracking-wider transition-all duration-300 group">
          SERVICIOS
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>


      {/* Botón hamburguesa - móvil */}
      <div className="xl:hidden ml-8">
        <button
          onClick={toggleMenu}
          className="relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#775e5e] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`block w-6 h-px bg-[#775e5e] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-px bg-[#775e5e] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Logo centrado */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <Link to="/">
          <img src="/src/assets/logo1.png" alt="Logo Cabañas VIP" className="h-[80px] xl:h-[100px]" />
        </Link>
        <span className="text-sm font-light"></span>
      </div>

      {/* Botón derecho - desktop */}
      <div className="hidden xl:block ml-auto mr-24">
        <Link to="/reserva"
          className="px-6 py-2 border border-[#775e5e] rounded-full text-sm font-light tracking-wider transition-all duration-300 hover:bg-[#775e5e] hover:text-white hover:scale-105 hover:shadow-lg"
        >
          RESERVÁ ACÁ
        </Link>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Botón cerrar */}
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="block w-6 h-px bg-[#775e5e] rotate-45 absolute"></span>
            <span className="block w-6 h-px bg-[#775e5e] -rotate-45 absolute"></span>
          </button>

          {/* Items del menú */}
          <div className="flex flex-col items-center space-y-8">
            <Link to="/"
              onClick={toggleMenu}
              className="relative text-2xl font-light tracking-widest transition-all duration-300 hover:text-[#775e5e] text-[#775e5e] group"
            >
              INICIO
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/cabanas"
              onClick={toggleMenu}
              className="relative text-2xl font-light tracking-widest transition-all duration-300 hover:text-[#775e5e] text-[#775e5e] group"
            >
              CABAÑAS
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/servicios"
              onClick={toggleMenu}
              className="relative text-2xl font-light tracking-widest transition-all duration-300 hover:text-[#775e5e] text-[#775e5e] group"
            >
              SERVICIOS
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#775e5e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/reserva"
              onClick={toggleMenu}
              className="mt-8 px-8 py-3 border border-[#775e5e] rounded-full text-lg font-light tracking-widest transition-all duration-300 hover:bg-[#775e5e] hover:text-white hover:scale-105"
            >
              RESERVÁ ACÁ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
