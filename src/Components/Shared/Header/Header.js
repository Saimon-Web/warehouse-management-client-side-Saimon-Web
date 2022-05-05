import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../image/logo.webp'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Social from '../../Auhtentication/Social/Social';
const Header = () => {
    const [user] = useAuthState(auth);
    
    const logout = () => {
        signOut(auth);
      };
    return (
      <div>
            <nav class="navbar navbar-expand-lg  navbar-light bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blog">Blog</Link>
                            </li>
                            
                            {
                                user&& <>
                                <li class="nav-item">
                                <Link class="nav-link" to="/additem">AddItem</Link>
                            </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/manageitem">ManageItem</Link>
                            </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/myitem">MyItem</Link>
                            </li>
                                </>

                            }
                            {
                                user ? <li class="nav-item">
                                    <Link class="nav-link" onClick={logout} to="/login">Log Out</Link>
                                </li>
                                    :
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">Login</Link>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>

            

    </div>

    






      
    );
};

export default Header;