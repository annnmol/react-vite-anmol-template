import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layouts/publicLayout";
import LoginPage from "../pages/auth/login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
