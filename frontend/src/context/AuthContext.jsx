import { createContext, useContext, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setUser({ ...decoded, token })
      } catch (error) {
        console.error("Erro ao decodificar o token:", error)
        localStorage.removeItem("token")
      }
    }
    setLoading(false)
  }, [])

  const login = (token) => {
    localStorage.setItem("token", token)
    const decoded = jwtDecode(token)
    setUser({ ...decoded, token })
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
