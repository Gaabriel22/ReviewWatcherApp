import { createContext, useContext, useEffect, useState } from "react"
import jwtDecode from "jwt-decode"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
