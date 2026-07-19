import { Routes, Route } from "react-router";

import Home from "../components/Home";
import Shop from "../components/Shop";
import About from "../components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
