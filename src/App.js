import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Pages/Layout/Navbar';
import Footer from './Pages/Layout/Footer';
function App() {
  
  document.title = 'Histay'

  return (
    <Router>
     
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  
  </Router>
  );
}

export default App;
