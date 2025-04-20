import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"

function AppWrapper() {
  const location = useLocation()
  const publicPaths = ["/", "/login", "/register"]
  const hideNavbar = publicPaths.includes(location.pathname)

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default function AppRoutes() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}
