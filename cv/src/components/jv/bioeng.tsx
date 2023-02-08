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

function BioJVeng() {
  
    return (
      <div className='jv absolute left-0 top-0 w-full h-full overflow-x-auto  ' style={{ backgroundImage: `url(${background})` }}>
        <div className="h-[1085px] w-[500px] bg-gradient-to-b from-[#5560AF,0.5] to-[#363883,0.7] rounded-[20px] border-[12px] border-[#B6BABD] shadow-[0_0_5px_0_rgba(10,10,0,0.5)] bg-blue-600/50" style={{"borderStyle":"ridge", "textShadow":"2px 2px 2px black"}}>
          <img className="absolute top-[100px] left-[150px] w-[188px] h-[183px]" src={perso}></img>
          <p className="absolute top-[300px] left-[90px] text-3xl text-white ">Lucas FERIEL</p>
          <Link to="/jv/eng"><p className="absolute top-[420px] left-[100px] text-xl text-white ">Home</p></Link>
          <Link to="/bio/jv/eng"><p className="absolute top-[520px] left-[100px] text-xl text-white ">Bio</p></Link>
          <Link to="/competence/jv/eng"><p className="absolute top-[620px] left-[100px] text-xl text-white ">Skills</p></Link>
          <Link to="/experience/jv/eng"><p className="absolute top-[700px] left-[100px] text-xl text-white ">Qualifiation &<br></br> experiences</p></Link>
          {/* <Link to="/portfolio"><p className="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
          <Link to="/bio/jv"><p className="absolute top-[1000px] left-[100px] text-lg text-white ">French version</p></Link>
      </div>
      <div className="absolute  left-[550px] top-[60px] w-[603px] h-[550px] border-x-4 border-t-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-black">
          <img className="absolute top-[545px] left-[0px] w-full " src={barre}></img>
          <p className="text-xl  absolute top-[25px] text-red-500">About me</p>
          <img className="absolute top-[4px] left-[520px] w-[69px] h-[69px]" src={apropos}></img>
          <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
          <p className="leading-6 absolute top-[90px] text-sm">Interested in computers for a long time, I decided to make my job. Indeed, since my youngest age, I use computers for my free time.
            It's been two years now that I've oriented myself in the voice of Web Development, starting as an autodidact and then enrolling in the school Epitech in order to improve myself in this field. There, I started a passion for the Dev and for the AI, that's why I wish to perform in these two domains in order to live later.
            Curious, passionate and serious are the words that best describe me.
            I have a driver's license and a car.</p>
        </div>


      <div className="absolute left-[1250px] top-[60px] w-[603px] h-[550px] border-x-4  border-t-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-black ">
          <img className="absolute top-[545px] left-[0px] w-full " src={barre}></img>
          <p className="text-xl  absolute top-[25px] text-red-500">Contact me</p>
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
          <p className="text-lg absolute left-[50px] top-[250px] ">RPG</p>
          <img className="absolute top-[100px] left-[210px] w-[135px] h-[135px]" src={jv}></img>
          <p className="text-lg absolute left-[180px] top-[250px] ">Videogames</p>
          <img className="absolute top-[100px] left-[400px] w-[135px] h-[135px]" src={livre}></img>
          <p className="text-lg absolute left-[410px] top-[250px] ">Read</p>
          <img className="absolute top-[100px] left-[590px] w-[135px] h-[135px]" src={anime}></img>
          <p className="text-lg absolute left-[620px] top-[250px] ">Anime</p>
          <Link to="/eng"><img className="absolute top-[100px] left-[780px] w-[135px] h-[135px]" src={dev}></img></Link>
          <p className="text-lg absolute left-[820px] top-[250px] ">Dev</p>
      </div>
    </div>
      
    );
  }
  
  export default BioJVeng;
  

  