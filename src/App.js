import logo from './logo.svg';
import Home from './Pages/Home';
import './App.css';
import Header from './Pages/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StegiCovi from './Pages/StegiCov19';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className=''>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stegicov19" element={<StegiCovi/>} />
        { /*<Route path="/message" element={<Contact />} />
        <Route path="/impact" element={<Project />} /> */}
      </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  </Router>
  );
}

export default App;
