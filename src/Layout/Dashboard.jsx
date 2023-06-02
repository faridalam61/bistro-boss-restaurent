import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useCart from '../Hooks/useCart'

function Dashboard() {
  const [cart] = useCart();
  return (
<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to='/'>Home</Link></li>
      <li className='inline'><p><Link to='/dashboard/mycart'>My Cart</Link>: {cart.length}</p></li>
    </ul>
  
  </div>
</div>
  )
}

export default Dashboard