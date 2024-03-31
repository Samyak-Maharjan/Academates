
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import TeacherDashboard from "./components/TeacherDashboard"; // Import the TeacherDashboard component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> {/* New Route for TeacherDashboard */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
