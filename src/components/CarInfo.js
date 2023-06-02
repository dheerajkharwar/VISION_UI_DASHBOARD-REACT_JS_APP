import React from 'react'
import * as Icon from "react-bootstrap-icons";

export default function CarInfo() {
  return (
    <>
        <h5 className="my-0 p-0">Car Information</h5>
        <b style={{fontSize:"12px"}}>Hello Mark Johnson, you car is ready</b>
        <table style={{marginTop:"65px"}}>
          <thead>
            <tr>
            <th>
            <div className="progress blue">
                 <span className="progress-left">
                                   <span className="progress-bar"></span>
                 </span>
                 <span className="progress-right">
                                   <span className="progress-bar"></span>
                 </span>
                 <div className="progress-value mb-4">
                  <br />
                 <b><Icon.BatteryCharging className="m-0 p-0" style={{fontSize:"25px"}} /></b>
                 <br/>90%
                 <br/><b style={{fontSize:"10px",opacity:"0.5"}}>Current Load</b>
                 </div>
               </div>
        <h4>0h 0.25min</h4>
        <b style={{fontSize:"12px"}}>Time to full charge</b>
            </th>
            <th>
              <div className="p-2" style={{backgroundColor:"#0b0e27", borderRadius:"15px"}}>
                <table>
                  <thead>
                    <tr>
                  <th><p>Battery Health<br /><b>83%</b></p></th>
                  <th><Icon.HeartFill className="mt-4 mx-4" /></th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div className="p-2 mt-2" style={{backgroundColor:"#0b0e27", borderRadius:"15px"}}>
                <table>
                  <thead>
                    <tr>
                  <th><p>Battery Health<br /><b>83%</b></p></th>
                  <th><Icon.HeartFill className="mt-4 mx-4" /></th>
                  </tr>
                  </thead>
                </table>
              
              </div>
            </th>
            <th className="col-md-0 px-2"/>
            <th>
            <div className="p-2" style={{backgroundColor:"#0b0e27", borderRadius:"15px"}}>
                <table>
                  <thead>
                    <tr>
                  <th className="col-md-0 py-2" />
                  <th><p>Battery Health<br /><b>83%</b></p></th>
                  <th><Icon.HeartFill className="mt-4 mx-4" /></th>
                  </tr>
                  </thead>
                </table>
              </div>

              <div className="p-2 mt-2" style={{backgroundColor:"#0b0e27", borderRadius:"15px"}}>
                <table>
                  <thead>
                    <tr>
                  <th className="col-md-0 py-2" />
                  <th><p>Battery Health<br /><b>83%</b></p></th>
                  <th><Icon.HeartFill className="mt-4 mx-4" /></th>
                  </tr>
                  </thead>
                </table>
              
              </div>
            </th>
            </tr>
          </thead>
        </table>
        
        </>
  )
}
