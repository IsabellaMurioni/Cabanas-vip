"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import cabanaImg from "../assets/cabana.png"
import piletaImg from "../assets/pileta.png"
import estacionamientoImg from "../assets/estacionamiento.png"
import cabana2Img from "../assets/cabana2p-2.jpeg"
import cabana5Img from "../assets/cabana5p-2.jpeg"
import cabana6Img from "../assets/cabana6p-2.jpeg"
import arbolImg from "../assets/arbol.png"
import casaexteriorImg from "../assets/playa.png"
import casaImg from "../assets/home.jpg"
import { Link } from "react-router-dom"

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "¿Cómo hago una reserva?",
      answer:
        "Puedes hacer tu reserva por WhatsApp o completando el formulario de contacto. Te pediremos algunos datos básicos y una seña para confirmar tu estadía.",
    },
    {
      question: "¿Se aceptan mascotas?",
      answer:
        "Sí, aceptamos mascotas en nuestras cabañas. Solo te pedimos que nos avises al momento de la reserva y que mantengas a tu mascota bajo supervisión.",
    },
    {
      question: "¿Hay estacionamiento disponible?",
      answer:
        "Sí, todas nuestras cabañas cuentan con estacionamiento gratuito para nuestros huéspedes. El espacio está incluido en el precio de la estadía.",
    },
    {
      question: "¿Cuánto tiempo antes debo reservar?",
      answer:
        "Recomendamos reservar con al menos 15 días de anticipación, especialmente en temporada alta. Sin embargo, también aceptamos reservas de último momento según disponibilidad.",
    },
  ]

  return (
    <div className="relative flex flex-col font-instrument bg-[#fffaf5] ">
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/exterior3.png')" }}
      >
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-center text-[#775e5e] mb-6 tracking-wider">NUESTRAS CABAÑAS</h2>

          <p className="text-center text-[#775e5e] font-light text-base leading-relaxed max-w-[500px] mx-auto mb-12">
            Contamos con 14 cabañas con capacidad desde 2 hasta 7 personas, con todo el equipamiento necesario para que
            su estadía sea placentera y cómoda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Cabaña 2 personas */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cabana2Img || "/placeholder.svg"}
                  alt="Cabaña para 2 personas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t border-white text-white text-center py-3">
                  <span className="text-sm font-light tracking-wider">2 PERSONAS</span>
                </div>
              </div>
            </div>

            {/* Cabaña 4 personas */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cabana5Img || "/placeholder.svg"}
                  alt="Cabaña para 4 personas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t border-white text-white text-center py-3">
                  <span className="text-sm font-light tracking-wider">5 PERSONAS</span>
                </div>
              </div>
            </div>

            {/* Cabaña 6/7 personas */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cabana6Img || "/placeholder.svg"}
                  alt="Cabaña para 6/7 personas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t border-white text-white text-center py-3">
                  <span className="text-sm font-light tracking-wider">6/7 PERSONAS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/cabanas"
              className="px-6 py-2 border border-[#775e5e] rounded-full text-sm font-light tracking-wider text-[#775e5e] transition-all duration-300 hover:bg-[#775e5e] hover:text-white hover:scale-105"
            >
              VER CABAÑAS
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/exterior2.png')",
          minHeight: "400px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Cocina equipada */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img src={cabanaImg || "/placeholder.svg"} alt="Cocina equipada" className="w-[90px] h-[90px]" />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">COCINA EQUIPADA</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                Cocina completa con todos los  
                <br />
                utensilios y electrodomésticos 
                <br /> necesarios.
              </p>
            </div>

            {/* Piscina con solarium */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img src={piletaImg || "/placeholder.svg"} alt="Piscina con solarium" className="w-[90px] h-[90px]" />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">PISCINA CON SOLARIUM</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                Piscina climatizada con área 
                <br />
                de descanso y reposeras.
              </p>
            </div>

            {/* Wi-Fi y estacionamiento */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img
                  src={estacionamientoImg || "/placeholder.svg"}
                  alt="Wi-Fi y estacionamiento"
                  className="w-[90px] h-[90px]"
                />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">Wi-Fi Y ESTACIONAMIENTO</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                Estacionamiento seguro y 
                <br />
                privado para tu vehículo.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/servicios"
              className="px-6 py-2 border border-white rounded-full text-sm font-light tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-105"
            >
              VER SERVICIOS
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-[45%]">
            <img
              src={casaexteriorImg || "/placeholder.svg"}
              alt="Vista de la cabaña cerca del mar"
              className="w-full h-[400px] rounded-lg object-cover md:ml-16"
            />
          </div>

          {/* Texto a la derecha */}
          <div className="w-full md:w-[45%] text-center">
            <div className="flex flex-col items-center">
              <img src={arbolImg || "/placeholder.svg"} alt="Ícono palma" className="w-[80px] h-[80px] mb-6" />
              <h3 className="text-3xl font-playfair text-[#775e5e] italic mb-2">A solos pasos del mar</h3>
              <p className="text-base font-light text-[#775e5e] leading-relaxed max-w-md">
                Solo 12 cuadras de la playa
              </p>
              <div className="text-center mt-8">
                <a
                  href="https://www.google.com/maps/place/Caba%C3%B1as+Vip/@-37.8403664,-57.5156893,17z/data=!3m1!4b1!4m9!3m8!1s0x9584d0ecc57159cd:0xbfba1e06afabc2b4!5m2!4m1!1i2!8m2!3d-37.8403707!4d-57.5131144!16s%2Fg%2F1vd968d_?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                  className="px-6 py-2 border border-[#775e5e] rounded-full text-sm font-light tracking-wider text-[#775e5e] transition-all duration-300 hover:bg-[#775e5e] hover:text-white hover:scale-105"
                >
                  VER UBICACIÓN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffaf5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light text-center text-[#775e5e] mb-12 tracking-wider">PREGUNTAS FRECUENTES</h2>

          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-[#775e5e]/20">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 px-4 text-left hover:bg-[#775e5e]/5 transition-colors duration-200 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-light text-[#775e5e] tracking-wide">{faq.question}</h3>
                    <span
                      className={`text-[#775e5e] transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-6">
                    <p className="text-[#775e5e]/80 font-light leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="mt-12 py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/exterior4.jpeg')",
          minHeight: "400px",
          backgroundSize: "cover", // asegura que la imagen cubra toda el área
          backgroundPosition: "center", // centra la imagen
        }}
      ></section>
      <Footer />
    </div>
  )
}