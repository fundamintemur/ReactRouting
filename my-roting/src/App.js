
import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* Routes bileşeni içerisinde sadece Route kullanın */}
        <Routes>
          {/* Her Route bileşeninin içinde element prop'u ile JSX verilmeli */}
          <Route path="/" exact element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/users"  element={<Users />} />
          {/* <Route path="/user/:id" element={<User/>} />
          */}
          {/* burayı nesting kullanacağımız için kapattık. */}
        </Routes>
        
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
