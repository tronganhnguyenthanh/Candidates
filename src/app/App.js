import {Route, Routes} from "react-router-dom"
import FormAdd from "../components/FormAdd"
import CandidateDetail from "../components/CandidateDetail"
import FormEdit from "../components/FormEdit"
import CandidateList from "../components/CandidateList"
import ScanQR from "../components/scanQrCode/ScanQR"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/scan/qrCode" element={<ScanQR/>}/>
       <Route path="/" element={<FormAdd/>}/>
       <Route path="/candidates/list" element={<CandidateList/>}/>
       <Route path="/candidate/edit/:objectId" element={<FormEdit/>}/>
       <Route path="/candidate/:objectId" element={<CandidateDetail/>}/>
     </Routes> 
   </div>
  )
}
export default App
