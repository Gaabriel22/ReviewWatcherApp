import { useEffect } from "react"

export default function Settings() {
  useEffect(() => {
    document.title = "Configurações | ReviewWatcher"
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Configurações</h1>
      <p className="text-gray-600">
        Em breve você poderá editar suas preferências de notificação,
        informações da conta e outras opções.
      </p>

      <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <p className="text-gray-500 italic">
          Área de configurações ainda em desenvolvimento...
        </p>
      </div>
    </div>
  )
}
