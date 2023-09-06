
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/footer';
import './styles/style.css'
import Contact from './components/contact';
import Presse from './components/presse';
import ChildPresse from './components/presseChild';
import Vendeur from './components/vendeur';
import ChildVendeur from './components/vendeurChild';
import Acheteur from './components/acheteur';
import ChildAcheteur from './components/acheteurChild';
import AcheteurDetails from './components/acheteurDetails';
import Login from '../admin/components/login';
import NotFound from './components/nofaound';
import Cal from './components/calcul';


function App() {
  return (
    <div className="App">
      <div className="ct">
      <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path='/vendeur'>
                  <Route index element={<Vendeur/>}/>
                  <Route path=':code' element={<ChildVendeur/>}/>
              </Route>
              <Route path='/acheteur'>
                  <Route index element={<Acheteur/>}/>
                  <Route path=':code' element={<AcheteurDetails/>}/>
                  <Route path='new' element={<ChildAcheteur/>}/>

              </Route>
              <Route path='/presse'>
                  <Route index element={<Presse/>}/>
                  <Route path=':code' element={<ChildPresse/>}/>
              </Route>
              <Route path="/credit" element={<Cal/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

