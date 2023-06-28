import { Navbar } from "./components/Navbar";
import globalStyles from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { SignUp } from "./pages/SignUp";

const App = () => {
  globalStyles();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
