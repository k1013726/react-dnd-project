import { Outlet, Link } from "react-router-dom";
import '../style/layout.css'
// import img from '../../img/Logo.png'

const Layout = () => {
    return (
        <>
            <nav >
                <div className="sticky_header">
                    <diV className="borderTest">
                    </diV>
                    <diV className="borderTest">
                        <Link to="/" className="wordsytle frame">Dashoard </Link>
                        <Link to="/Stacking" className="wordsytle frame">Stacking</Link>
                        <Link to="/Market" className="wordsytle frame">Market Place</Link>
                    </diV>
                    <diV className="borderTest"></diV>


                </div>


            </nav>

            <Outlet />
        </>
    )
};

export default Layout;