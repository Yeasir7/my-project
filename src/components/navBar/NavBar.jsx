import { list } from 'postcss';
import React from 'react';
import Link from '../Link/Link';

const NavBar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/login", name: "Login" }
      ];      


    return (
        <nav className='container mx-auto'>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;