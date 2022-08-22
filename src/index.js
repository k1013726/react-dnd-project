import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashoard  from "./pages/Dashoard ";
import Stacking from "./pages/Stacking";
import Market from "./pages/Market_Place";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashoard  />} />
          <Route path="Stacking" element={<Stacking />} />
          <Route path="Market" element={<Market />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);