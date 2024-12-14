import HomePage from "./pages/home-page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-page" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
