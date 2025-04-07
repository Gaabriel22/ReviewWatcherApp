import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { loginUser } from "../api/authApi"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const res = await loginUser({ email, password })
      login(res.token)
      navigate("/")
    } catch (err) {
      setError("Credenciais inválidas")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="../../assets/ReviewWatcherApp.png"
            alt="Logo"
            className="h-12"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-[#374151] mb-6">
          Acesse sua conta
        </h2>

        {error && (
          <p className="text-[#F43F5E] text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#374151] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#374151] mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-[#0284C7] text-white font-semibold hover:bg-[#0369a1] transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-[#374151]">
          Não tem uma conta?{" "}
          <a
            href="/register"
            className="text-[#0284C7] font-medium hover:underline"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  )
}
