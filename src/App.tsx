import {Outlet} from 'react-router-dom'
import './App.css'
import CommonLayout from './components/Layout/ComonLayout'
import { generateRoutes } from './utils/generateRoutes'
import { adminSidebarItems } from './routes/adminSidebarItemes'
import { useEffect, useState } from 'react'
import Loading from './components/shared/Loading'

function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("visited");
  }); 

   useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("visited", "true");
        setLoading(false);
      }, 2500); // 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

   if (loading) {
    return <Loading />;
  }
 
console.log(generateRoutes(adminSidebarItems))
  return (
    <>
          <CommonLayout>
             <Outlet/>
          </CommonLayout>
    </>
  )
}

export default App
