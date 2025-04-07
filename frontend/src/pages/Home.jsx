import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#0284C7]">
          Bem-vindo ao <span className="text-[#F43F5E]">ReviewWatcher</span>
        </h1>
        <p className="text-lg text-[#374151]">
          Monitore avaliações, receba notificações em tempo real e acompanhe a
          reputação dos seus negócios com facilidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link
            to="/login"
            className="px-6 py-3 bg-[#0284C7] text-white rounded-lg text-lg hover:bg-[#0369A1] transition"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 border border-[#0284C7] text-[#0284C7] rounded-lg text-lg hover:bg-[#E0F2FE] transition"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  )
}
