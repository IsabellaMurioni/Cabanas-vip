"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import emailjs from "@emailjs/browser"

export default function Reserva() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        "service_54gdss3",   // 🔹 Reemplazá con tu Service ID
        "template_a9yu6wh",  // 🔹 Reemplazá con tu Template ID
        {
          title: "Nueva consulta desde la web",
          name: formData.nombre,
          email: formData.email,
          message: `Teléfono: ${formData.telefono}\nConsulta: ${formData.consulta}`,
        },
        "HGD1fFzo8A7Ji62Xa"    // 🔹 Reemplazá con tu Public Key
      )

      setSubmitStatus("success")
      setFormData({ nombre: "", email: "", telefono: "", consulta: "" })

      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative flex flex-col font-instrument bg-[#fffaf5] min-h-screen">
      <Header />

      {/* Formulario de Contacto */}
      <section className="pt-[100px] pb-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light text-[#775e5e] mb-4 tracking-wider">HACÉ TU CONSULTA</h2>
            <p className="text-[#775e5e]/80 font-light leading-relaxed">
              Completá el formulario y nos pondremos en contacto con vos a la brevedad
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-light text-[#775e5e] mb-2 tracking-wide">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#775e5e]/30 rounded-lg bg-white text-[#775e5e] placeholder-[#775e5e]/40 focus:outline-none focus:border-[#775e5e] focus:ring-1 focus:ring-[#775e5e] transition-all duration-300"
                placeholder="Ingresá tu nombre"
              />
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-light text-[#775e5e] mb-2 tracking-wide">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#775e5e]/30 rounded-lg bg-white text-[#775e5e] placeholder-[#775e5e]/40 focus:outline-none focus:border-[#775e5e] focus:ring-1 focus:ring-[#775e5e] transition-all duration-300"
                placeholder="Ingresá tu email"
              />
            </div>

            {/* Campo Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-light text-[#775e5e] mb-2 tracking-wide">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#775e5e]/30 rounded-lg bg-white text-[#775e5e] placeholder-[#775e5e]/40 focus:outline-none focus:border-[#775e5e] focus:ring-1 focus:ring-[#775e5e] transition-all duration-300"
                placeholder="Ingresá tu teléfono"
              />
            </div>

            {/* Campo Consulta */}
            <div>
              <label htmlFor="consulta" className="block text-sm font-light text-[#775e5e] mb-2 tracking-wide">
                Consulta *
              </label>
              <textarea
                id="consulta"
                name="consulta"
                value={formData.consulta}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-[#775e5e]/30 rounded-lg bg-white text-[#775e5e] placeholder-[#775e5e]/40 focus:outline-none focus:border-[#775e5e] focus:ring-1 focus:ring-[#775e5e] transition-all duration-300 resize-none"
                placeholder="Contanos tu consulta o pedido de reserva..."
              />
            </div>

            {/* Mensajes de estado */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-light text-center">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-light text-center">
                  Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                </p>
              </div>
            )}

            {/* Botón de envío */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#775e5e] text-white border border-[#775e5e] rounded-full text-sm font-light tracking-wider transition-colors duration-300 hover:bg-transparent hover:text-[#775e5e] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#775e5e] disabled:hover:text-white"
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR CONSULTA"}
              </button>
            </div>
          </form>

          {/* Información de contacto adicional */}
          <div className="mt-16 pt-12 border-t border-[#775e5e]/20">
            <h3 className="text-xl font-light text-[#775e5e] mb-6 text-center tracking-wider">
              OTRAS FORMAS DE CONTACTO
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <div>
                <p className="text-sm font-light text-[#775e5e]/60 mb-1">Email</p>
                <a
                  href="mailto:Ventashotelesdelacosta@hotmail.com"
                  className="text-[#775e5e] hover:text-[#5a4444] transition-colors duration-300"
                >
                  Ventashotelesdelacosta@hotmail.com
                </a>
              </div>
              <div className="hidden sm:block text-[#775e5e]/30">|</div>
              <div>
                <p className="text-sm font-light text-[#775e5e]/60 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/5491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#775e5e] hover:text-[#5a4444] transition-colors duration-300"
                >
                  +54 9 11 1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
