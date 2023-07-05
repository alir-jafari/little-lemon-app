
function Footer({logo}) {
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt="Logo" className="logo" />
                </a>
                <p className="col-md-8 mb-0 text-body-secondary">©Copywrite little lemon restaurant</p>
            </footer>
        </div>
    );
}

export default Footer;