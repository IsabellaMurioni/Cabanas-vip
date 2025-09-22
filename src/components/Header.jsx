export default function Header(){
    return (
        <nav>
            <div classname= "bg-gray-200 px-6 py-3 flex items-center justify-between">
                <a href="#inicio" className="hover:text-700">INICIO</a>
                <a href="#cabanas" className="hover:text-700">CABAÑAS</a>
                <a href="#servicios" className="hover:text-700">SERVICIOS</a>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <img src="/src/assets/logo.png" alt="Logo Cabañas VIP" className="h-8" />
                <span className="text-sm font-semibold text-gray-700">CABAÑAS VIP</span>
            </div>

            <div>
                <a href="#reserva" className="px-4 py-1 border border-gray-600 rounded-full text-gray-700 text-sm font-semibold hover:bg-gray-700 hover:text-white transition">
                RESERVÁ ACÁ
                </a>
            </div>


        </nav>
    )
}