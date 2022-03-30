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
import SetTask from "./pages/settask/SetTask";
import AdminHome from "./pages/adminhome/AdminHome";
import StudentInfo from "./pages/studentinfo/StudentInfo";
import MyTasks from "./pages/mytasks/MyTasks";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user }  = useContext(Context);
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
        <Route
          path="/settasks"
          element={user && user.admin ? <SetTask /> : <Home />}
        />
        <Route
          path="/adminhome"
          element={user && user.admin ? <AdminHome /> : <Home />}
        />
        <Route
          path="results"
          element={user && user.admin ? <StudentInfo /> : <Home />}
        />
        <Route path="/mytasks" element={user ? <MyTasks /> : <Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
