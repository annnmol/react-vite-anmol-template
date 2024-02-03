import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../components/layouts/protecteddLayout";
import Dashboard from "../pages/dashboard";
import About from "../pages/about";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Dashboard />} />

      </Route>
    </Routes>
  )
}

export default ProtectedRoutes