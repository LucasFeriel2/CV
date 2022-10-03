import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/normal/index.tsx";
import Indexeng from "./components/normal/indexeng.tsx";
import Bio from "./components/normal/bio.tsx";
import Bioeng from "./components/normal/bioeng.tsx";
import Competence from "./components/normal/competence.tsx";
import Competenceeng from "./components/normal/competenceeng.tsx";
import Formation from "./components/normal/formation.tsx";
import Formationeng from "./components/normal/formationeng.tsx";
import IndexJDR from "./components/jdr/indexjdr.tsx";
import IndexJDReng from "./components/jdr/indexeng.tsx";
import BioJDR from "./components/jdr/bio.tsx";
import BioJDReng from "./components/jdr/bioeng.tsx";
import CompétenceJDR from "./components/jdr/competence.tsx";
import CompétenceJDReng from "./components/jdr/competenceeng.tsx";
import FormationJDR from "./components/jdr/formation.tsx";
import FormationJDReng from "./components/jdr/formationeng.tsx";


export default function App() {
  return (

  <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eng" element={<Indexeng />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/bio/eng" element={<Bioeng />} />
          <Route path="/competence" element={<Competence />} />
          <Route path="/competence/eng" element={<Competenceeng />} />
          <Route path="/experience" element={<Formation />} />
          <Route path="/experience/eng" element={<Formationeng />} />
          <Route path="/jdr" element={<IndexJDR />} />
          <Route path="/jdr/eng" element={<IndexJDReng />} />
          <Route path="bio/jdr/" element={<BioJDR />} />
          <Route path="bio/jdr/eng" element={<BioJDReng />} />
          <Route path="competence/jdr/" element={<CompétenceJDR />} />
          <Route path="competence/jdr/eng" element={<CompétenceJDReng />} />
          <Route path="experience/jdr/" element={<FormationJDR />} />
          <Route path="experience/jdr/eng" element={<FormationJDReng />} />


        </Routes>
  </Router>
  )
}