import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs/AboutUs';
import ContactUs from './Components/Contactus/ContactUs/ContactUs';
import Gallery from './Components/Gallery/Gallery/Gallery';
import GlobalNetwork from './Components/GlobalNetwork/GlobalNetwork/GlobalNetwork';
import History from './Components/History/History/History';
import Home from './Components/Home/Home/Home';
import Priducts from './Components/Products/Products/Priducts';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/history" element={<History></History>}></Route>
          <Route path="/products" element={<Priducts></Priducts>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/gNetwork" element={<GlobalNetwork></GlobalNetwork>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
