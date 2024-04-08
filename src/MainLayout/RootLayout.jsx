import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <>
        <header className=" ">
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
