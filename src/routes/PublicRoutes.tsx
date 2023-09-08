import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import LoginPage from "../pages/auth/login";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
