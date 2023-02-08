import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/normal.png"
import entreprise from "../img/entreprise.png"
import diplome from "../img/diplome.png"


function Formation() {
  
    return (
      <div className='absolute left-0 top-0 w-full h-full overflow-x-auto bg-black  '>
        <div className="h-[1085px] w-[500px] bg-blue-600/50">
            <img className="absolute top-[100px] left-[150px] w-[188px] h-[183px]" src={perso}></img>
            <p className="absolute top-[300px] left-[120px] text-5xl text-white ">Lucas FERIEL</p>
            <Link to="/"><p className="absolute top-[420px] left-[100px] text-3xl text-white ">Accueil</p></Link>
            <Link to="/bio"><p className="absolute top-[520px] left-[100px] text-3xl text-white ">Bio</p></Link>
            <Link to="/competence"><p className="absolute top-[620px] left-[100px] text-3xl text-white ">Compétence</p></Link>
            <Link to="/experience"><p className="absolute top-[700px] left-[100px] text-3xl text-white ">Formations &<br></br> expériences</p></Link>
            {/* <Link to="/portfolio"><p className="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
            <Link to="/experience/eng"><p className="absolute top-[1000px] left-[160px] text-xl text-white ">English version</p></Link>
        </div>
        <div className="absolute left-[550px] top-[120px] w-[630px] h-[850px] border-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-sky-300 shadow-sky-500">
            <p className="text-3xl text-cyan-400 absolute top-[15px]">Formations</p>
            <img className="absolute top-[4px] right-[15px] w-[69px] h-[69px]" src={diplome}></img>
            <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
            <div className=" absolute top-[100px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">BACCALAURÉAT STI2D Option SIN (Assez bien)</p>
                <p className="text-[#FF0000]  text-xl ">Lycée Germaine Tillon, Montbéliard - 2016/2018</p>
            </div>
            <div className=" absolute top-[170px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">BREVET DE TECHNICIEN SUPÉRIEUR en Système Numérique</p>
                <p className="text-[#FF0000]  text-xl ">Lycée Pierre de Coubertin, Nancy - 2018/2020</p>
                <p className="text-base pl-5 ">- Supervision de système domotique à l'aide de microcontrolleur (Raspberry Pi)</p>
                <p className="text-base pl-5 ">- Création de circuits électroniques et câblage des plaques</p>
                <p className="text-base pl-5 ">- Programmation en Python et en langage C</p>
            </div>
            <div className=" absolute top-[340px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">LICENCE PROFESSIONNELLE en Système automatisés, Réseaux et Informatique industriel</p>
                <p className="text-[#FF0000]  text-xl ">IUT Nancy Brabois, Nancy - 2020/2021</p>
                <p className="text-base pl-5 ">- Réseau : Apprentissage des différents réseaux industriel et le réseau en général</p>
                <p className="text-base pl-5 ">- Automatisme : Supervision et réalisation programme d'automate (Wago et Siemens)</p>
                <p className="text-base pl-5 ">- Informatique : Programmation C# et base de donnée</p>
            </div>
            <div className=" absolute top-[540px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Prépa Master pour Architecte Logiciel, Dévellopeur d'application (Pré-MSc)</p>
                <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2021/2022</p>
                <p className="text-base pl-5 ">- DevOps : Mise en place de systèmes linux et VM et Docker</p>
                <p className="text-base pl-5 ">- Web : Approfondissement HTML, CSS et JS. Apprentissage React, ReactNative, Angular et Symfony</p>
                <p className="text-base pl-5 ">- Programmation : Apprentissage Java</p>
            </div>
            <div className=" absolute top-[735px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Master MSc Architecte Logiciel, Dévellopeur d'application</p>
                <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2022/2024</p>
            </div>
        </div>
        <div className="absolute left-[1250px] top-[120px] w-[630px] h-[850px] border-4  shadow-2xl pl-4 pr-6 rounded-lg bg-zinc-200 border-sky-300 shadow-sky-500">
            <p className="text-3xl text-cyan-400 absolute top-[15px]">Expériences</p>
            <img className="absolute top-[4px] right-[15px] w-[69px] h-[69px]" src={entreprise}></img>
            <hr className=" w-full border-blue-500 absolute top-[80px] left-0"></hr>
            <div className=" absolute top-[100px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Concepteur Web - Akiba Station, Grand Est</p>
                <p className="text-[#FF0000]  text-xl ">Stage technique de mise à jour et maintenance de site web - 2019</p>
                <p className="text-base pl-5 ">- Mise en rayon des produits</p>
                <p className="text-base pl-5 ">- Vente des produits en magasin et en convention</p>
                <p className="text-base pl-5 ">- Maintenance et mise à jour d'un site internet</p>
            </div>
            <div className=" absolute top-[240px] left-[15px]"> 
                <p className="text-[#5000ff]  text-2xl ">Informaticien Industriel - ThyssenKrupp Presta France</p>
                <p className="text-[#FF0000]  text-xl ">Alternance - 2020-2024</p>
                <p className="text-base pl-5 ">- Maintenance parc équipement informatique des machines</p>
                <p className="text-base pl-5 ">- Création de site pour inventaire stock avec base de données</p>
                <p className="text-base pl-5 ">- Administration du parc pour la sécurité informatique</p>
                <p className="text-base pl-5 ">- Programmation en VBS, Powershell et Batch</p>
                <p className="text-base pl-5 ">- Création site mappage des différents sites </p>
                <p className="text-base pl-5 ">- Mise à disposition des différentes données qui sont dans les bases de données</p>

            </div>
        </div>
      </div>

      
    );
  }
  
  export default Formation;
  

  