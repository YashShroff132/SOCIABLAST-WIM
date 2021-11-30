import './App.css';
import Login from './login';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Header from './Header';
import { Footer } from './Footer';
import Main from './Main';
import CreateAndJoinRoom from './CreateAndJoinRoom';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './SignUp';
import Home from './Home';
import UserContext from './UserContext';
function App() {
  const [user, setuser] = useState(null);
  return (
    <BrowserRouter>
      <Header title="My Chat App" />
      <UserContext.Provider value={{ user, setuser }}>
        <Routes>
          {<Route exact path="/" element={<Home />} />}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/Main" element={< Main />} />
          <Route path="/CreateRoom" element={<CreateRoom />} />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;