import {Register} from './components/Register'
import { Login } from './components/Login';
import {Routes,Route} from 'react-router-dom'
import { Upload } from './components/Upload';
import { Home } from './components/Home';
import { Context } from './components/Context';
import { FilterPics } from './components/Filterpics';
import { View } from './components/View';
import { NavigationBar } from './components/Navbar';
import {Logout} from './components/Logout'
import { Profile } from './components/Profile';
function App() {
  return (
    
    <div>
          
          <Context>
            <Routes>
              <Route path="/" element={<><NavigationBar/><Home/></>}/>
              <Route path="/filterpics" element={<><NavigationBar/><FilterPics/></>}/>
              <Route path="/register" element={<><NavigationBar/><Register/></>}/>
              <Route path="/login" element={<><NavigationBar/><Login/></>}/>
              <Route path="/upload" element={<><NavigationBar/><Upload/></>}/>
              <Route path="/view" element={<><NavigationBar/><View/></>}/>
              <Route path="/logout" element={<><NavigationBar/><Logout/></>}/>
              <Route path="/profile" element={<><NavigationBar/><Profile/></>}/>
            </Routes>
          </Context>
    </div>
  );
}

export default App;
