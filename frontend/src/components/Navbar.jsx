import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-bold text-blue-600">
        ReviewWatcher
      </Link>

      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Registrar
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700">Olá, {user.name}!</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
