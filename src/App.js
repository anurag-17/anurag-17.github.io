import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Footer } from './Components/Footer';
import {Home} from './Components/Home'
import {Main} from './Components/Main'
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Services } from './Components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
      <Routes>
       <Route path = "/" element={<Main/>}/>
       <Route path = "/about" element={<About/>}/>
       <Route path = "/contact" element={<Contact/>}/>
       <Route path = "/service" element={<Services/>}/>
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
