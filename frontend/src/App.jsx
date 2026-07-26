import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import ProtectRoute from "./components/ProtectRoutes";
import Register from "./pages/register";
import Error404 from "./pages/404";

function App() {
  
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
     />

      <Route 
        path="/login"
        element={
          <Login />
        }
      />

      <Route 
        path="/dashboard"
        element={
          <ProtectRoute>
              <Dashboard />
          </ProtectRoute>
      }
      />

      <Route 
        path="/register"
        element={
          <Register />
        }
      />
      <Route
        path="*"
        element={<Error404 />} 
      />

      
    </Routes>

    
  )
}

export default App
