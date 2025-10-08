"use client"
import HeaderBrown from "../components/HeaderBrown"
import Footer from "../components/Footer"
import { Wifi, ChefHat, Home, Fan, Waves, TreePine, Flame, Car, Camera } from "lucide-react"

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#fffaf5] border border-[#d4c4b8] rounded-3xl px-4 py-10 w-[300px] flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-10 h-10 text-[#8f7878]" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-playfair italic text-[#775e5e] text-lg mb-3">{title}</h3>

      {/* Description */}
      <p className="text-[#775e5e] text-sm font-light leading-relaxed max-w-[200px]">{description}</p>
    </div>
  )
}

export default function Servicios() {
  const services = [
    {
      icon: Wifi,
      title: "TV por cable y WIFI",
      description: "Conexión de alta velocidad y canales de cable para tu entretenimiento",
    },
    {
      icon: ChefHat,
      title: "Cocina equipada",
      description: "Cocina completa con todos los utensilios y electrodomésticos necesarios",
    },
    {
      icon: Home,
      title: "Servicio de mucama",
      description: "Servicio de limpieza diario para tu comodidad y confort",
    },
    {
      icon: Fan,
      title: "Ventilador de techo",
      description: "Ventiladores en todas las habitaciones para tu confort",
    },
    {
      icon: Waves,
      title: "Piscina con solarium",
      description: "Piscina climatizada con área de descanso y reposeras",
    },
    {
      icon: TreePine,
      title: "Sector de juegos",
      description: "Área recreativa para niños con juegos y entretenimiento",
    },
    {
      icon: Flame,
      title: "Quincho con parrillas",
      description: "Espacio cubierto con parrilla y mesa para reuniones al aire libre",
    },
    {
      icon: Car,
      title: "Estacionamiento privado",
      description: "Estacionamiento seguro y privado para tu vehículo",
    },
    {
      icon: Camera,
      title: "Sistema de cámaras",
      description: "Vigilancia las 24 horas para tu seguridad y tranquilidad",
    },
  ]

  return (
    <div className="relative flex flex-col font-instrument bg-[#fffaf5] min-h-screen">
    
          <HeaderBrown />

      {/* Services Section */}
      <section className="pt-[100px] pb-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-light text-center text-[#775e5e] mb-12 tracking-wider">NUESTROS SERVICIOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-10 justify-items-center">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
