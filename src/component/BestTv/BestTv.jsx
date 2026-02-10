import React from 'react'
import './BestTv.css'
import ProdectFilm from '../product/ProdectFilm'
const BestTv=(props)=>{
     const thebest = props.mybestfilms.slice(2,6).map((bestmovie)=>{
          return(
                 <ProdectFilm key={bestmovie.id} mytitle={bestmovie.title}
                  myposter={bestmovie.poster} mytype={bestmovie.type} myyear={bestmovie.year}/>
          )
     })
  return (
   <section className='best'>
     <div className="container">
          <div className="row">
               <div className="col-lg-12">
                    <span>BEST TV SERIES</span>
                    <h2>World Best Tv Series </h2>
               </div>
          </div>
          <div className="row">
               {thebest}
          </div>
     </div>
   </section>
  )
}

export default BestTv
