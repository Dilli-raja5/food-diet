import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/langingpage'
import Login from './components/login';
import PrivateRoute from './lib/routing/PrivateRoute';
import Home from './pages/home';
import { useAuth } from './context/AuthContext';
import NotAuthorized from './components/NotAuthorised';
import Register from './components/Register';
import DietitianDashboard from './pages/DietitianDashbord/Dashbord';
import Profile from './pages/DietitianDashbord/Profile';
import UploadedPlans from './pages/DietitianDashbord/Uploaddiet';

function App() {
  const [count, setCount] = useState(0)
  // const {user} = useAuth();
  const user = {role:"admin"}


  const roleRoutes = () => {
    if (user?.role === "admin") {
      return (
        <>
          {/*admin-specific routes */}
          <Route index element={<DietitianDashboard/>} />
          <Route path="dietition-home" element={<DietitianDashboard/>} />
          <Route path="upload-diet" element={<UploadedPlans/>} />
          <Route path="profile" element={<Profile/>} />
          {/* <Route path="create-school-lead" element={<CreateSchoolLead />} /> */}
          
        </>
      );
    }
    if (user?.role === "user") {
      return (
        <>
          {/*user specific routes */}
          <Route index element={<AdminHome />} />
        </>
      );
    }
    return <Route path="*" element={<NotAuthorized/>} />;
  };

  return (
    <>
    
     <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage/>}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Route>
        {/* Protected Routes */}
        {/* <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        >
          {roleRoutes()}
        </Route> */}
        <Route
          path="/home"
          element={
              <Home/>
            
          }
        >
          {roleRoutes()}
        </Route>
        <Route path="*" element={<NotAuthorized />} />
      </Routes>
    </>
  )
}

export default App
