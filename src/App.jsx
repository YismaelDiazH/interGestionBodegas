import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/ui/Sidebar'
import { LifeBuoy, Receipt, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings } from 'lucide-react'
import './App.css'

function App() {
  

  return (
   <main>
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard/>} text="Dashboard" alert/>
      <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" active/>
      <SidebarItem icon={<UserCircle size={20}/>} text="Users"/>
      <SidebarItem icon={<Boxes size={20}/>} text="Inventory"/>
      <SidebarItem icon={<Package size={20}/>} text="Inventory"/>
      <SidebarItem icon={<Receipt size={20}/>} text="Billings"/>
      <hr className='my-3' />
      <SidebarItem icon={<Settings size={20}/>} text="Settings"/>
      <SidebarItem icon={<LifeBuoy size={20}/>} text="help"/>
      
      
      
    </Sidebar>
   </main>
  )
}

export default App
