import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Navber from "./Pages/Navber/Navber";
import Footer from "./Pages/Footer/Footer";


const MainRouter = () => {
    return (
        <div>
            <Helmet>
                <title> HomePress-Real-Estate </title>
                <link rel=" " href="https://i.ibb.co/3FQtq9r/Real-Estate-101-removebg-preview.png" />
            </Helmet>
            <Navber/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainRouter;