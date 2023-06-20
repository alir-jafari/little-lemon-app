import logo from './logo.png';

function Footer() {
    return(
      
        <footer className="footer">
                <div>
                    <img src={logo} alt="Logo" id="logo-footer" />
                </div>
                <div>
                    <p>
                        Copywrite little lemon restaurant
                    </p>
                </div>
        </footer>
    );
}

export default Footer;