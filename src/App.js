import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Tables from './components/Tables';
import Billing from './components/Billing';
import RTL from './components/RTL';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/rtl' element={<RTL />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
