import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Auth } from './components/Auth';
import { Protected } from './components/Protected';
import { Nomatch } from './components/Nomatch';
import { Home } from './components/Home';
import { Signup } from './components/Signup';
import './index.css'
import { Navbar } from './components/Navbar';
import { User } from './components/User';
import { Admin } from './components/Admin';
import './index.css'
function App() {
  return (
    <div className="App">
          <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/*' element={<Nomatch/>}/>        
        <Route path='/users' element={<Protected>
          <User/>
        </Protected>}>
          </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Protected><Admin/></Protected>
          
      }/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </Auth>    
    </div>
  );
}

export default App;