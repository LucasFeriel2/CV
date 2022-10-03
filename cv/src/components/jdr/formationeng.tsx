import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/rogue.png"
import entreprise from "../img/entreprisejdr.png"
import diplome from "../img/diplomejdr.png"
import fondbox from "../img/divbio.png"
import fondjdr from "../img/fondjdr.jpg"
import nav from "../img/navjdr.png"

function FormationJDReng() {
  
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
        <div className="absolute left-[550px] top-[120px] w-[720px] h-[950px]  pl-4 pr-6 rounded-lg">
            <img className=" h-full w-full absolute -left-[60px] -top-[50px]" src={fondbox}></img>
            <p className="text-3xl text-cyan-400 absolute top-[15px]">Qualifications</p>
            <img className="absolute top-[4px] right-[150px] w-[69px] h-[69px]" src={diplome}></img>
            <div className=" absolute top-[100px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">BACCALAURÉAT STI2D Option SIN (Assez bien)</p>
                <p className="text-[#FF0000]  text-xl ">Lycée Germaine Tillon, Montbéliard - 2016/2018</p>
            </div>
            <div className=" absolute top-[170px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">BREVET DE TECHNICIEN SUPÉRIEUR in Digital Systems</p>
                <p className="text-[#FF0000]  text-xl ">Lycée Pierre de Coubertin, Nancy - 2018/2020</p>
                <p className="text-base pl-5 ">- Supervision of home automation system using microcontroller (Raspberry Pi)</p>
                <p className="text-base pl-5 ">- Creation of electronic circuits and wiring of boards</p>
                <p className="text-base pl-5 ">- Programming in Python and C language</p>
            </div>
            <div className=" absolute top-[340px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">LICENCE PROFESSIONNELLE in Automated systems, networks and industrial computing</p>
                <p className="text-[#FF0000]  text-xl ">IUT Nancy Brabois, Nancy - 2020/2021</p>
                <p className="text-base pl-5 ">- Network : Learning of the different industrial networks and the network in general</p>
                <p className="text-base pl-5 ">- Automation : Supervision and realization of PLC program (Wago and Siemens)</p>
                <p className="text-base pl-5 ">- Computer science : C# programming and database</p>
            </div>
            <div className=" absolute top-[540px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Prépa Master pour Software Architect, Application Developer (Pre-MSc)</p>
                <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2021/2022</p>
                <p className="text-base pl-5 ">- DevOps : Implementation of linux and VM systems and Docker</p>
                <p className="text-base pl-5 ">- Web : HTML, CSS and JS deepening. Learning React, ReactNative, Angular and Symfony</p>
                <p className="text-base pl-5 ">- Programming: Learning Java</p>
            </div>
            <div className=" absolute top-[735px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Master MSc Architecte Logiciel, Dévellopeur d'application</p>
                <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2022/2024</p>
            </div>
        </div>
        <div className="absolute left-[1300px] top-[120px] w-[750px] h-[950px] pl-4 pr-6 rounded-lg ">
            <img className=" h-full w-full absolute -left-[60px] -top-[50px]" src={fondbox}></img>
            <p className="text-3xl text-cyan-400 absolute top-[15px]">Experiences</p>
            <img className="absolute top-[4px] right-[150px] w-[69px] h-[69px]" src={entreprise}></img>
            <div className=" absolute top-[100px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Web Designer - Akiba Station, Grand Est</p>
                <p className="text-[#FF0000]  text-xl ">Technical internship for website update and maintenance - 2019</p>
                <p className="text-base pl-5 ">- Putting the products on the shelf</p>
                <p className="text-base pl-5 ">- Sale of products in stores and at conventions</p>
                <p className="text-base pl-5 ">-Maintenance and update of a website</p>
            </div>
            <div className=" absolute top-[240px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Industrial Computer scientist - ThyssenKrupp Presta France</p>
                <p className="text-[#FF0000]  text-xl ">Alternation - 2020-2024</p>
                <p className="text-base pl-5 ">- Maintenance of computerized equipment of the machines</p>
                <p className="text-base pl-5 ">- Creation of a site for inventory with database</p>
                <p className="text-base pl-5 ">- Administration of the park for computer security</p>
                <p className="text-base pl-5 ">- Programming in VBS, Powershell and Batch</p>
                <p className="text-base pl-5 ">- Creation of site mapping of the different sites</p>
                <p className="text-base pl-5 ">- Provision of the various data in the databases</p>

            </div>
        </div>
      </div>

      
    );
  }
  
  export default FormationJDReng;
  

  