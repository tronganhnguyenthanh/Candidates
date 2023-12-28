import axios from "axios"
import React, {useEffect, useState} from "react"
const CandidateList = () => {
  const [candidateList, setCandidateList] = useState([])
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
   console.log(res?.data?.results)
   setCandidateList(res?.data?.results)
  }
  return (
   <div className="p-2">
     <h1 className="text-2xl text-center text-blue-700">Candidates list</h1>
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
           <th scope="col" className="px-6 py-3 text-center bg-red-400 text-white">
             Firstname
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-blue-400 text-white">
             Lastname
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-400 text-white">
             Email
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-pink-400 text-white text-nowrap">
             Phone number
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-violet-400 text-white">
             Work experience
           </th>
           <th scope="col" className="px-6 py-3 border-r-2 text-center bg-teal-400 text-white">
             Major
           </th>
         </tr>
       </thead>
       <tbody>
         {candidateList?.length > 0 && candidateList?.map((i, index) => {
           return(
            <tr className="bg-white border-r-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
              <td className="px-3 py-6 text-center bg-purple-300 text-white">
                {i?.Firstname}
              </td>
              <td className="px-3 py-6 text-center bg-teal-300 text-white text-nowrap">
                {i?.Lastname}
              </td>
              <td className="px-3 py-6 text-center bg-indigo-300 text-white">
                {i?.Email}
              </td>
              <td className="px-3 py-6 text-center bg-gray-400 text-white">
                {i?.phoneNumber}
              </td>
              <td className="px-3 py-6 text-center bg-slate-400 text-white">
                {i?.workExperience}
              </td>
              <td className="px-3 py-6 text-center bg-green-300 text-white text-nowrap">
                {i?.major}
              </td>
            </tr>
           )
          })
         }
       </tbody>
     </table>
   </div>
  )
}

export default CandidateList