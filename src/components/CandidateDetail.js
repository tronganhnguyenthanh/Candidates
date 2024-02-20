import React, {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import {Button} from "flowbite-react"
import {header} from "./headers/header"
import Loading from "./loading/Loading"
const CandidateDetail = () => {
    const {objectId} = useParams()
    const navigate = useNavigate()
    const [candidateDetail, setCandidateDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {email, firstname, lastname, phoneNumber, workExperience, resPonsibility, skills, major} = candidateDetail
    useEffect(() => {
     getCandidateDetail(objectId)
    }, [objectId])
    const goBack = () => {
     navigate("/candidates/list")
    }
    const getCandidateDetail = async () => {
      let res = await axios.get(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
      setCandidateDetail(res?.data)
      setIsLoading(!isLoading)
    }
    return (
     <>
     {
      isLoading ? <Loading/>
      :
      <div className="py-8 px-8 max-w-auto sm:max-w-auto mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-slate-500 font-semibold">
              ObjectId: <span className="text-blue-600">{objectId}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Firstname: <span className="text-blue-600">{firstname}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Lastname: <span className="text-blue-600">{lastname}</span>
            </p>
            <p className="text-slate-500 font-semibold">
              Email: 
               <span className="text-blue-600">
                 <a href={`mailto:${email}`}>{email}</a>
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
              Skills: <span className="text-blue-600 font-bold">{skills}</span>
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