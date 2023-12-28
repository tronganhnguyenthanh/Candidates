import axios from "axios"
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const FormAdd = () => {
  const navigate = useNavigate()
  const init_data = {
    Firstname:"",
    Lastname:"",
    Email:"",
    phoneNumber:"",
    workExperience:"",
    major:""
  }
  const [candidate, setCandidate] = useState(init_data)
  const handleOnChange = (e) => {
   let newCandidate = {...candidate}
   newCandidate[e.target.name] = e.target.value
   setCandidate(newCandidate)
  }
  const handleAddCandidate = async () => {
    try{
     let candidates = {
      Firstname:candidate?.Firstname,
      Lastname:candidate?.Lastname,
      Email:candidate?.Email,
      phoneNumber:candidate?.phoneNumber,
      workExperience:candidate?.workExperience,
      major:candidate?.major
     }
  
     let header = {
      "X-Parse-Application-Id": "PpK3SDzdouwf41zij4aWWg01cC4Dir1ihwhDgPwI",
      "X-Parse-REST-API-Key": "BoxlFY1i2LuosBo0jEMtht1AgqfKKoEjZMlH22GS",
      "Content-Type": "application/json", 
    }
    // Validation form
    if(candidate.Firstname === ""){
     toast.error("Please enter your firstname", {position:"top-center"})
     return false
    }

    if(candidate.Lastname === ""){
     toast.error("Please enter your lastname", {position:"top-center"})
     return false
    }

    if(candidate.Email === ""){
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

    if(candidate.workExperience === ""){
     toast.error("Please enter your work experience", {position:"top-center"})
     return false
    }

    if(candidate.major === ""){
     toast.error("Please enter your major", {position:"top-center"})
     return false
    }else{
      await axios.post("https://parseapi.back4app.com/classes/Portfolio", candidates, {headers: header})
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
         name="Firstname"
         value={candidate?.Firstname}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Firstname"
         onChange={handleOnChange}
       />
     </div>
     <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">Lastname</label>
         <input 
           type="text"
           name="Lastname"
           value={candidate?.Lastname}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname"
           onChange={handleOnChange}
         />
    </div>
    <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
       <input 
         type="text"
         name="Email"
         value={candidate?.Email}
         placeholder="Email"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         onChange={handleOnChange}
        />
    </div>
    <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Phone number</label>
       <input 
        type="text"
        name="phoneNumber"
        value={candidate?.phoneNumber}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phoneNumber"
        onChange={handleOnChange}
       />
    </div>
    <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Work experience</label>
       <input
         type="number"
         name="workExperience"
         value={candidate?.workExperience}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Work experience"
         onChange={handleOnChange}
      />
    </div>
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-white dark:text-white">Responsibilities</label>
      <textarea
        rows={9} 
        cols={42}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
    <div className="mb-5">
       <label className="block mb-2 text-sm font-medium text-white dark:text-white">Major</label>
       <input
         type="text"
         name="major"
         value={candidate?.major}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Position"
         onChange={handleOnChange}
       />
    </div>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddCandidate}>Submit</button>
   </form>
  )
}

export default FormAdd