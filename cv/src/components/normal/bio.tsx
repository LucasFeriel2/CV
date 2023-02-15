import React, { useState } from "react";
import Navbar from "./navbar";
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
              <p className="text-3xl text-cyan-400">A propos de moi</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={apropos} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <p className="mx-auto max-w-md w-auto ">
              Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.<br></br>
              Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine.<br></br> Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.<br></br>
              Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.<br></br>
              Je possède le permis B et une voiture.
            </p>
          </div>
          <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
            <div className="relative mb-8">
              <p className="text-3xl text-cyan-400">Me contacter</p>
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
              <p className="text-3xl text-cyan-400">Hobbys</p>
              <img className="absolute top-0 right-0 w-16 h-16" src={hobby} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
              <div className="flex flex-row  items-center mb-6">
                <img className="w-16 h-16 mr-6" src={jdr} />
                <p className="text-lg">JDR</p>
              </div>
              <div className="flex flex-row  items-center mb-6">
                <img className="w-16 h-16 mr-6" src={jv} />
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
                <img className="w-16 h-16 mr-6" src={dev} />
                <p className="text-xl">Dev</p>
              </div>  
            </div>
          
      </div>


    );
  }
  
  export default Bio;


//   <div className='absolute left-0 top-0 w-full h-full overflow-x-auto bg-black  '>
  
//  <div className="absolute  left-[550px] top-[150px] w-[603px] h-[550px] border-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-sky-300 shadow-sky-500">
// <p className="text-3xl text-cyan-400 absolute top-[15px]">A propos de moi</p>
// <img className="absolute top-[4px] left-[520px] w-[69px] h-[69px]" src={apropos}></img>
// <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
// <p className="absolute top-[90px] text-2xl">Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.
// Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine. Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.
// Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.
// Je possède le permis B et une voiture.</p> 
// </div>


// <div className="absolute left-[1250px] top-[150px] w-[603px] h-[550px] border-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-sky-300 shadow-sky-500">
// <p className="text-3xl text-cyan-400 absolute top-[15px]">Me contacter</p>
// <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
// <img className="absolute top-[4px] left-[300px] aie:left-[520px] w-[69px] h-[69px]" src={contact}></img>
// <img className="absolute top-[100px] left-[30px] w-[63px] h-[63px]" src={map}></img>
// <p className="text-xl absolute left-[130px] top-[100px] ">18 rue du Dauphiné<br></br>54500 Vandoeuvre-lès-Nancy</p>
// <img className="absolute top-[180px] left-[30px] w-[63px] h-[63px]" src={tel}></img>
// <p className="text-xl absolute left-[130px] top-[190px] ">07 68 52 36 32</p>
// <img className="absolute top-[260px] left-[30px] w-[63px] h-[63px]" src={lk}></img>
// <p className="text-xl absolute left-[130px] top-[280px] ">@lucasferiel</p>
// <img className="absolute top-[340px] left-[30px] w-[63px] h-[63px]" src={discord}></img>
// <p className="text-xl absolute left-[130px] top-[370px] ">SquareAno#5416</p>
// <img className="absolute top-[420px] left-[30px] w-[63px] h-[63px]" src={mail}></img>
// <p className="text-xl absolute left-[130px] top-[460px] ">lucasferiel@hotmail.fr</p>
// </div>
// <div className="absolute left-[700px] top-[750px] w-[1000px] h-[300px] border-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-sky-300 shadow-sky-500">
// <p className="text-3xl text-cyan-400 absolute top-[15px]">Hobbys</p>
// <img className="absolute top-[4px] left-[910px] w-[69px] h-[69px]" src={hobby}></img>
// <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
// <Link to="/jdr"><img className="absolute top-[100px] left-[20px] w-[135px] h-[135px]" src={jdr}></img></Link>
// <p className="text-xl absolute left-[70px] top-[250px] ">JDR</p>
// <Link to="/jv"><img className="absolute top-[100px] left-[210px] w-[135px] h-[135px]" src={jv}></img></Link>
// <p className="text-xl absolute left-[220px] top-[250px] ">Jeux vidéo</p>
// <img className="absolute top-[100px] left-[400px] w-[135px] h-[135px]" src={livre}></img>
// <p className="text-xl absolute left-[440px] top-[250px] ">Lecture</p>
// <img className="absolute top-[100px] left-[590px] w-[135px] h-[135px]" src={anime}></img>
// <p className="text-xl absolute left-[630px] top-[250px] ">Anime</p>
// <Link to="/"><img className="absolute top-[100px] left-[780px] w-[135px] h-[135px]" src={dev}></img></Link>
// <p className="text-xl absolute left-[820px] top-[250px] ">Dev</p>
// </div>
// </div>