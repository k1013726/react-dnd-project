import { Outlet, Link } from "react-router-dom";
import '../style/layout.css'
import Logo from '../img/Logo.png'
import cradit from '../img/Vector.png'

const Layout = () => {
    return (
        <>
            <nav >
                <div className="sticky_header">
                    <div className="borderTest Logo">
                        <img src={Logo} alt="none"></img>
                    </div>
                    <div className="borderTest ">
                        <Link to="/" className="wordsytle frame" >Dashoards</Link>
                        <Link to="/Stacking" className="wordsytle frame">Stacking</Link>
                        <Link to="/Market" className="wordsytle frame">Market Place</Link>
                    </div>
                    <div className="borderTest ">
                        <div className="credit">
                            <img src={cradit} alt="none" className="img_cradit"></img>
                        </div>
                        <div>
                            <div className="creditfont" >10,279 USD</div>
                            <div className="creditfont">asdasd</div>

                        </div>
                    </div>
                </div>


            </nav>

            <Outlet />
        </>
    )
};

export default Layout;