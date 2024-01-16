import React, {Suspense, lazy} from "react"
import LoadingContent from "./LoadingContent"
const CandidateList = lazy(() => import("../components/CandidateList"))
const LoadingList = () => {
  return (
   <Suspense fallback={<LoadingContent/>}>
     <CandidateList/>
   </Suspense>
  )
}

export default LoadingList