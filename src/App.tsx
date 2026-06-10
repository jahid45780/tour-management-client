import {Outlet} from 'react-router-dom'
import './App.css'
import CommonLayout from './components/Layout/ComonLayout'
import { generateRoutes } from './utils/generateRoutes'
import { adminSidebarItems } from './routes/adminSidebarItemes'

function App() {
 
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
