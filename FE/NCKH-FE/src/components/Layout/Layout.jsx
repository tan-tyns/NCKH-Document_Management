import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar/>
      <main className='layout-content'>
         {children}
      </main>

    </div>
  )
}

export default Layout
