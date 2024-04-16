import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../Scroll/ScrollToTop";
import Spiner from "../Spiner/Spiner";




export default function RootLayout() {
  const navigation = useNavigation()
  return (
    <>
   
      <div>
        <ScrollToTop/>
      <header className="">
            <Navbar/>
        </header>
        <main>
         
            {
              navigation.state ==='loading'? <Spiner/> : <Outlet/>
            }
        </main>
        <footer className=" px-2" >
            <Footer/>
        </footer>
      </div>
    </>
  )
}
