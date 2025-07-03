import React from "react";
import { NavBar } from "../Components/NavBar";
import { Mid } from "../Components/Mid";
import { Footer } from "../Components/Footer";

export const Mainpage=()=>{
    return(
    <div className=" bg-[#0E0200] px-7 sm:px-14">
        <NavBar/>
        <Mid/>
        <Footer/>
    </div>
    )
   
}