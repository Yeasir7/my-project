import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Link from '../Link/Link';
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] =useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/login", name: "Login" }
      ];      


    return (
        <nav className='container mx-auto bg-yellow-300 p-6'>
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? <ImCross /> : <IoMdMenu /> 

                }
                
            </div>
            <ul className={`md:flex duration-100 bg-yellow-400 text-black p-3 rounded-xl absolute md:static ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;