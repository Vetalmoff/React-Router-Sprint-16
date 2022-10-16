import './App.css';
import Home from './Home';
import Users from './Users/index';
import About from './About';
import Nav from './Nav';
import UserProfile from './UserProfile';

import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='users' element={<Users />} >
        <Route path=":id" element={<UserProfile />} />
        </Route>
        <Route path='about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
