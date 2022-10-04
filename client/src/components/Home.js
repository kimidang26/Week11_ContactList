import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
    return (
        <>
        <div className="navigation"> 
        <br></br>
            <Link to=""> Home Page</Link>
        <br></br>
        <br></br>
            <Link to="/contact"> Contact</Link>
        <br></br>
        {/* <br></br>
            <Link to="/Individuals"> Individual Species Information</Link>
        <br></br>
         */}
            {/* <Routes>
              <Route path='/species' element={<Species />}></Route>
          </Routes> */}
        </div>
        </>
    );
};

export default Home;
