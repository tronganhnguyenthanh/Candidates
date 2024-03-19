import axios from "axios"
import {header} from "../components/headers/header"
// Add candidate api
export const addCandidate = async (candidates) => {
  let addCandidate = await axios.post("https://parseapi.back4app.com/classes/Portfolio", candidates, {headers:header})
  return addCandidate?.data  
}
// Update candidate api
export const updateCandidate = async (objectId, candidates) => {
  let updateCandidate = await axios.put(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, candidates, {headers:header})
  return updateCandidate?.data
}
// Get list candidate api
export const getCandidateListAPI = async () => {
  let res = await axios.get("https://parseapi.back4app.com/classes/Portfolio", {headers:header})
  return res?.data?.results
}
// Get candidate detail api
export const getCandidateDetailAPI = async (objectId) => {
  let listDetail = await axios.get(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
  return listDetail?.data
}
// Delete candidate list
export const deleteCandidateList = async (objectId) => {
  let del = await axios.delete(`https://parseapi.back4app.com/classes/Portfolio/${objectId}`, {headers:header})
  return del?.data
}
