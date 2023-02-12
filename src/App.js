import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import DashboardNav from "./components/DashboardNav";

//sides
import Home from "./sides/Home";
import About from "./sides/About";
import Portfolio from './sides/Portfolio';
import Contact from './sides/Contact';
import PrivateRoute from './components/PrivateRoute';
import Downloads from './sides/Download';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <DashboardNav />
        <div className='content-div'>
        <Routes className='content-div'>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/portfolio/:id" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/download" element={<Downloads/>} />

        </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}
export default App;
