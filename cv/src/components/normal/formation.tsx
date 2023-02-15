import React from "react";
import { Link } from "react-router-dom";
import entreprise from "../img/entreprise.png"
import diplome from "../img/diplome.png"
import Navbar from "./navbar";


function Formation() {
  
    return (
        <div className="flex items-center flex-wrap  justify-start h-screen bg-cover bg-center  bg-responsive bg-repeat sm:bg-auto md:bg-cover lg:bg-contain overflow-x-auto">
            <Navbar></Navbar><br></br><br></br>
            <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
                <div className="relative mb-8">
                <p className="text-3xl text-cyan-400">Formations</p>
                <img className="absolute top-0 right-0 w-16 h-16" src={diplome} />
                </div>
                <hr className="w-full border-blue-500" /><br></br>
                <div className="flex space-y-5 flex-col">
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">BACCALAURÉAT STI2D Option SIN (Assez bien)</p>
                        <p className="text-[#FF0000]  text-xl ">Lycée Germaine Tillon, Montbéliard - 2016/2018</p>
                        <p className="text-[#5000ff]  text-2xl ">BREVET DE TECHNICIEN SUPÉRIEUR en Système Numérique</p>
                        <p className="text-[#FF0000]  text-xl ">Lycée Pierre de Coubertin, Nancy - 2018/2020</p>
                        <p className="text-base pl-5 ">- Supervision de système domotique à l'aide de microcontrolleur (Raspberry Pi)</p>
                        <p className="text-base pl-5 ">- Création de circuits électroniques et câblage des plaques</p>
                        <p className="text-base pl-5 ">- Programmation en Python et en langage C</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">LICENCE PROFESSIONNELLE en Système automatisés, Réseaux et Informatique industriel</p>
                        <p className="text-[#FF0000]  text-xl ">IUT Nancy Brabois, Nancy - 2020/2021</p>
                        <p className="text-base pl-5 ">- Réseau : Apprentissage des différents réseaux industriel et le réseau en général</p>
                        <p className="text-base pl-5 ">- Automatisme : Supervision et réalisation programme d'automate (Wago et Siemens)</p>
                        <p className="text-base pl-5 ">- Informatique : Programmation C# et base de donnée</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">Prépa Master pour Architecte Logiciel, Dévellopeur d'application (Pré-MSc)</p>
                        <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2021/2022</p>
                        <p className="text-base pl-5 ">- DevOps : Mise en place de systèmes linux et VM et Docker</p>
                        <p className="text-base pl-5 ">- Web : Approfondissement HTML, CSS et JS. Apprentissage React, ReactNative, Angular et Symfony</p>
                        <p className="text-base pl-5 ">- Programmation : Apprentissage Java</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">Master MSc Architecte Logiciel, Dévellopeur d'application, option IA</p>
                        <p className="text-[#FF0000]  text-xl ">Epitech,  Nancy - 2022/2024</p>
                    </div>
                </div>
            </div>
            <div className="relative  sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-zinc-200 border-4 border-sky-300 shadow-2xl shadow-sky-500 rounded-lg">
                <div className="relative mb-8">
                <p className="text-3xl text-cyan-400">Expériences</p>
                <img className="absolute top-0 right-0 w-16 h-16" src={entreprise} />
                </div>
                <hr className="w-full border-blue-500" /><br></br>
                <div className="flex space-y-5 flex-col">
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">Concepteur Web - Akiba Station, Grand Est</p>
                        <p className="text-[#FF0000]  text-xl ">Stage technique de mise à jour et maintenance de site web - 2019</p>
                        <p className="text-base pl-5 ">- Mise en rayon des produits</p>
                        <p className="text-base pl-5 ">- Vente des produits en magasin et en convention</p>
                        <p className="text-base pl-5 ">- Maintenance et mise à jour d'un site internet</p>
                    </div>
                    <div>
                        <p className="text-[#5000ff]  text-2xl ">Informaticien Industriel - ThyssenKrupp Presta France</p>
                        <p className="text-[#FF0000]  text-xl ">Alternance - 2020-2024</p>
                        <p className="text-base pl-5 ">- Maintenance parc équipement informatique des machines</p>
                        <p className="text-base pl-5 ">- Création de site pour inventaire stock avec base de données ainsi que site mappage des 3 usines</p>
                        <p className="text-base pl-5 ">- Administration du parc pour la sécurité informatique</p>
                        <p className="text-base pl-5 ">- Programmation en VBS, Powershell et Batch</p>
                        <p className="text-base pl-5 ">- Création site mappage des différents sites </p>
                        <p className="text-base pl-5 ">- Mise à disposition des différentes données qui sont dans les bases de données</p>
                    </div>
                </div>
            </div>
        </div>

      
    );
  }
  
  export default Formation;
  





