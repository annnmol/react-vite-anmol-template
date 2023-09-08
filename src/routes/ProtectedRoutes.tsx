import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../layouts/protecteddLayout";
import Dashboard from "../pages/dashboard";
import About from "../pages/about";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default ProtectedRoutes