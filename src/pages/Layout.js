import { Outlet, Link } from "react-router-dom";
import '../style/layout.css'
import Logo from '../img/Logo.svg'
import Cradit from '../img/Cradit.svg'

const Layout = () => {
    return (
        <>
            <nav >
                <div className="StickyHeader ">
                    <div>
                        <img src={Logo} alt="None" className="LogoStyle"></img>
                    </div>
                    <div className="TopMenu">
                        <Link to="/" className="MenuFrame2" >Dashoards</Link>
                        <Link to="/Stacking" className="MenuFrame">Stacking</Link>
                        <Link to="/Market" className="MenuFrame">Market Place</Link>
                    </div>
                    <div className="CreditFrame">
                        <div className="">
                            <img src={Cradit} alt="None"></img>
                        </div>
                        <div>
                            <div className="CreditFont">10,279 USD</div>
                            <div className="CreditFont2">some words</div>
                        </div>
                    </div>
                </div>


            </nav>

            <Outlet />
        </>
    )
};

export default Layout;