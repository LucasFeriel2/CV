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


function BioJDReng() {
  
    return (
      <div className='jdr absolute left-0 top-0 w-full h-full overflow-x-auto  ' style={{ backgroundImage: `url(${fondjdr})` }}>
        <div className="h-[1085px] w-[500px] ">
            <img className="absolute top-0 left-[10px] h-[1085px] w-[500px]" src={nav}></img>
            <img className="absolute top-[150px] left-[150px] w-[188px] h-[183px]" src={perso}></img>
            <p className="absolute top-[350px] left-[130px] text-5xl text-[#00F0FF] test">Lucas FERIEL</p>
            <Link to="/jdr/eng"><p className="absolute top-[470px] left-[100px] text-3xl text-white ">Home</p></Link>
            <Link to="/bio/jdr/eng"><p className="absolute top-[570px] left-[100px] text-3xl text-white ">Bio</p></Link>
            <Link to="/competence/jdr/eng"><p className="absolute top-[670px] left-[100px] text-3xl text-white ">Skills</p></Link>
            <Link to="/experience/jdr/eng"><p className="absolute top-[750px] left-[100px] text-3xl text-white ">Qualifiation &<br></br> experiences</p></Link>
            {/* <Link to="/portfolio"><p className="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
            <Link to="/jdr"><p className="absolute top-[850px] left-[160px] text-xl text-white ">French version</p></Link>
        </div>

        <div className="absolute  left-[550px] top-[150px] w-[650px] h-[550px] pl-6 pr-6 rounded-lg  " >
         <img className=" h-[550px] w-full absolute -left-[40px] -top-[15px]" src={fondbox}></img>
         <p className="text-3xl text-red-500 absolute top-[35px]">About me</p>
         <img className="absolute top-[15px] right-[100px] w-[69px] h-[69px]" src={apropos}></img>
            <p className="absolute top-[90px] w-[500px] text-2xl">Interested in computers for a long time, I decided to make my job. Indeed, since my youngest age, I use computers for my free time.
It's been two years now that I've oriented myself in the way of Web Development, starting as an autodidact and then enrolling in the school Epitech in order to improve myself in this field. There, I started a passion for the Dev and for the AI, that's why I wish to perform in these two domains in order to live later.
Curious, passionate and serious are the words that best describe me.
I have a driver's license and a car.

</p>
        </div>
        <div className=" jdr absolute left-[1250px] top-[150px] w-[603px] h-[550px] pl-4 pr-6  " >
          <img className=" h-[550px] w-full absolute -left-[40px] -top-[15px]" src={fondbox}></img>
          <p className="text-3xl text-red-500 absolute top-[40px]">Contact me</p>
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
        <p className="text-3xl text-red-500 absolute top-[15px]">Hobbies</p>
        <img className="absolute top-[4px] left-[910px] w-[69px] h-[69px]" src={hobby}></img>
        <img className="absolute top-[100px] left-[20px] w-[135px] h-[135px]" src={jdr}></img>
        <p className="text-xl absolute left-[70px] top-[250px] ">RPG</p>
        <img className="absolute top-[100px] left-[210px] w-[135px] h-[135px]" src={jv}></img>
        <p className="text-xl absolute left-[220px] top-[250px] ">Videogames</p>
        <img className="absolute top-[100px] left-[400px] w-[135px] h-[135px]" src={livre}></img>
        <p className="text-xl absolute left-[440px] top-[250px] ">Read</p>
        <img className="absolute top-[100px] left-[590px] w-[135px] h-[135px]" src={anime}></img>
        <p className="text-xl absolute left-[630px] top-[250px] ">Anime</p>
        <img className="absolute top-[100px] left-[780px] w-[135px] h-[135px]" src={dev}></img>
        <p className="text-xl absolute left-[820px] top-[250px] ">Dev</p>
        </div>
      </div>

      
    );
  }
  
  export default BioJDReng;
  

  