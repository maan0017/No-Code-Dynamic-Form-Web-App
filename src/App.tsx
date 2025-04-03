import FormManager from "./components/FormManager";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ExistingForms from "./Pages/ExistingForms";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/createForm" element={<FormManager />} />
      <Route path="/existingForms" element={<ExistingForms />} />
    </Routes>
  );
};

export default App;
