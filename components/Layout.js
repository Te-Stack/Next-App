import Footer from "./Footer"
import Navbar from "./Navbars"

const Layout = ({children}) => {
    return ( 
        <div className="contents">
            <Navbar/>
            { children}
            <Footer/>
        </div>
     );
}
 
export default Layout;