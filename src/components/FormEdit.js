import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import {header} from "./headers/header"
import {updateCandidate} from "../api/api"
const FormEdit = () => {
  const {objectId} = useParams()
  const navigate = useNavigate()
  const init_data = {
    firstname:"",
    lastname:"",
    email:"",
    phoneNumber:"",
    facebookUID:"",
    workExperience:"",
    resPonsibility:"",
    skills:"",
    major:""
  }
  const [candidate, setCandidate] = useState(init_data)
  const handleOnChange = (e) => {
   let newCandidate = {...candidate}
   newCandidate[e.target.name] = e.target.value
   setCandidate(newCandidate)
  }
  useEffect(() => {
   getCandidateDetail(objectId)
  },[objectId])
  const getCandidateDetail = async (objectId) => {
    let res = await axios.get(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
    setCandidate(res?.data)
  }
  const handleUpdateCandidate = async (objectId) => {
    try{
     let candidates = {
       firstname:candidate?.firstname,
       lastname:candidate?.lastname,
       email:candidate?.email,
       phoneNumber:candidate?.phoneNumber,
       facebookUID:candidate?.facebookUID,
       workExperience:candidate?.workExperience,
       resPonsibility:candidate?.resPonsibility,
       skills:candidate?.skills,
       major:candidate?.major
     }
  
    if(candidate.firstname === ""){
      toast.error("Please enter your firstname", {position:"top-center"})
      return false
     }
 
     if(candidate.lastname === ""){
      toast.error("Please enter your lastname", {position:"top-center"})
      return false
     }
 
     if(candidate.email === ""){
      toast.error("Please enter your email", {position:"top-center"})
      return false
     }
 
     if(candidate.phoneNumber === ""){
      toast.error("Please enter your phone number", {position:"top-center"})
      return false
     }
 
     if(candidate.phoneNumber < 10){
      toast.error("Your phone number must be at least 10 digits", {position:"top-center"})
      return false
     }

     if(candidate.facebookUID === ""){
      toast.error("Please enter your facebook uid", {position:"top-center"})
      return false
     }
 
     if(candidate.workExperience === ""){
      toast.error("Please enter your work experience", {position:"top-center"})
      return false
     }
 
     if(candidate.resPonsibility === ""){
      toast.error("Please enter your responsibility", {position:"top-center"})
      return false
     }
 
     if(candidate.skills === ""){
      toast.error("Please enter your skills", {position:"top-center"})
      return false
     }
 
     if(candidate.major === ""){
      toast.error("Please enter your major", {position:"top-center"})
      return false
     }else{
       await updateCandidate(objectId, candidates)
       navigate("/candidates/list")
       return true 
     }
    }catch(error){
      console.log(error?.message)
    }
  }
  return (
   <form className="max-w-sm mx-auto mt-1 border-solid border-2 border-gray-100 p-2 rounded bg-purple-300">
     <ToastContainer/>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Firstname</label>
       <input 
         type="text"
         name="firstname"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="Firstname"
         value={candidate?.firstname}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Lastname</label>
       <input 
         type="text"
         name="lastname"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="Lastname"
         value={candidate?.lastname}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
       <input 
         type="text"
         name="email"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="Email"
         value={candidate?.email}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Phone number</label>
       <input 
         type="text"
         name="phoneNumber"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="phoneNumber"
         value={candidate?.phoneNumber}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">FacebookUID</label>
       <input 
         type="text"
         name="facebookUID"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="facebookUID"
         value={candidate?.facebookUID}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Work experience</label>
       <input
         type="number"
         name="workExperience"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         placeholder="Work experience"
         value={candidate?.workExperience}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Responsibility</label>
       <textarea
         cols={42}
         rows={9}
         name="resPonsibility"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         value={candidate?.resPonsibility}
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-white dark:text-white">Skills</label>
      <input
        type="text"
        name="skills"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Skills"
        value={candidate?.skills}
        onChange={handleOnChange}
      />
     </div>
     <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-white dark:text-white">Major</label>
      <input
        type="text"
        name="major"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Major"
        value={candidate?.major}
        onChange={handleOnChange}
      />
     </div>
     <button type="button" className="text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleUpdateCandidate(objectId)}>Update</button>
   </form>
  )
}

export default FormEdit