// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom"
import { Home, Settings, LogOut } from "lucide-react"

const navItems = [
  { to: "/", label: "Dashboard", icon: <Home size={20} /> },
  { to: "/settings", label: "Configurações", icon: <Settings size={20} /> },
]

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-4">
      <div className="text-2xl font-bold mb-6 text-center">ReviewWatcher</div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-10 border-t pt-4">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-600 px-4 py-2">
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </aside>
  )
}
