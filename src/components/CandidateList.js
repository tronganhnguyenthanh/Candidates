import axios from "axios"
import {Button} from "flowbite-react"
import moment from "moment"
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
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
           <th scope="col" className="px-6 py-3 text-center bg-violet-400 text-white text-nowrap">
             Work experience
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-900 text-white">
             Position
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-500 text-white text-nowrap">
             Created at
           </th>
           <th scope="col" className="px-6 py-3 text-center bg-purple-300 text-white">
             Action
           </th>
         </tr>
       </thead>
       <tbody>
         {candidateList?.length > 0 && candidateList?.map((i, index) => { 
           return(
            <tr className="bg-white border-r-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
              <td className="px-3 py-6 text-center bg-purple-300 text-white border-b-2">
                {i?.Firstname}
              </td>
              <td className="px-3 py-6 text-center bg-teal-300 text-white text-nowrap border-b-2">
                {i?.Lastname}
              </td>
              <td className="px-3 py-6 text-center bg-indigo-300 text-white border-b-2">
                {i?.Email}
              </td>
              <td className="px-3 py-6 text-center bg-gray-400 text-white border-b-2">
                <a href={`tel:${i?.phoneNumber}`}>{i?.phoneNumber}</a>
              </td>
              <td className="px-3 py-6 text-center bg-slate-400 text-white border-b-2">
                {i?.workExperience}
              </td>
              <td className="px-3 py-6 text-center bg-green-300 text-white text-nowrap border-b-2">
                {i?.major}
              </td>
              <td className="px-3 py-6 text-center bg-green-900 text-white text-nowrap border-b-2">
                <span>{moment(i?.createdAt).format("DD/MM/YYYY")}</span>
              </td>
              <td className="px-3 py-6 text-center bg-red-300 text-white text-nowrap border-b-2 flex">
                <Link to={`/candidate/${i?.objectId}`}>
                  <Button color="blue" className="w-20 m-2">View</Button>
                </Link>
                <Button color="failure" className="w-20 m-2">Delete</Button>
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