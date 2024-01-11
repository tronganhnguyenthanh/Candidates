import axios from "axios"
import {Button, TextInput} from "flowbite-react"
import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
const CandidateList = () => {
  const [candidateList, setCandidateList] = useState([])
  const [filterMajor, setFilterMajor] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
   getCandidateList()
  },[])
  const getCandidateList = async () => {
   let header = {
    "X-Parse-Application-Id": "PpK3SDzdouwf41zij4aWWg01cC4Dir1ihwhDgPwI",
    "X-Parse-REST-API-Key": "BoxlFY1i2LuosBo0jEMtht1AgqfKKoEjZMlH22GS",
    "Content-Type": "application/json"
   }

   let res = await axios.get("https://parseapi.back4app.com/classes/Portfolio", {headers:header})
   setCandidateList(res?.data?.results)
  }
  const goBack = () => {
    navigate("/")
  }

  const handleEdit = (objectId) => {
    navigate(`/candidate/edit/${objectId}`)
  }

  const handleOnSearchMajor = () => {
   let searchrMajor = candidateList?.filter((i) => i?.major?.includes(filterMajor?.toUpperCase()))
   setCandidateList(searchrMajor)
  }

  const restoreCandidateList = async () => {
    if(filterMajor === ""){
     await getCandidateList()
    }
  }

  const handleDelete = async (objectId) => {
    let confirm = window.confirm("Are you sure you want to delete?")
    let header = {
     "X-Parse-Application-Id": "PpK3SDzdouwf41zij4aWWg01cC4Dir1ihwhDgPwI",
     "X-Parse-REST-API-Key": "BoxlFY1i2LuosBo0jEMtht1AgqfKKoEjZMlH22GS",
     "Content-Type": "application/json"
    }

    if(confirm){
     await axios.delete(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
     toast.success("Candidate deleted successfully", {position:"top-center"})
     getCandidateList()
    }
  }
  return (
   <div className="p-2">
     <h1 className="text-2xl text-center text-blue-700">Candidates list</h1>
     <div className="flex justify-end">
       <TextInput
         type="text"
         sizing="sm"
         className="w-96"
         value={filterMajor}
         onChange={(e) => setFilterMajor(e.target.value)}
       />
       <Button className="bg-slate-500 w-28" onClick={handleOnSearchMajor}>Search</Button>
       <Button className="bg-orange-800 w-28" onClick={restoreCandidateList}>Restore</Button>
       <Button className="bg-blue-800 w-28" onClick={goBack}>Go back</Button>
     </div>
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ToastContainer/>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-1">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th scope="col" className="px-6 py-3 text-center bg-red-400 text-white whitespace-nowrap">
             Firstname
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-blue-400 text-white whitespace-nowrap">
             Lastname
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-400 text-white whitespace-nowrap">
             Email
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-pink-400 text-white whitespace-nowrap">
             Phone number
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-violet-400 text-white whitespace-nowrap">
             Work experience
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-900 text-white whitespace-nowrap">
             Position
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-300 text-white whitespace-nowrap">
             Action
           </th>
         </tr>
       </thead>
       <tbody>
         {candidateList?.length > 0 && candidateList?.map((i, index) => { 
           return(
            <tr className="bg-white border-r-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" key={index}>
              <td className="px-3 py-6 text-center bg-purple-300 text-white whitespace-nowrap border-b-2">
                {i?.Firstname}
              </td>
              <td className="px-3 py-6 text-center bg-teal-300 text-white whitespace-nowrap border-b-2">
                {i?.Lastname}
              </td>
              <td className="px-3 py-6 text-center bg-indigo-300 text-white whitespace-nowrap border-b-2">
                {i?.Email}
              </td>
              <td className="px-3 py-6 text-center bg-gray-400 text-white whitespace-nowrap border-b-2">
                {i?.phoneNumber}
              </td>
              <td className="px-3 py-6 text-center bg-green-500 text-white whitespace-nowrap border-b-2">
                {i?.workExperience}
              </td>
              <td className="px-3 py-6 text-center bg-green-300 text-white whitespace-nowrap border-b-2">
                {i?.major}
              </td>
              <td className="px-3 py-6 text-center bg-red-300 text-white whitespace-nowrap border-b-2 flex">
                <Link to={`/candidate/${i?.objectId}`}>
                  <Button color="blue" className="w-20 m-2">View</Button>
                </Link>
                <Button color="gray" className="w-20 m-2" onClick={() => handleEdit(i?.objectId)}>Edit</Button>
                <Button className="w-20 m-2 bg-red-800" onClick={() => handleDelete(i?.objectId)}>Delete</Button>
              </td>
            </tr>
           )
           })
          }
       </tbody>
      </table>
     </div>
   </div>
  )
}

export default CandidateList