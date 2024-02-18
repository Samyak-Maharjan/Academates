import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
