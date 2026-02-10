import React from 'react'
import './Moives.css'
import ProdectFilm from '../product/ProdectFilm'
const Moives = (props)=>{
  const   mymoives = props.mynewfilms.map((moivedata)=>{
     return(
       <ProdectFilm key={moivedata.id} mytitle={moivedata.title}
        myposter={moivedata.poster} mytype={moivedata.type} myyear={moivedata.year}/>
     )
  })
  return (
   <section className='homemovies'>
     <div className="overly">
     <div className="container">
          <div className="row">
               <div className="col-lg-12">
                    <span>Online streaming</span>
                    <h2>Upcoming Moivies</h2>
               </div>
          </div>
          <div className="row">
               {mymoives}
          </div>
     </div>
     </div>
   </section>
  )
}

export default Moives
