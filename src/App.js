import {Register} from './components/Register'
import { Login } from './components/Login';
import {Routes,Route, UNSAFE_RouteContext} from 'react-router-dom'
import { Upload } from './components/Upload';
import { Home } from './components/Home';
import { Context, context } from './components/Context';
import { FilterPics } from './components/Filterpics';
import { View } from './components/View';
import {User} from './components/User'
import { NavigationBar } from './components/Navbar';
import {Logout} from './components/Logout'
import { Profile } from './components/Profile';
import { Technology,Blog, News, Walpaper, Sports, Quotes, Pets, Nature, Food,Travel} from './components/Category';
import React from 'react'
import { Followers } from './components/Followers';
import { Following } from './components/Following';

function App() {
  return (
    
    <div>
          <Context>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/view" element={<View/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/upload" element={<Upload/>}/>  
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/filterpics" element={<FilterPics/>}/>
              <Route path="/userfilter" element={<User/>}/>
              <Route path="/followers" element={<Followers/>}></Route>
              <Route path="/following" element={<Following/>}></Route>

            
              <Route path="/category/technology" element={<Technology/>}/>
              <Route path="/category/blog" element={<Blog/>}/>
              <Route path="/category/travel" element={<Travel/>}/>
              <Route path="/category/news" element={<News/>}/>
              <Route path="/category/walpaper" element={<Walpaper/>}/>
              <Route path="/category/food" element={<Food/>}/>
              <Route path="/category/sports" element={<Sports/>}/>
              <Route path="/category/quotes" element={<Quotes/>}/>
              <Route path="/category/pets" element={<Pets/>}/>
              <Route path="/category/nature" element={<Nature/>}/>
            </Routes>
          </Context>
    </div>
  );
}

export default App;
