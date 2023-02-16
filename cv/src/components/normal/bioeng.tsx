import React, { useState } from "react";
import Navbar from "./navbareng";
import Footer from "./footer";
import "./grid.css"
import { Link } from "react-router-dom";
import perso from "../img/normal.png"
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

function Bio() {
  
    return (
      <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsive bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
        <Navbar></Navbar><br></br><br></br>
          <div className="relative   sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-cyan-400">About me</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={apropos} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <p className="mx-auto max-w-md w-auto ">
            Interested in computers for a long time, I decided to make my job. Indeed, since my youngest age, I use computers for my free time.<br></br>
            It's been two years now that I've oriented myself in the voice of Web Development, starting as an autodidact and then enrolling in the school Epitech in order to improve myself in this field. <br></br>
            There, I started a passion for the Dev and for the AI, that's why I wish to perform in these two domains in order to live later.<br></br>
            Curious, passionate and serious are the words that best describe me.<br></br>
            I have a driver's license and a car.
            </p>
          </div>
          <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-cyan-400">Contact me</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={contact} />
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
          <div className="relative sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-cyan-400">Hobbies</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={hobby} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
              <div className="flex flex-row  items-center mb-6">
                <img className="w-16 h-16 mr-6" src={jdr} />
                <p className="text-lg">RPG</p>
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
                <img className="w-16 h-16 mr-6" src={dev} />
                <p className="text-xl">Dev</p>
              </div>  
            </div>
          
      </div>


    );
  }
  
  export default Bio;

