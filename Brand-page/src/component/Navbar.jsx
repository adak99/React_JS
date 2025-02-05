import "./css/Navbar.css";

const Navbar = () => {

    return (
        <>
            <div>
                <nav>
                    <div className="logo">
                        <img src="/images/brand_logo.png" alt="logo" />
                    </div>

                    <ul>
                        <li href="#">MENU</li>
                        <li href="#">LOCATION</li>
                        <li href="#">ABOUT</li>
                        <li href="#">CONTACT</li>
                    </ul>

                    <button className="my-btn">LOGIN</button>
                </nav>
            </div>
        </>
    )

};

export default Navbar;