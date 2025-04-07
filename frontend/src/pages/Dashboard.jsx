import Sidebar from "../components/Sidebar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      {/* Sidebar ao lado esquerdo */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-[#374151] mb-6">
          Painel de Controle
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-[#0284C7] mb-2">
              Negócios Monitorados
            </h2>
            <p className="text-3xl font-bold text-[#374151]">5</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-[#0284C7] mb-2">
              Avaliações Novas
            </h2>
            <p className="text-3xl font-bold text-[#374151]">12</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold text-[#0284C7] mb-2">
              Palavras-chave Ativas
            </h2>
            <p className="text-3xl font-bold text-[#374151]">8</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#374151] mb-4">
            Últimas Avaliações
          </h3>
          <ul className="text-[#6B7280] space-y-2">
            <li>⭐️⭐️⭐️⭐️ "Excelente atendimento!" - João</li>
            <li>⭐️⭐️⭐️ "Bom, mas pode melhorar." - Ana</li>
            <li>⭐️⭐️⭐️⭐️⭐️ "Super recomendo!" - Carlos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
