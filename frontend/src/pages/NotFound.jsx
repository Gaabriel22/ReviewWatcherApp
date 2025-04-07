import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-[#F43F5E] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#374151] mb-2">
          Página não encontrada
        </h2>
        <p className="text-[#6B7280] mb-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#0284C7] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0369a1] transition"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
