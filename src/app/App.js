import {Route, Routes} from "react-router-dom"
import FormAdd from "../components/FormAdd"
import CandidateList from "../components/CandidateList"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<FormAdd/>}/>
       <Route path="/candidates/list" element={<CandidateList/>}/>
     </Routes> 
   </div>
  )
}
export default App
