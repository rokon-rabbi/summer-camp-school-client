import React from "react";
import { Outlet} from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {


  

  return (
    <div  >
       <NavBar></NavBar>
      <div className="md:min-h-[calc(100vh-160px)]">
        <Outlet ></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
