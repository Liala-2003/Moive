import React from 'react'
import { FaCalendar, FaClock, FaPlay } from "react-icons/fa";
import './header.css'
function header() {
  return (
    <>
    <header>
     <div className="container">
          <div className="row">
               <div className="col-lg-6 col-md-6">
                  <div className="wrap-text">
                      <h4>movflx</h4>
          <h2>Unlimited <span>Movie</span>,Tvs shows, & More .</h2>
                 
                 <div className="details">
               <ul>
                    <li>
                           <span>pg 18</span>
                         <span>hd</span>
                    </li>
                    <li>
                         <span>romance</span>
                         <span>drama</span>
                    </li>
                    <li>
                         <span><FaCalendar/>2022</span>
                         <span><FaClock/>128 min</span>
                    </li>
               </ul>
          </div>
          <button> <FaPlay/>Watch mow</button>
               </div>
                </div>
          </div>
     </div>
    </header>
    </>
  )
}


export default header

         