import './App.css';
import Topbar from './components/topbar';
import Marquee from './components/Marquee';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    
    <Router>
    <div>
    <Topbar/>
    <Marquee/>
    </div>
    
        <div className="container-mt"> 
          <Routes> 
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            
          </Routes>
        </div>
      
    </Router>
    </>
  );
}

export default App;
