import React, { useState } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Booking from "./pages/Booking";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="bg-[#f4e3d0] h-full w-full">
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;





// import About from "./components/About";
// import Carousel from "./components/Carousel";
// import Destinations from "./components/Destinations";
// import Footer from "./components/Footer";
// import Search from "./components/Search";
// import Selects from "./components/Selects";

{
  /* <Route path="/destination" element={<Destinations/>}/>
<Route path="/book" element={<Search/>}/>
<Route path="/travel" element={<Selects/>}/>
<Route path="/view" element={<Carousel/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/footer" element={<Footer/>}/> */
}

{
  /* <Home/> */
}
{
  /* <Destinations/>
  <Search/>
  <Selects/>
  <Carousel/>
  <About/>
  <Footer/> */
}

{
  /* <Signin/> */
}
