import React from "react";
import { Link } from "react-router-dom";
import perso from "../img/kal.jpg"
import entreprise from "../img/entreprisejv.png"
import diplome from "../img/diplomejv.png"
import Navbar from "./navbar";
import barre from "../img/barjv.png"


function FormationJV() {
  
    return (
        <div className="flex items-center flex-wrap pt-16  justify-start h-screen bg-cover bg-center  bg-responsive4jv jv bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
        <Navbar image={perso}></Navbar><br></br><br></br>
        <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
            <p className="text-2xl text-cyan-400">Formations</p>
            <img className="absolute -top-3 right-0 w-16 h-16" src={diplome} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <div className="flex space-y-5 flex-col">
                <div>
                    <p className="text-[#5000ff]  text-xl ">BACCALAURÉAT STI2D Option SIN (Assez bien)</p>
                    <p className="text-[#FF0000]  text-base ">Lycée Germaine Tillon, Montbéliard - 2016/2018</p>
                    <p className="text-[#5000ff]  text-xl ">BREVET DE TECHNICIEN SUPÉRIEUR en Système Numérique</p>
                    <p className="text-[#FF0000]  text-base ">Lycée Pierre de Coubertin, Nancy - 2018/2020</p>
                    <p className="text-xs pl-5 ">- Supervision de système domotique à l'aide de microcontrolleur (Raspberry Pi)</p>
                    <p className="text-xs pl-5 ">- Création de circuits électroniques et câblage des plaques</p>
                    <p className="text-xs pl-5 ">- Programmation en Python et en langage C</p>
                </div>
                <div>
                    <p className="text-[#5000ff]  text-xl ">LICENCE PROFESSIONNELLE en Système automatisés, Réseaux et Informatique industriel</p>
                    <p className="text-[#FF0000]  text-base ">IUT Nancy Brabois, Nancy - 2020/2021</p>
                    <p className="text-xs pl-5 ">- Réseau : Apprentissage des différents réseaux industriel et le réseau en général</p>
                    <p className="text-xs pl-5 ">- Automatisme : Supervision et réalisation programme d'automate (Wago et Siemens)</p>
                    <p className="text-xs pl-5 ">- Informatique : Programmation C# et base de donnée</p>
                </div>
                <div>
                    <p className="text-[#5000ff]  text-xl ">Prépa Master pour Architecte Logiciel, Dévellopeur d'application (Pré-MSc)</p>
                    <p className="text-[#FF0000]  text-base ">Epitech,  Nancy - 2021/2022</p>
                    <p className="text-xs pl-5 ">- DevOps : Mise en place de systèmes linux et VM et Docker</p>
                    <p className="text-xs pl-5 ">- Web : Approfondissement HTML, CSS et JS. Apprentissage React, ReactNative, Angular et Symfony</p>
                    <p className="text-xs pl-5 ">- Programmation : Apprentissage Java</p>
                </div>
                <div>
                    <p className="text-[#5000ff]  text-xl ">Master MSc Architecte Logiciel, Dévellopeur d'application, option IA</p>
                    <p className="text-[#FF0000]  text-base ">Epitech,  Nancy - 2022/2024</p>
                </div>
                <img className="absolute lg:-bottom-[95px] -bottom-[40px] left-[0px] w-full " src={barre}></img>

            </div>
        </div>
        <div className="relative  border-x-4 border-t-4 bg-zinc-200/80 border-black  mt-12  shadow-2xl  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto p-4 sm:p-6  rounded-lg">
            <div className="relative mb-8">
            <p className="text-2xl text-cyan-400">Expériences</p>
            <img className="absolute -top-3 right-0 w-16 h-16" src={entreprise} />
            </div>
            <hr className="w-full border-blue-500" /><br></br>
            <div className="flex space-y-5 flex-col">
                <div>
                    <p className="text-[#5000ff]  text-xl ">Concepteur Web - Akiba Station, Grand Est</p>
                    <p className="text-[#FF0000]  text-base ">Stage technique de mise à jour et maintenance de site web - 2019</p>
                    <p className="text-xs pl-5 ">- Mise en rayon des produits</p>
                    <p className="text-xs pl-5 ">- Vente des produits en magasin et en convention</p>
                    <p className="text-xs pl-5 ">- Maintenance et mise à jour d'un site internet</p>
                </div>
                <div>
                    <p className="text-[#5000ff]  text-xl ">Informaticien Industriel - ThyssenKrupp Presta France</p>
                    <p className="text-[#FF0000]  text-base ">Alternance - 2020-2024</p>
                    <p className="text-xs pl-5 ">- Maintenance parc équipement informatique des machines</p>
                    <p className="text-xs pl-5 ">- Création de site pour inventaire stock avec base de données ainsi que site mappage des 3 usines</p>
                    <p className="text-xs pl-5 ">- Administration du parc pour la sécurité informatique</p>
                    <p className="text-xs pl-5 ">- Programmation en VBS, Powershell et Batch</p>
                    <p className="text-xs pl-5 ">- Création site mappage des différents sites </p>
                    <p className="text-xs pl-5 ">- Mise à disposition des différentes données qui sont dans les bases de données</p>
                </div>
                <img className="absolute lg:-bottom-[95px] -bottom-[40px] left-[0px] w-full " src={barre}></img>

            </div>
        </div>
    </div>

      
    );
  }
  
  export default FormationJV;
  

  