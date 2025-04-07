import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../api/authApi"

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(form)
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao registrar.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="../../assets/ReviewWatcherApp.png"
            alt="ReviewWatcher Logo"
            className="h-12"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-[#374151] mb-6">
          Criar Conta
        </h2>
        {error && (
          <p className="text-[#F43F5E] text-sm text-center mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#0284C7] text-white py-3 rounded-xl font-semibold hover:bg-[#0369a1] transition"
          >
            Registrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#374151]">
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="text-[#0284C7] hover:underline font-medium"
          >
            Entrar
          </a>
        </p>
      </div>
    </div>
  )
}
