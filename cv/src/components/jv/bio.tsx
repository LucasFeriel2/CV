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

function BioJV() {
  
    return (
      <div className='jv absolute left-0 top-0 w-full h-full overflow-x-auto  ' style={{ backgroundImage: `url(${background})` }}>
        <div className="h-[1085px] w-[500px] bg-gradient-to-b from-[#5560AF,0.5] to-[#363883,0.7] rounded-[20px] border-[12px] border-[#B6BABD] shadow-[0_0_5px_0_rgba(10,10,0,0.5)] bg-blue-600/50" style={{"borderStyle":"ridge", "textShadow":"2px 2px 2px black"}}>
            <img className="absolute top-[100px] left-[150px] w-[188px] h-[183px]" src={perso}></img>
            <p className="absolute top-[300px] left-[90px] text-3xl text-white ">Lucas FERIEL</p>
            <Link to="/jv"><p className="absolute top-[420px] left-[100px] text-xl text-white ">Accueil</p></Link>
            <Link to="/bio/jv"><p className="absolute top-[520px] left-[100px] text-xl text-white ">Bio</p></Link>
            <Link to="/competence/jv"><p className="absolute top-[620px] left-[100px] text-xl text-white ">Compétence</p></Link>
            <Link to="/experience/jv"><p className="absolute top-[700px] left-[100px] text-xl text-white ">Formations &<br></br> expériences</p></Link>
            {/* <Link to="/portfolio"><p className="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
            <Link to="/bio/jv/eng"><p className="absolute top-[1000px] left-[100px] text-lg text-white ">English version</p></Link>
        </div>
       <div className="absolute  left-[550px] top-[60px] w-[603px] h-[550px] border-x-4 border-t-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-black">
          <img className="absolute top-[545px] left-[0px] w-full " src={barre}></img>
          <p className="text-xl  absolute top-[25px] text-red-500">A propos de moi</p>
          <img className="absolute top-[4px] left-[520px] w-[69px] h-[69px]" src={apropos}></img>
          <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
          <p className="leading-6 absolute top-[90px] text-sm">Intéressé par l'informatique depuis longtemps, j'ai décidé d'en faire mon métier. En effet, depuis mon plus jeune âge, j'utilise l'informatique pour mon temps libre.
              Cela fait maintenant deux ans que je me suis orienté dans la voie du Web Dévellopement, en commençant en auto-ditacte puis en m’inscrivant à l’école Epitech afin de pouvoir m’améliorer dans ce domaine. Là-bas, j’ai commencé une passion pour le Dev et pour l’IA, c’est pour cela que je souhaite me perfectionner dans ces deux domaines afin d’en vivre plus tard.
              Curieux, passionné et sérieux sont les mots qui me qualifie le mieux.
              Je possède le permis B et une voiture.</p>
        </div>


  <div className="absolute left-[1250px] top-[60px] w-[603px] h-[550px] border-x-4  border-t-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-black ">
  <img className="absolute top-[545px] left-[0px] w-full " src={barre}></img>
  <p className="text-xl  absolute top-[25px] text-red-500">Me contacter</p>
  <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
  <img className="absolute top-[4px] left-[300px] aie:left-[520px] w-[69px] h-[69px]" src={contact}></img>
  <img className="absolute top-[100px] left-[30px] w-[63px] h-[63px]" src={map}></img>
  <p className="text-lg absolute left-[130px] top-[100px] ">18 rue du Dauphiné<br></br>54500 Vandoeuvre-lès-Nancy</p>
  <img className="absolute top-[180px] left-[30px] w-[63px] h-[63px]" src={tel}></img>
  <p className="text-lg absolute left-[130px] top-[210px] ">07 68 52 36 32</p>
  <img className="absolute top-[260px] left-[30px] w-[63px] h-[63px]" src={lk}></img>
  <p className="text-lg absolute left-[130px] top-[280px] ">@lucasferiel</p>
  <img className="absolute top-[340px] left-[30px] w-[63px] h-[63px]" src={discord}></img>
  <p className="text-lg absolute left-[130px] top-[370px] ">SquareAno#5416</p>
  <img className="absolute top-[440px] left-[30px] w-[63px] h-[63px]" src={mail}></img>
  <p className="text-lg absolute left-[130px] top-[460px] ">lucasferiel@hotmail.fr</p>
  </div>
  <div className="absolute left-[700px] top-[720px] w-[1000px] h-[300px] border-x-4  border-t-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-black">
  <img className="absolute top-[294px] left-[0px] w-full " src={barre}></img>

  <p className="text-xl  absolute top-[25px] text-red-500">Hobbys</p>
  <img className="absolute top-[4px] left-[910px] w-[69px] h-[69px]" src={hobby}></img>
  <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
  <Link to="/jdr"><img className="absolute top-[100px] left-[20px] w-[135px] h-[135px]" src={jdr}></img></Link>
  <p className="text-lg absolute left-[50px] top-[250px] ">JDR</p>
  <img className="absolute top-[100px] left-[210px] w-[135px] h-[135px]" src={jv}></img>
  <p className="text-lg absolute left-[180px] top-[250px] ">Jeux vidéo</p>
  <img className="absolute top-[100px] left-[400px] w-[135px] h-[135px]" src={livre}></img>
  <p className="text-lg absolute left-[410px] top-[250px] ">Lecture</p>
  <img className="absolute top-[100px] left-[590px] w-[135px] h-[135px]" src={anime}></img>
  <p className="text-lg absolute left-[620px] top-[250px] ">Anime</p>
  <Link to="/"><img className="absolute top-[100px] left-[780px] w-[135px] h-[135px]" src={dev}></img></Link>
  <p className="text-lg absolute left-[820px] top-[250px] ">Dev</p>
  </div>
</div>

    );
  }
  
  export default BioJV;


