import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/nopage";
import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";
// import './normalize.css';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/"  element={<Home />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
