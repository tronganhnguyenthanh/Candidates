import axios from "axios"
import {header} from "../components/headers/header"
export const addCandidate = async (candidates) => {
  let addCandidate = await axios.post("https://parseapi.back4app.com/classes/Portfolio", candidates, {headers:header})
  return addCandidate?.data  
}

export const updateCandidate = async (objectId, candidates) => {
  let updateCandidate = await axios.put(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, candidates, {headers:header})
  return updateCandidate?.data
}

export const getCandidateListAPI = async () => {
  let res = await axios.get("https://parseapi.back4app.com/classes/Portfolio", {headers:header})
  return res?.data?.results
}
