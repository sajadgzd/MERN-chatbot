import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>
    (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/shop'}>Shop</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )


export default Header;
