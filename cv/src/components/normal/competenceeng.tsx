import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/normal.png"
import apropos from "../img/apropos.png"
import skill from "../img/skill.png"
import reseau from "../img/reseau.png"
import ecrit from "../img/ecrit.png"
import domo from "../img/domo.png"
import atom from "../img/atom.png"
import eng from "../img/eng.png"
import esp from "../img/esp.png"
import lang from "../img/lang.png"
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
import Navbar from "./navbareng";


function Competenceeng() {
  
    return (
      <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsive bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
      <Navbar></Navbar><br></br><br></br>
      <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
          <div className="relative mb-8">
            <p className="text-3xl text-cyan-400">General</p>
            <img className="absolute top-0 right-0 w-16 h-16" src={skill} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={reseau} />
              <p className="text-lg">Network knowledge</p>
            </div>
            <div className="flex flex-row  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={ecrit} />
              <p className="text-xl">Good written communication</p>
            </div>
            <div className="flex  flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={domo} />
              <p className="text-xl">Knowledge in domotics</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={atom} />
              <p className="text-xl">Automastism knowledge</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={eng} />
              <p className="text-xl">English level B1 &<br></br>TOEIC : 675 points</p>
            </div>
            <div className="flex flex-row items-center mb-6">
              <img className="w-16 h-16 mr-6" src={esp} />
              <p className="text-xl">Spanish level B1</p>
            </div>
        </div>
        <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
          <div className="relative mb-8">
            <p className="text-3xl text-cyan-400">Computer languages</p>
            <img className="absolute top-0 right-0 w-16 h-16" src={lang} />
          </div>
          <hr className="w-full border-blue-500" /><br></br>
            <div className="flex  lg:space-x-10 space-x-3  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={html} />
              <div className="indicator"> 
                <span className="indicator-item indicator-center badge badge-secondary  bg-red">HTML</span> 
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":75}}>75%</div>              
              </div>
              <img className="w-16 h-16 mr-6" src={react} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">ReactJS</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>90%</div>              
                </div>
            </div>
            <div className="flex lg:space-x-10 space-x-3  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={css} />
              <div className="indicator"> 
                <span className="indicator-item indicator-center badge badge-secondary  bg-red">CSS</span> 
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>              
              </div>
              <img className="w-16 h-16 mr-6" src={tw} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">Tailwind CSS</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>              
                </div>
            </div>
            <div className="flex lg:space-x-10 space-x-3 items-center mb-6">
              <img className="w-16 h-16 mr-6" src={js} />
              <div className="indicator"> 
                <span className="indicator-item indicator-center badge badge-secondary  bg-red">JavaScript</span> 
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>              
              </div>
              <img className="w-16 h-16 mr-6" src={bs} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">BootStrap</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":40}}>40%</div>              
                </div>
            </div>
            <div className="flex lg:space-x-10 space-x-3 items-center mb-6">
              <img className="w-16 h-16 mr-6" src={php} />
              <div className="indicator"> 
                <span className="indicator-item indicator-center badge badge-secondary  bg-red">PHP</span> 
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":85}}>85%</div>              
              </div>
              <img className="w-16 h-16 mr-6" src={c} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">C#</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":60}}>60%</div>              
                </div>
            </div>
            <div className="flex lg:space-x-10 space-x-3  items-center mb-6">
              <img className="w-16 h-16 mr-6" src={sql} />
              <div className="indicator"> 
                <span className="indicator-item indicator-center badge badge-secondary  bg-red">SQL</span> 
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>85%</div>              
              </div>
              <img className="w-16 h-16 mr-6" src={batch} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">Batch</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":65}}>65%</div>              
                </div>
            </div>
              <div className="flex lg:space-x-10 space-x-3 items-center mb-6">
                <img className="w-16 h-16 mr-6" src={symf} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">Symfony</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":40}}>40%</div>              
                </div>
                <img className="w-16 h-16 mr-6" src={power} />
                <div className="indicator"> 
                  <span className="indicator-item indicator-center badge badge-secondary  bg-red">Powershell</span> 
                  <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":65}}>65%</div>              
                </div>
            </div>
        </div>
    </div>

      
    );
  }
  
  export default Competenceeng;
  

  