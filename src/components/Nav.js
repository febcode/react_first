function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li>{props.first}</li>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;