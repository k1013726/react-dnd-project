import { Outlet, Link } from "react-router-dom";
import '../style/layout.css'
import Logo from '../img/Logo.png'
import cradit from '../img/cradit.png'

const Layout = () => {
    return (
        <>
            <nav >
                <div className="sticky_header">
                    <diV className="borderTest Logo">
                        <img src={Logo} alt="none"></img>
                    </diV>
                    <diV className="borderTest ">
                        <Link to="/" className="wordsytle frame" >Dashoards</Link>
                        <Link to="/Stacking" className="wordsytle frame">Stacking</Link>
                        <Link to="/Market" className="wordsytle frame">Market Place</Link>
                    </diV>
                    <diV className="borderTest ">
                        <img src={cradit} alt="none" className="credit"></img>
                        <div className="creditfont">10,279 USD</div>
                    </diV>


                </div>


            </nav>

            <Outlet />
        </>
    )
};

export default Layout;