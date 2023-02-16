import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/mage.png"
import apropos from "../img/biojdr.png"
import contact from "../img/contactjdr.png"
import map from "../img/adressejdr.png"
import tel from "../img/teljdr.png"
import lk from "../img/lkjdr.png"
import discord from "../img/disjdr.png"
import mail from "../img/mailjdr.png"
import jdr from "../img/jdr.png"
import jv from "../img/jv.png"
import livre from "../img/livre.png"
import anime from "../img/anime.png"
import musique from "../img/musique.png"
import dev from "../img/dev.png"
import hobby from "../img/hobbyjdr.png"
import fondjdr from "../img/fondjdr.jpg"
import nav from "../img/navjdr.png"
import fondbox from "../img/divbio.png"
import fondhobby from "../img/divhobby.png"
import Navbar from "./navbareng";


function BioJDReng() {
  
    return (
      <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsivejdr jdr bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
      <Navbar mage={perso}></Navbar><br></br><br></br>
        <div className="relative bg-boxjdr   sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6  rounded-lg">
          <div className="relative mb-8">
            <p className="text-3xl text-red-500 pt-8">About me</p>
            <img className="absolute top-5 right-0 w-16 h-16" src={apropos} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
          <p className="mx-auto max-w-md w-auto text-xl ">
            Interested in computers for a long time, I decided to make my job. Indeed, since my youngest age, I use computers for my free time.<br></br>
            It's been two years now that I've oriented myself in the voice of Web Development, starting as an autodidact and then enrolling in the school Epitech in order to improve myself in this field. <br></br>
            There, I started a passion for the Dev and for the AI, that's why I wish to perform in these two domains in order to live later.<br></br>
            Curious, passionate and serious are the words that best describe me.<br></br>
            I have a driver's license and a car.
          </p><br></br>
        </div>
        <div className="relative bg-boxjdr sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6  rounded-lg">
          <div className="relative mb-8">
            <p className="text-3xl text-red-500 pt-8">Contact me</p>
            <img className="absolute top-5 right-0 w-16 h-16" src={contact} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={map} />
              <p className="text-lg">
                18 rue du Dauphiné<br />
                54500 Vandoeuvre-lès-Nancy
              </p>
            </div>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={tel} />
              <p className="text-xl">07 68 52 36 32</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={lk} />
              <p className="text-xl">@lucasferiel</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={discord} />
              <p className="text-xl">Lugras#5416</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={mail} />
              <p className="text-xl">lucasferiel@hotmail.fr</p>
            </div>
        </div>
        <div className="relative sm:max-w-2xl bg-boxjdr md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 rounded-lg">
          <div className="relative mb-8">
            <p className="text-3xl text-red-500 pt-8">Hobbies</p>
            <img className="absolute top-5 right-0 w-16 h-16" src={hobby} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex flex-row  items-center mb-6">
            <Link to="/jdr"><img className="w-16 h-16 mr-6" src={jdr} /></Link>
              <p className="text-xl">RPG</p>
            </div>
            <div className="flex flex-row  items-center mb-6">
            <Link to="/jv/eng"><img className="w-16 h-16 mr-6" src={jv} /></Link>
              <p className="text-xl">Video games</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={livre} />
              <p className="text-xl">Read</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={anime} />
              <p className="text-xl">Anime</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
            <Link to="/eng"><img className="w-16 h-16 mr-6" src={dev} /></Link>
              <p className="text-xl">Dev</p>
            </div>  
          </div>
        
    </div>
      
    );
  }
  
  export default BioJDReng;
  

  