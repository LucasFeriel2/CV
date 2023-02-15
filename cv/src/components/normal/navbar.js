import perso from "../img/normal.png"
import { Link } from "react-router-dom";
export default function Navbar() {

return(
    <div className="navbar absolute bg-blue-600/50 top-0  text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600/50 rounded-box w-52">
             <Link to="/"><li><p>Accueil</p></li></Link>
             <Link to="/bio"><li><p>Bio</p></li></Link>
             <Link to="/competence"><li><p>Compétence</p></li></Link>
             <Link to="/experience"><li><p className="">Formations & expériences</p></li></Link>
             {/* <Link to="/portfolio"><p classNameName="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
             <Link to="/eng"><li><p>English version</p></li></Link>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-xl">Lucas Feriel</a>
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <img src={perso} className="avatar"></img>
        </div>
      </button>
    </div>




   
  </div>
)



}
