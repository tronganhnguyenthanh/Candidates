import React, {Suspense} from "react"
import LoadingContent from "./LoadingContent"
import CandidateList from "./CandidateList"
const LoadingList = () => {
  return (
   <Suspense fallback={<LoadingContent/>}>
     <CandidateList/>
   </Suspense>
  )
}

export default LoadingList