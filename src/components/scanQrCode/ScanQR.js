import React from "react"
import QRCode from "react-qr-code"
const ScanQR = () => {
 const url = "https://candidates-beta.vercel.app/"
 return(
  <div 
    style={{height:"auto", margin:"0 auto", maxWidth:257, width:"100%", marginTop:150}} 
    className="responsive"
   >
    <QRCode
      size={256}
      style={{height:"auto", maxWidth:"100%", width:"100%"}}
      value={url}
      bgColor="#fff"
      fgColor="#ffa233"
      viewBox={`0 0 256 256`}
    />
  </div>
 )
}

export default ScanQR