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
import Navbar from "./navbar";

function BioJDR() {
  
    return (
      <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsivejdr jdr bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
        <Navbar mage={perso}></Navbar><br></br><br></br>
          <div className="relative bg-boxjdr   sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-red-500 pt-8">A propos de moi</p>
              <img className="absolute top-5 right-0 w-16 h-16" src={apropos} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <p className="mx-auto max-w-md w-auto text-xl ">
              Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.<br></br>
              Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine.<br></br> Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.<br></br>
              Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.<br></br>
              Je possède le permis B et une voiture.
            </p><br></br>
          </div>
          <div className="relative bg-boxjdr sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-red-500 pt-8">Me contacter</p>
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
              <p className="text-3xl text-red-500 pt-8">Hobbys</p>
              <img className="absolute top-5 right-0 w-16 h-16" src={hobby} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
              <div className="flex flex-row  items-center mb-6">
              <Link to="/jdr"><img className="w-16 h-16 mr-6" src={jdr} /></Link>
                <p className="text-xl">JDR</p>
              </div>
              <div className="flex flex-row  items-center mb-6">
              <Link to="/jv"><img className="w-16 h-16 mr-6" src={jv} /></Link>
                <p className="text-xl">Jeux vidéo</p>
              </div>
              <div className="flex  flex-row items-center mb-6">
                <img className="w-16 h-16 mr-6" src={livre} />
                <p className="text-xl">Lecture</p>
              </div>
              <div className="flex  flex-row items-center mb-6">
                <img className="w-16 h-16 mr-6" src={anime} />
                <p className="text-xl">Anime</p>
              </div>
              <div className="flex  flex-row items-center mb-6">
                <Link to="/"><img className="w-16 h-16 mr-6" src={dev} /></Link>
                <p className="text-xl">Dev</p>
              </div>  
            </div>
          
      </div>
    );
  }
  
  export default BioJDR;


