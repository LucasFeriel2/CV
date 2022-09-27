import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/normal/index.tsx";
import Indexeng from "./components/normal/indexeng.tsx";
import Bio from "./components/normal/bio.tsx";
import Bioeng from "./components/normal/bioeng.tsx";
import Competence from "./components/normal/competence.tsx";
import Competenceeng from "./components/normal/competenceeng.tsx";
import Formation from "./components/normal/formation.tsx";
import Formationeng from "./components/normal/formationeng.tsx";


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

        </Routes>
  </Router>
  )
}