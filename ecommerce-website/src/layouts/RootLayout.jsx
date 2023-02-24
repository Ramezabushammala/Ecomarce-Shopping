import {Outlet} from "react-router-dom";

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav';

function RootLayout() {
  return (
    <div >
        <Header/>
        <Nav/>
            <main className='min-h-[500px] '>
                <Outlet/>
            </main>
        <Footer/>
        
    </div>
  )
}

export default RootLayout