import React, {useState, useEffect, Suspense, lazy} from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import {Button} from "flowbite-react"
const CandidateDetail = () => {
    const {objectId} = useParams()
    const navigate = useNavigate()
    const [candidateDetail, setCandidateDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    // console.log("loading", isLoading)
    const {Email, Firstname, Lastname, phoneNumber, workExperience, resPonsibility, Skills, major} = candidateDetail
    useEffect(() => {
     getCandidateDetail(objectId)
    }, [objectId])
    const goBack = () => {
     navigate("/candidates/list")
    }
    const getCandidateDetail = async () => {
      let header = {
        "X-Parse-Application-Id": "PpK3SDzdouwf41zij4aWWg01cC4Dir1ihwhDgPwI",
        "X-Parse-REST-API-Key": "BoxlFY1i2LuosBo0jEMtht1AgqfKKoEjZMlH22GS",
        "Content-Type": "application/json"
      }
      let res = await axios.get(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
      setCandidateDetail(res?.data)
      setIsLoading(!isLoading)
    }
    return (
     <>
     {
      isLoading ?
       <div className="py-64">
         <h1 className="text-2xl text-center text-blue-500">Loading...</h1>
       </div>
      :
      <div className="py-8 px-8 max-w-auto sm:max-w-auto mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-slate-500 font-semibold">
              ObjectId: <span className="text-blue-600">{objectId}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Firstname: <span className="text-blue-600">{Firstname}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Lastname: <span className="text-blue-600">{Lastname}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Email: 
               <span className="text-blue-600">
                 <a href={`mailto:${Email}`}>{Email}</a>
               </span>
            </p>
            <p className="text-slate-500 font-medium">
              Phone number: 
              <span className="text-blue-600">
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </span>
            </p>
            <p className="text-slate-500 font-medium">
              Work experience: <span className="text-blue-600">{workExperience}</span>
            </p>
            <p className="text-slate-500 font-medium">
              Responsibility: <span className="font-bold text-purple-500">{resPonsibility}</span>
            </p>
            <p className="text-slate-500 font-medium">
              Skills: <span className="text-blue-600 font-bold">{Skills}</span>
            </p>
            <p className="text-slate-500 font-medium">
              Position: <span className="text-blue-600">{major}</span>
            </p>
           </div>
           <Button color="blue" onClick={goBack} className="w-28">Back</Button>
        </div>
      </div>
      }
     </>
    )
}

export default CandidateDetail