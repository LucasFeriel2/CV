import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/rogue.png"
import entreprise from "../img/entreprisejdr.png"
import diplome from "../img/diplomejdr.png"
import Navbar from "./navbareng";

function FormationJDReng() {
  
    return (
        <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsivejdr jdr bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
        <Navbar image={perso}></Navbar><br></br><br></br>
        <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-boxjdr">
            <div className="relative mb-8">
            <p className="text-3xl text-red-500 pt-12">Qualifications</p>
            <img className="absolute top-5 right-0 w-16 h-16" src={diplome} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <div className="flex space-y-5 flex-col">
                <div>
                <p className="text-[#5000ff]  text-3xl ">BACCALAURÉAT STI2D Option SIN (Assez bien)</p>
                        <p className="text-[#FF0000]  text-2xl ">Lycée Germaine Tillon, Montbéliard - 2016/2018</p>
                        <p className="text-[#5000ff]  text-3xl ">BREVET DE TECHNICIEN SUPÉRIEUR in Digital Systems</p>
                        <p className="text-[#FF0000]  text-2xl ">Lycée Pierre de Coubertin, Nancy - 2018/2020</p>
                        <p className="text-lg pl-5 ">- Supervision of home automation system using microcontroller (Raspberry Pi)</p>
                        <p className="text-lg pl-5 ">- Creation of electronic circuits and wiring of boards</p>
                        <p className="text-lg pl-5 ">- Programming in Python and C language</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-3xl ">LICENCE PROFESSIONNELLE in Automated systems, networks and industrial computing</p>
                        <p className="text-[#FF0000]  text-2xl ">IUT Nancy Brabois, Nancy - 2020/2021</p>
                        <p className="text-lg pl-5 ">- Network : Learning of the different industrial networks and the network in general</p>
                        <p className="text-lg pl-5 ">- Automation : Supervision and realization of PLC program (Wago and Siemens)</p>
                        <p className="text-lg pl-5 ">- Computer science : C# programming and database</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-3xl ">Prépa Master pour Software Architect, Application Developer (Pre-MSc)</p>
                        <p className="text-[#FF0000]  text-2xl ">Epitech,  Nancy - 2021/2022</p>
                        <p className="text-lg pl-5 ">- DevOps : Implementation of linux and VM systems and Docker</p>
                        <p className="text-lg pl-5 ">- Web : HTML, CSS and JS deepening. Learning React, ReactNative, Angular and Symfony</p>
                        <p className="text-lg pl-5 ">- Programming: Learning Java</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-3xl ">Master MSc Architecte Logiciel, Dévellopeur d'application</p>
                        <p className="text-[#FF0000]  text-2xl ">Epitech,  Nancy - 2022/2024</p>
                    </div>
                </div>
            </div>
            <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-boxjdr">
                <div className="relative mb-8">
                <p className="text-3xl text-red-500 pt-12">Experiences</p>
                <img className="absolute top-5 right-0 w-16 h-16" src={entreprise} />
                </div>
                <hr className="w-full border-blue-500" /><br></br>
                <div className="flex space-y-5 flex-col">
                    <div>
                        <p className="text-[#5000ff]  text-3xl ">Web Designer - Akiba Station, Grand Est</p>
                        <p className="text-[#FF0000]  text-2xl ">Technical internship for website update and maintenance - 2019</p>
                        <p className="text-lg pl-5 ">- Putting the products on the shelf</p>
                        <p className="text-lg pl-5 ">- Sale of products in stores and at conventions</p>
                        <p className="text-lg pl-5 ">-Maintenance and update of a website</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-3xl ">Industrial Computer scientist - ThyssenKrupp Presta France</p>
                        <p className="text-[#FF0000]  text-2xl ">Alternation - 2020-2024</p>
                        <p className="text-lg pl-5 ">- Maintenance of computerized equipment of the machines</p>
                        <p className="text-lg pl-5 ">- Creation of a site for inventory with database</p>
                        <p className="text-lg pl-5 ">- Administration of the park for computer security</p>
                        <p className="text-lg pl-5 ">- Programming in VBS, Powershell and Batch</p>
                        <p className="text-lg pl-5 ">- Creation of site mapping of the different sites</p>
                        <p className="text-lg pl-5 ">- Provision of the various data in the databases</p>
                </div><br></br>
            </div>
        </div>
    </div>

      
    );
  }
  
  export default FormationJDReng;
  

  