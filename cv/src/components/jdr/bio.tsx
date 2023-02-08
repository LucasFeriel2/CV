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

function BioJDR() {
  
    return (
      <div className='jdr absolute left-0 top-0 w-full h-full overflow-x-auto '  style={{ backgroundImage: `url(${fondjdr})` }}>
       <div className="h-[1085px] w-[500px] ">
            <img className="absolute top-0 left-[10px] h-[1085px] w-[500px]" src={nav}></img>
            <img className="absolute top-[150px] left-[150px] w-[188px] h-[183px]" src={perso}></img>
            <p className="absolute top-[350px] left-[130px] text-5xl text-[#00F0FF] test">Lucas FERIEL</p>
            <Link to="/jdr/"><p className="absolute top-[470px] left-[100px] text-3xl text-white ">Accueil</p></Link>
            <Link to="/bio/jdr/"><p className="absolute top-[570px] left-[100px] text-3xl text-white ">Bio</p></Link>
            <Link to="/competence/jdr/"><p className="absolute top-[670px] left-[100px] text-3xl text-white ">Compétence</p></Link>
            <Link to="/experience/jdr/"><p className="absolute top-[750px] left-[100px] text-3xl text-white ">Formations &<br></br> expériences</p></Link>
            {/* <Link to="/portfolio"><p className="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
            <Link to="/bio/jdr/eng"><p className="absolute top-[850px] left-[160px] text-xl text-white ">English version</p></Link>
        </div>
       <div className="absolute  left-[550px] top-[150px] w-[650px] h-[550px] pl-6 pr-6 rounded-lg  " >
         <img className=" h-[550px] w-full absolute -left-[40px] -top-[15px]" src={fondbox}></img>
         <p className="text-3xl text-red-500 absolute top-[35px]">A propos de moi</p>
         <img className="absolute top-[15px] right-[100px] w-[69px] h-[69px]" src={apropos}></img>
         <p className="absolute top-[90px] w-[500px] text-2xl">Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.
Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine. Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.
Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.
Je possède le permis B et une voiture.</p>
  </div>


  <div className=" jdr absolute left-[1250px] top-[150px] w-[603px] h-[550px] pl-4 pr-6  " >
  <img className=" h-[550px] w-full absolute -left-[40px] -top-[15px]" src={fondbox}></img>
  <p className="text-3xl text-red-500 absolute top-[40px]">Me contacter</p>
  <img className="absolute top-[35px] right-[110px] w-[69px] h-[69px]" src={contact}></img>
  <img className="absolute top-[80px] left-[30px] w-[63px] h-[63px]" src={map}></img>
  <p className="text-xl absolute left-[130px] top-[80px] ">18 rue du Dauphiné<br></br>54500 Vandoeuvre-lès-Nancy</p>
  <img className="absolute top-[160px] left-[30px] w-[63px] h-[63px]" src={tel}></img>
  <p className="text-xl absolute left-[130px] top-[170px] ">07 68 52 36 32</p>
  <img className="absolute top-[240px] left-[30px] w-[63px] h-[63px]" src={lk}></img>
  <p className="text-xl absolute left-[130px] top-[260px] ">@lucasferiel</p>
  <img className="absolute top-[320px] left-[30px] w-[63px] h-[63px]" src={discord}></img>
  <p className="text-xl absolute left-[130px] top-[350px] ">SquareAno#5416</p>
  <img className="absolute top-[400px] left-[30px] w-[63px] h-[63px]" src={mail}></img>
  <p className="text-xl absolute left-[130px] top-[430px] ">lucasferiel@hotmail.fr</p>
  </div>
  <div className="absolute left-[700px] top-[750px] w-[1200px] h-[300px]  pl-4 pr-6 rounded-lg">
        <img className=" h-[350px] w-[1300px] absolute -left-[100px] -top-[25px]" src={fondhobby}></img>
  <p className="text-3xl text-red-500 absolute top-[15px]">Hobbys</p>
  <img className="absolute top-[4px] left-[910px] w-[69px] h-[69px]" src={hobby}></img>
  <img className="absolute top-[100px] left-[20px] w-[135px] h-[135px]" src={jdr}></img>
  <p className="text-xl absolute left-[70px] top-[250px] ">JDR</p>
  <Link to="/jv"><img className="absolute top-[100px] left-[210px] w-[135px] h-[135px]" src={jv}></img></Link>
  <p className="text-xl absolute left-[220px] top-[250px] ">Jeux vidéo</p>
  <img className="absolute top-[100px] left-[400px] w-[135px] h-[135px]" src={livre}></img>
  <p className="text-xl absolute left-[440px] top-[250px] ">Lecture</p>
  <img className="absolute top-[100px] left-[590px] w-[135px] h-[135px]" src={anime}></img>
  <p className="text-xl absolute left-[630px] top-[250px] ">Anime</p>
  <Link to="/"><img className="absolute top-[100px] left-[780px] w-[135px] h-[135px]" src={dev}></img></Link>
  <p className="text-xl absolute left-[820px] top-[250px] ">Dev</p>
  </div>
</div>

    );
  }
  
  export default BioJDR;


