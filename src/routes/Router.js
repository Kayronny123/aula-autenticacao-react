import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} element={<AdminPage />} />
        <Route path={"/admin"} element={<HomePage />} />
        <Route path={"/users/:id"} element={<ErrorPage />} />
        <Route path={"*"} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
