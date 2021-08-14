import Link from "next/link"

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <Link><a>Home</a></Link>
            <Link><a>About</a></Link>
            <Link><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;