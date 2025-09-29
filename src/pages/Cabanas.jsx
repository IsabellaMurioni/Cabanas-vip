"use client"
import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import wifiImg from "../assets/wifi.png"
import tvImg from "../assets/tv.png"
import cocinaImg from "../assets/cocina.png"
import cabana2Img from "../assets/cabana2p.jpg"
import cabana3Img from "../assets/cabana3p.jpg"
import shellImg from "../assets/seashell.png"
import { ChevronLeft, ChevronRight } from "lucide-react"

function CabinCarousel({ images, label }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative aspect-[16/9] bg-[#fffaf5] rounded-lg overflow-hidden group">
      <img src={images[currentIndex] || "/placeholder.svg"} alt={label} className="w-full h-full object-cover" />

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#775e5e] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#775e5e] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Label overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t border-white text-white text-center py-3">
        <span className="text-sm font-light tracking-wider">{label}</span>
      </div>
    </div>
  )
}

export default function Cabanas() {
  const cabin2Images = [
    cabana2Img,
    "/beautiful-beach-sunset-view.jpg",
    "/ocean-view-with-blue-water.jpg",
  ]

  const cabin3Images = [cabana3Img, "/family-cabin-for-4-people.jpg", "/large-cabin-for-6-7-people.jpg"]

  const cabin4Images = ["/cabin-for-3-people.jpg", "/family-cabin-for-4-people.jpg", "/large-cabin-for-6-7-people.jpg"]

  const cabin5Images = ["/cabin-for-3-people.jpg", "/family-cabin-for-4-people.jpg", "/large-cabin-for-6-7-people.jpg"]
  
  const cabin6Images = ["/cabin-for-3-people.jpg", "/family-cabin-for-4-people.jpg", "/large-cabin-for-6-7-people.jpg"]

  return (
    <div className="relative flex flex-col font-instrument bg-[#fffaf5]">
      {/* Hero section with Header */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/playa.jpg')" }}
      >
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>

      {/* Cabaña para 2 personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <CabinCarousel images={cabin2Images} label="2 PERSONAS" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-playfair text-[#775e5e] italic mb-6">Cabaña para 2 personas</h2>
              <div className="w-full h-[1px] bg-[#775e5e]/30 mb-6"></div>
              <p className="text-sm font-light text-[#775e5e] leading-relaxed tracking-wide mb-8">
                Cabaña para 2 personas, perfecta para una escapada romántica o un descanso en pareja. Equipada con cama
                matrimonial, cocina completa, baño privado y un ambiente acogedor. Disfruta de la tranquilidad del lugar
                con todas las comodidades.
              </p>

              <div className="flex gap-6 justify-center md:justify-start">
                <img src={wifiImg} alt="WiFi" className="w-[28px] h-[26px] object-contain" />
                <img src={tvImg} alt="TV" className="w-[30px] h-[30px] object-contain" />
                <img src={cocinaImg} alt="Cocina" className="w-[34px] h-[34px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabaña para 3 personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <CabinCarousel images={cabin3Images} label="3 PERSONAS" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-playfair text-[#775e5e] italic mb-6">Cabaña para 3 personas</h2>
              <div className="w-full h-[1px] bg-[#775e5e]/30 mb-6"></div>
              <p className="text-sm font-light text-[#775e5e] leading-relaxed tracking-wide mb-8">
                Cabaña para 3 personas, perfecta para una escapada romántica o un descanso en pareja. Equipada con cama
                matrimonial, cocina completa, baño privado y un ambiente acogedor. Disfruta de la tranquilidad del lugar
                con todas las comodidades.
              </p>

              <div className="flex gap-6 justify-center md:justify-start">
                <img src={wifiImg} alt="WiFi" className="w-[28px] h-[26px] object-contain" />
                <img src={tvImg} alt="TV" className="w-[30px] h-[30px] object-contain" />
                <img src={cocinaImg} alt="Cocina" className="w-[34px] h-[34px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabaña para 4 personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <CabinCarousel images={cabin2Images} label="2 PERSONAS" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-playfair text-[#775e5e] italic mb-6">Cabaña para 4 personas</h2>
              <div className="w-full h-[1px] bg-[#775e5e]/30 mb-6"></div>
              <p className="text-sm font-light text-[#775e5e] leading-relaxed tracking-wide mb-8">
                Cabaña para 4 personas, perfecta para una escapada romántica o un descanso en pareja. Equipada con cama
                matrimonial, cocina completa, baño privado y un ambiente acogedor. Disfruta de la tranquilidad del lugar
                con todas las comodidades.
              </p>

              <div className="flex gap-6 justify-center md:justify-start">
                <img src={wifiImg} alt="WiFi" className="w-[28px] h-[26px] object-contain" />
                <img src={tvImg} alt="TV" className="w-[30px] h-[30px] object-contain" />
                <img src={cocinaImg} alt="Cocina" className="w-[34px] h-[34px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabaña para 5 personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <CabinCarousel images={cabin3Images} label="3 PERSONAS" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-playfair text-[#775e5e] italic mb-6">Cabaña para 5 personas</h2>
              <div className="w-full h-[1px] bg-[#775e5e]/30 mb-6"></div>
              <p className="text-sm font-light text-[#775e5e] leading-relaxed tracking-wide mb-8">
                Cabaña para 5 personas, perfecta para una escapada romántica o un descanso en pareja. Equipada con cama
                matrimonial, cocina completa, baño privado y un ambiente acogedor. Disfruta de la tranquilidad del lugar
                con todas las comodidades.
              </p>

              <div className="flex gap-6 justify-center md:justify-start">
                <img src={wifiImg} alt="WiFi" className="w-[28px] h-[26px] object-contain" />
                <img src={tvImg} alt="TV" className="w-[30px] h-[30px] object-contain" />
                <img src={cocinaImg} alt="Cocina" className="w-[34px] h-[34px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabaña para 6/7 personas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 pb-[115px] bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <CabinCarousel images={cabin2Images} label="2 PERSONAS" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-playfair text-[#775e5e] italic mb-6">Cabaña para 6/7 personas</h2>
              <div className="w-full h-[1px] bg-[#775e5e]/30 mb-6"></div>
              <p className="text-sm font-light text-[#775e5e] leading-relaxed tracking-wide mb-8">
                Cabaña para 6/7 personas, perfecta para una escapada romántica o un descanso en pareja. Equipada con cama
                matrimonial, cocina completa, baño privado y un ambiente acogedor. Disfruta de la tranquilidad del lugar
                con todas las comodidades.
              </p>

              <div className="flex gap-6 justify-center md:justify-start">
                <img src={wifiImg} alt="WiFi" className="w-[28px] h-[26px] object-contain" />
                <img src={tvImg} alt="TV" className="w-[30px] h-[30px] object-contain" />
                <img src={cocinaImg} alt="Cocina" className="w-[34px] h-[34px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/atardecer.jpg')" }}
        ></div>

        {/* White arch overlay */}
        <div className="relative flex justify-center items-center">
          <div className="bg-[#fffaf5] rounded-t-full pt-16 pb-24 px-8 text-center"
          style={{
            width: "300px",      // ancho del arco
            height: "350px",     // altura del arco
            borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
              paddingTop: "2.5rem",
              paddingBottom: "2rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
        }}>
            {/* Seashell icon */}
            <div className="flex justify-center mb-2">
              <img src={shellImg} alt="Seashell" className="w-[90px] h-[90px] object-contain" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-playfair text-[#775e5e] italic mb-4">Disfrutá de tus vacaciones</h2>

            {/* Subtitle */}
            <p className="text-xs font-light text-[#775e5e] tracking-wider mb-8">
              Hacé tu reserva con anticipación y <br>
              </br>no pierdas tu lugar. Hace click aquí.
            </p>

            {/* Button */}
            <button className="px-8 py-2.5 border border-[#775e5e] text-[#775e5e] rounded-full text-sm font-light tracking-wide hover:bg-[#775e5e] hover:text-white transition-all duration-300">
              RESERVA ACÁ
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
