
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../projet/styles/style.css'
import Annonces from './components/Annonces';
import NavBar1 from './components/navBar';
import PresseAdmin from './components/presse';
import NotFound from '../projet/components/nofaound';
import AnnoncesAdd from './components/AnnoncesAdd';
import PresseAdd from './components/PresseAdd';
import AnnoncesEdit from './components/AnnonceEdit';
import PresseEdit from './components/PresseEdit';
 

function AppAdmin() {
  return (
    <div className="App">
      <div className="ct">
      
          <Routes>

              <Route path="/admin/annonces">
                  <Route index element={[<NavBar1/>,<Annonces/>]}/>
                  <Route path="create" element={[<NavBar1/>,<AnnoncesAdd/>]}/>
                  <Route path="edit/:id" element={[<NavBar1/>,<AnnoncesEdit/>]}/>

              </Route>

              <Route path="/admin/presse">
                <Route  index element={[<NavBar1/>,<PresseAdmin/>]}/>
                <Route path="create" element={[<NavBar1/>,<PresseAdd/>]}/>
                <Route path="edit/:code" element={[<NavBar1/>,<PresseEdit/>]}/>
              </Route>

              <Route path="/admin/*" element={<NotFound/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default AppAdmin;
