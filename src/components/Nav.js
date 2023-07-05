import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';


function Nav({logo}) {
    const {
        user,
        setUser
    } = useContext(UserContext);

    const userDiv =  <div className="dropdown user">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/avatar.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong className='user-name'> { user!==null ? user : '' } </strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
                            <li>
                                <Link className="dropdown-item" to="/myreservations">
                                    My Reservation
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link className="dropdown-item" to="/login" onClick={() => {
                                    setUser(null);
                                }
                                } >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>;
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded fixed-top" aria-label=" navbar">
            <div className="container-fluid">
                
                <Link className="navbar-brand col-lg-3 me-0" to="/">
                    <img src={logo} alt="Little Lemon" id="logo" />
                </Link>
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse d-lg-flex collapse" id="navbarCollapse">
                    <ul className="navbar-nav col-lg-9 justify-content-lg-center">
                        <li className="nav-item">
                            <Link aria-current="page" className="nav-link" to="/">
                                Home
                            </Link>
                             
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">
                                Menu
                            </Link>   
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to="/reservations">
                                Book
                            </Link>   
                        </li> 
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/order">
                                Order
                            </Link>
                        </li> */}
                        { user ===null && 
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>   
                        } 
                    </ul>
                    <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                        { user !==null && userDiv }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;