import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/ranger.png"
import apropos from "../img/apropos.png"
import skill from "../img/skilljdr.png"
import reseau from "../img/reseau.png"
import ecrit from "../img/ecrit.png"
import domo from "../img/domo.png"
import atom from "../img/atom.png"
import eng from "../img/eng.png"
import esp from "../img/esp.png"
import lang from "../img/xpjdr.png"
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import php from "../img/php.png"
import sql from "../img/sql.png"
import symf from "../img/symf.png"
import react from "../img/react.png"
import tw from "../img/tailwind.png"
import bs from "../img/bootstrap.png"
import c from "../img/c.png"
import batch from "../img/batch.png"
import power from "../img/power.png"
import fondjdr from "../img/fondjdr.jpg"
import nav from "../img/navjdr.png"
import fondbox from "../img/divbio.png"


function CompetenceJDR() {
  
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
            <Link to="/competence/jdr/eng"><p className="absolute top-[850px] left-[160px] text-xl text-white ">English version</p></Link>
        </div>
        <div className="absolute left-[550px] top-[120px] w-[480px] h-[950px]  pl-4 pr-6 rounded-lg ">
            <img className=" h-full w-full absolute -left-[40px] -top-[50px]" src={fondbox}></img>
            <p className="text-3xl text-red-500 absolute top-[15px]">Général</p>
            <img className="absolute top-[4px] left-[320px] w-[69px] h-[69px]" src={skill}></img>
            <img className="absolute top-[100px] left-[10px] w-[90px] h-[90px]" src={reseau}></img>
            <p className="absolute top-[120px] left-[130px] text-2xl">Connaissance en <br></br> réseau</p>
            <img className="absolute top-[210px] left-[10px] w-[90px] h-[90px]" src={ecrit}></img>
            <p className="absolute top-[230px] left-[130px] text-2xl">Bonne communication écrite</p>
            <img className="absolute top-[340px] left-[10px] w-[90px] h-[90px]" src={domo}></img>
            <p className="absolute top-[360px] left-[130px] text-2xl">Connaissance en domotique</p>
            <img className="absolute top-[460px] left-[10px] w-[90px] h-[90px]" src={atom}></img>
            <p className="absolute top-[490px] left-[130px] text-2xl">Connaissance en automatisme</p>
            <img className="absolute top-[600px] left-[10px] w-[90px] h-[90px]" src={eng}></img>
            <p className="absolute top-[610px] left-[130px] text-2xl">Anglais niveau B1 &<br></br> TOEIC : 675 points</p>
            <img className="absolute top-[730px] left-[10px] w-[90px] h-[90px]" src={esp}></img>
            <p className="absolute top-[750px] left-[130px] text-2xl">Espagnol niveau B1</p>
        </div>
        <div className="absolute left-[1100px] top-[120px] w-[1000px] h-[950px] pl-4 pr-6 rounded-lg ">
            <img className=" h-full w-full absolute -left-[80px] -top-[50px]" src={fondbox}></img>
            <p className="text-3xl text-red-500 absolute top-[15px]">Languages informatiques</p>
            <img className="absolute top-[4px] right-[210px] w-[69px] h-[69px]" src={lang}></img>
            <img className="absolute top-[100px] left-[15px] w-[90px] h-[90px]" src={html}></img>
            <p className="absolute top-[100px] left-[220px] text-2xl">HTML</p>
            <div className="absolute top-[130px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "85%"}}>85%</div>
            </div>
            <img className="absolute top-[210px] left-[15px] w-[90px] h-[90px]" src={css}></img>
            <p className="absolute top-[210px] left-[220px] text-2xl">CSS</p>
            <div className="absolute top-[240px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "80%"}}>80%</div>
            </div>
            <img className="absolute top-[340px] left-[15px] w-[90px] h-[90px]" src={js}></img>
            <p className="absolute top-[340px] left-[200px] text-2xl">JavaScript</p>
            <div className="absolute top-[370px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "75%"}}>75%</div>
            </div>
            <img className="absolute top-[460px] left-[15px] w-[90px] h-[90px]" src={php}></img>
            <p className="absolute top-[455px] left-[220px] text-2xl">PHP</p>
            <div className="absolute top-[485px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "90%"}}>90%</div>
            </div>
            <img className="absolute top-[580px] left-[15px] w-[90px] h-[90px]" src={sql}></img>
            <p className="absolute top-[580px] left-[220px] text-2xl">SQL</p>
            <div className="absolute top-[610px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "80%"}}>80%</div>
            </div>
            <img className="absolute top-[710px] left-[15px] w-[90px] h-[90px]" src={symf}></img>
            <p className="absolute top-[700px] left-[200px] text-2xl">Symfony</p>
            <div className="absolute top-[730px] left-[130px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "40%"}}>40%</div>
            </div>

            <img className="absolute top-[100px] left-[450px] w-[90px] h-[90px]" src={react}></img>
            <p className="absolute top-[100px] left-[655px] text-2xl">React</p>
            <div className="absolute top-[130px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "90%"}}>90%</div>
            </div>
            <img className="absolute top-[210px] left-[450px] w-[90px] h-[90px]" src={tw}></img>
            <p className="absolute top-[210px] left-[635px] text-2xl">Tailwind</p>
            <div className="absolute top-[240px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "80%"}}>80%</div>
            </div>
            <img className="absolute top-[340px] left-[450px] w-[90px] h-[90px]" src={bs}></img>
            <p className="absolute top-[340px] left-[635px] text-2xl">BootStrap</p>
            <div className="absolute top-[370px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "45%"}}>45%</div>
            </div>
            <img className="absolute top-[460px] left-[450px] w-[90px] h-[90px]" src={c}></img>
            <p className="absolute top-[455px] left-[655px] text-2xl">C#</p>
            <div className="absolute top-[485px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "50%"}}>50%</div>
            </div>
            <img className="absolute top-[580px] left-[450px] w-[90px] h-[90px]" src={batch}></img>
            <p className="absolute top-[580px] left-[655px] text-2xl">Batch</p>
            <div className="absolute top-[610px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "60%"}}>60%</div>
            </div>
            <img className="absolute top-[710px] left-[450px] w-[90px] h-[90px]" src={power}></img>
            <p className="absolute top-[700px] left-[635px] text-2xl">Powershell</p>
            <div className="absolute top-[730px] left-[566px] w-[250px] bg-gray-500 shadow  bg-grey-light mt-2">
              <div className=" bg-blue text-xs leading-none py-1 text-center bg-blue-500 text-white" style={{"width" : "60%"}}>60%</div>
            </div>
        </div>
      </div>

      
    );
  }
  
  export default CompetenceJDR;
  

  