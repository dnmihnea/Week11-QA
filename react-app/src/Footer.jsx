const Footer = () => {
    return (
        <footer>
            <nav className="navbar navbar-expand-sm">
                <a
                    className="nav-brand"
                    href="http://www.qa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="logo" src={require("./conk.jpeg")} width="150px" height="150px"></img>
                </a>
            </nav>
        </footer>
    );
}
export default Footer;