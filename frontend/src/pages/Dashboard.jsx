import Sidebar from "../components/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>
          Bem-vindo ao ReviewWatcher! Aqui você vai monitorar tudo em tempo
          real.
        </p>
        {/* Conteúdo futuro do dashboard entra aqui */}
      </div>
    </div>
  )
}
