import {Route, Routes} from "react-router-dom"
import FormAdd from "../components/FormAdd"
import CandidateDetail from "../components/CandidateDetail"
import FormEdit from "../components/FormEdit"
import LoadingList from "../components/LoadingList"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<FormAdd/>}/>
       <Route path="/candidates/list" element={<LoadingList/>}/>
       <Route path="/candidate/edit/:objectId" element={<FormEdit/>}/>
       <Route path="/candidate/:objectId" element={<CandidateDetail/>}/>
     </Routes> 
   </div>
  )
}
export default App
