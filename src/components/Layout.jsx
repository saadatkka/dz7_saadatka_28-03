import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/todo'>ToDo</Link>
                        </li>
                        <li>
                            <Link to='/form'>Form</Link>
                        </li>
                        <li>
                            <Link to='/slider'>Slider</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet/>
            <footer>FOOTER</footer>
        </div>
    );
};

export default Layout;