import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/sora.png"
import apropos from "../img/aproposjv.png"
import contact from "../img/contactjv.png"
import map from "../img/mapjv.png"
import tel from "../img/teljv.png"
import lk from "../img/lkjv.png"
import discord from "../img/discord.png"
import mail from "../img/emailjv.png"
import jdr from "../img/jdr.png"
import jv from "../img/jv.png"
import livre from "../img/livre.png"
import anime from "../img/anime.png"
import dev from "../img/dev.png"
import hobby from "../img/hobbyjv.png"
import background from "../img/biobgjv.jpg"
import barre from "../img/barjv.png"

import './jv.css';
import Navbar from "./navbar";

function BioJV() {
  
    return (

<div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsive2jv jv bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
        <Navbar image={perso}></Navbar><br></br><br></br>
          <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
              <p className="text-base text-red-500 pt-4">A propos de moi</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={apropos} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <p className="mx-auto max-w-md w-auto text-xs ">
              Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.<br></br>
              Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine.<br></br> Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.<br></br>
              Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.<br></br>
              Je possède le permis B et une voiture.
            </p><br></br>
            <img className="absolute lg:-bottom-[52px] -bottom-[40px] left-[0px] w-full " src={barre}></img>
          </div>
          <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
              <p className="text-lg text-red-500 pt-4">Me contacter</p>
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
              <p className="text-xl text-red-500 pt-4">Hobbys</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={hobby} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
              <div className="flex flex-row  items-center mb-6">
              <Link to="/jdr"><img className="w-16 h-16 mr-6" src={jdr} /></Link>
                <p className="text-base">JDR</p>
              </div>
              <div className="flex flex-row  items-center mb-6">
              <Link to="/jv"><img className="w-16 h-16 mr-6" src={jv} /></Link>
                <p className="text-base">Jeux vidéo</p>
              </div>
              <div className="flex  flex-row items-center mb-6">
                <img className="w-16 h-16 mr-6" src={livre} />
                <p className="text-base">Lecture</p>
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
  
  export default BioJV;


