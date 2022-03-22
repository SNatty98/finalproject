import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import LearningCenter from "./pages/learningcenter/LearningCenter";
import Account from "./pages/account/Account";
import Algebra from "./pages/algebra/Algebra";
import Number from "./pages/number/Number";
import Ratio from "./pages/ratio/Ratio";
import Trigonometry from "./pages/trigonometry/Trigonometry";
import Probability from "./pages/probability/Probability";
import SetTask from "./pages/settask/SetTask"
import AdminHome from "./pages/adminhome/AdminHome";
import StudentInfo from "./pages/studentinfo/StudentInfo"

function App() {
  const user = true;
  const admin = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/learningcenter"
          element={user ? <LearningCenter /> : <Register />}
        />
        <Route path="/account" element={user ? <Account /> : <Register />} />
        <Route path="/algebra" element={user ? <Algebra /> : <Register />} />
        <Route path="/number" element={user ? <Number /> : <Register />} />
        <Route path="/ratio" element={user ? <Ratio /> : <Register />} />
        <Route
          path="/trigonometry"
          element={user ? <Trigonometry /> : <Register />}
        />
        <Route
          path="/probability"
          element={user ? <Probability /> : <Register />}
        />
        <Route path="/settasks" element={user && admin ? <SetTask /> : <Home />} />
        <Route path="/adminhome" element={user && admin ? <AdminHome /> : <Home />} />
        <Route path="results" element={user && admin ? <StudentInfo /> : <Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
