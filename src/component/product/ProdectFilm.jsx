import React from 'react'
import './ProdectFilm.css'
import { FaHeart ,FaClock} from 'react-icons/fa'
const ProdectFilm=(props)=> {
  return (
     <div className="col-lg-3 col-md-6">
       <div className='box'>
             <div className="img">
               <img src={props.myposter} />
             </div>
             <div className="text">
               <div className="text-header">
               <a href="#">{props.mytitle}</a>
               <span>{props.myyear}</span>
               </div>
               <div className="text-footer">
                    <span className='frist'>{props.mytype}</span>
                  <li>
                   <span><FaHeart/>3.5</span>
                <span><FaClock/>128 min</span>
                  </li>
               </div>
             </div>
          </div>
          </div>
  )
}

export default ProdectFilm

