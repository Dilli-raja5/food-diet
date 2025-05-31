import TopNav from '../homepage/Navbar'
import SideNav from '../homepage/Sidebar'
import { Outlet } from 'react-router-dom'
// import Loader from '../loader'
// import { useAuth } from '../../lib/Auth'

export default function Home() {

//   const {user} = useAuth();
  
//   if (!user) {
//     return <Loader/> ;
//   }

  return (
    <section className='w-full h-full bg-[#f5f5f5]'>
      <TopNav/>
      <div className='w-full h-[90vh] flex'>
        <SideNav/>
        <main className="flex-grow lg:ml-64">
          <Outlet />
        </main>
      </div>
    </section>
  )
}
