import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Scroll/ScrollToTop";




export default function RootLayout() {
  return (
    <>
   
      <div>
        <ScrollToTop/>
      <header className="h-16 ">
            <Navbar/>
        </header>
        <main>
         
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
      </div>
    </>
  )
}
