import FormManager from "./components/FormManager";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ExistingForms from "./Pages/ExistingForms";
import AuthPage from "./Pages/AuthPage";
import ErrorPage from "./Pages/ErrorPage";
import { AdminRoute, LoginRoute } from "./helper/AdminRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/auth-login"
        element={
          <LoginRoute>
            <AuthPage />
          </LoginRoute>
        }
      />
      <Route
        path="/create-form"
        element={
          <AdminRoute>
            <FormManager />
          </AdminRoute>
        }
      />
      <Route path="/existing-forms" element={<ExistingForms />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
