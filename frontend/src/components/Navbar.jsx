import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        ReviewWatcher
      </Link>

      <nav className="space-x-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Criar Conta
        </Link>
      </nav>
    </header>
  )
}
