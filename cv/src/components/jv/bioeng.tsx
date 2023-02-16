import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/sora.png"
import apropos from "../img/apropos.png"
import contact from "../img/contact.png"
import map from "../img/map.png"
import tel from "../img/tel.png"
import lk from "../img/lk.png"
import discord from "../img/discord.png"
import mail from "../img/mail.png"
import jdr from "../img/jdr.png"
import jv from "../img/jv.png"
import livre from "../img/livre.png"
import anime from "../img/anime.png"
import musique from "../img/musique.png"
import dev from "../img/dev.png"
import hobby from "../img/hobby.png"
import barre from "../img/barjv.png"
import background from "../img/biobgjv.jpg"

import './jv.css';
import Navbar from "./navbareng";

function BioJVeng() {
  
    return (
      <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsive2jv jv bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
      <Navbar image={perso}></Navbar><br></br><br></br>
        <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
          <div className="relative mb-8">
            <p className="text-base text-red-500 pt-4">About me</p>
            <img className="absolute top-0 right-0 w-16 h-16" src={apropos} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
          <p className="mx-auto max-w-md w-auto text-xs ">
            Interested in computers for a long time, I decided to make my job. Indeed, since my youngest age, I use computers for my free time.<br></br>
            It's been two years now that I've oriented myself in the voice of Web Development, starting as an autodidact and then enrolling in the school Epitech in order to improve myself in this field. <br></br>
            There, I started a passion for the Dev and for the AI, that's why I wish to perform in these two domains in order to live later.<br></br>
            Curious, passionate and serious are the words that best describe me.<br></br>
            I have a driver's license and a car.
          </p><br></br>
          <img className="absolute lg:-bottom-[52px] -bottom-[40px] left-[0px] w-full " src={barre}></img>
        </div>
        <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
          <div className="relative mb-8">
            <p className="text-lg text-red-500 pt-4">Contact me</p>
            <img className="absolute top-0 right-0 w-16 h-16" src={contact} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={map} />
              <p className="lg:text-sm text-xs">
                18 rue du Dauphiné<br />
                54500 Vandoeuvre-lès-Nancy
              </p>
            </div>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={tel} />
              <p className="lg:text-sm text-xs">07 68 52 36 32</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={lk} />
              <p className="lg:text-sm text-xs">@lucasferiel</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={discord} />
              <p className="lg:text-sm text-xs">Lugras#5416</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={mail} />
              <p className="lg:text-sm text-xs">lucasferiel@hotmail.fr</p>
            </div>
            <img className="absolute lg:-bottom-[52px] -bottom-[40px] left-[0px] w-full " src={barre}></img>

        </div>
        <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
          <div className="relative mb-8">
            <p className="text-xl text-red-500 pt-4">Hobbies</p>
            <img className="absolute top-0 right-0 w-16 h-16" src={hobby} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex flex-row  items-center mb-6">
            <Link to="/jdr"><img className="w-16 h-16 mr-6" src={jdr} /></Link>
              <p className="text-base">RPG</p>
            </div>
            <div className="flex flex-row  items-center mb-6">
            <Link to="/jv"><img className="w-16 h-16 mr-6" src={jv} /></Link>
              <p className="text-base">Video games</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={livre} />
              <p className="text-base">Read</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={anime} />
              <p className="text-base">Anime</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <Link to="/"><img className="w-16 h-16 mr-6" src={dev} /></Link>
              <p className="text-base">Dev</p>
            </div>  
            <img className="absolute lg:-bottom-[32px] -bottom-[29px] left-[0px] w-full " src={barre}></img>

          </div>
        
    </div>
      
    );
  }
  
  export default BioJVeng;
  

  