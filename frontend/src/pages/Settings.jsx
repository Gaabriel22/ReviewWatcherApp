export default function Settings() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-[#374151] mb-6">
          Configurações
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Perfil
            </h3>
            <p className="text-[#6B7280]">
              Em breve você poderá editar suas informações pessoais.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Preferências
            </h3>
            <p className="text-[#6B7280]">
              Aqui você poderá ajustar preferências de notificação e temas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Segurança
            </h3>
            <p className="text-[#6B7280]">
              Em breve será possível alterar sua senha ou gerenciar
              dispositivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
