import Header from "../components/Header"
import cabanaImg from "../assets/cabana.png";
import piletaImg from "../assets/pileta.png";
import estacionamientoImg from "../assets/estacionamiento.png";
import cabana2Img from "../assets/cabana2.jpg";
import cabana4Img from "../assets/cabana4.jpg";
import cabana6Img from "../assets/cabana6.jpg";


export default function Home() {
  return (
    <div className="relative flex flex-col font-instrument">
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/playa.jpg')" }}
      >
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-center text-[#775e5e] mb-12 tracking-wider">NUESTRAS CABAÑAS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Cabaña 2 personas */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cabana2Img}
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
                  src={cabana4Img}
                  alt="Cabaña para 4 personas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-transparent border-t border-white text-white text-center py-3">
                  <span className="text-sm font-light tracking-wider">4 PERSONAS</span>
                </div>
              </div>
            </div>

            {/* Cabaña 6/7 personas */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={cabana6Img}
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
            <a
              href="#cabanas"
              className="px-6 py-2 border border-[#775e5e] rounded-full text-sm font-light tracking-wider text-[#775e5e] transition-all duration-300 hover:bg-[#775e5e] hover:text-white hover:scale-105 hover:shadow-lg"
            >
              VER CABAÑAS
            </a>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/src/assets/mar.jpg')",
          minHeight: "400px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Cocina equipada */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img src={cabanaImg} alt="Cocina equipada" className="w-[90px] h-[90px]" />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">COCINA EQUIPADA</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                hola hola hola hola
                <br />
                hola hola hola hola hola
              </p>
            </div>

            {/* Piscina con solarium */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img src={piletaImg} alt="Piscina con solarium" className="w-[90px] h-[90px]" />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">PISCINA CON SOLARIUM</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                hola hola hola hola
                <br />
                hola hola hola hola hola
              </p>
            </div>

            {/* Wi-Fi y estacionamiento */}
            <div className="text-center text-white">
              <div className="mb-6 flex justify-center">
                <img src={estacionamientoImg} alt="Wi-Fi y estacionamiento" className="w-[90px] h-[90px]" />
              </div>
              <h3 className="text-lg font-light tracking-wider mb-4">Wi-Fi Y ESTACIONAMIENTO</h3>
              <p className="text-base font-light tracking-wider leading-relaxed">
                hola hola hola hola
                <br />
                hola hola hola hola hola
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#servicios"
              className="px-6 py-2 border border-white rounded-full text-sm font-light tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-105 hover:shadow-lg"
            >
              VER SERVICIOS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
