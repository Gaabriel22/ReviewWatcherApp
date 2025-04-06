import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const linkClass = "block px-4 py-2 rounded hover:bg-gray-200 transition"

  return (
    <aside className="w-64 h-screen bg-white border-r p-4">
      <h2 className="text-xl font-semibold mb-6">ReviewWatcher</h2>
      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          Configurações
        </NavLink>
        {/* Adicione mais links conforme forem surgindo as páginas */}
      </nav>
    </aside>
  )
}
