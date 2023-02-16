import { Link } from "react-router-dom";
export default function Navbareng(props) {

return(
  <div className="navbar absolute bg-gradient-to-b from-[#5560AF,0.5] to-[#363883,0.7] rounded-[20px] border-[12px] border-[#B6BABD] shadow-[0_0_5px_0_rgba(10,10,0,0.5)] bg-blue-600/50  top-0  text-white" style={{"borderStyle":"ridge", "textShadow":"2px 2px 2px black"}}>
  <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact bg-gradient-to-b from-[#5560AF,0.5] to-[#363883,0.7] rounded-[20px] border-[12px] border-[#B6BABD] shadow-[0_0_5px_0_rgba(10,10,0,0.5)] bg-blue-600/50  dropdown-content mt-3 p-2 pt-[50px]  w-56 h-96" style={{"borderStyle":"ridge", "textShadow":"2px 2px 2px black"}}>
             <Link to="/jv/eng"><li><p className="text-[14px]">Home</p></li></Link>
             <Link to="/bio/jv/eng"><li><p className="text-[14px]">Bio</p></li></Link>
             <Link to="/competence/jv/eng"><li><p className="text-[14px]">Skills</p></li></Link>
             <Link to="/experience/jv/eng"><li><p className="text-[13px]">Qualifications &  experiences</p></li></Link><br></br>
             {/* <Link to="/portfolio"><p classNameName="absolute top-[850px] left-[100px] text-3xl text-white ">Portfolio</p></Link> */}
             <Link to="/jv"><li><p className="text-[14px]">French version</p></li></Link>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost normal-case text-base">Lucas Feriel</a>
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <img src={props.image} className="avatar"></img>
        </div>
      </button>
    </div>




   
  </div>
)



}
