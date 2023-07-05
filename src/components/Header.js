
import Nav from './Nav';

function Header({logo}) {
    return(
        <header className='container'>
            <Nav logo={logo} />
        </header>
    );
}

export default Header;