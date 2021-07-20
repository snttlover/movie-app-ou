import React,{Fragment} from 'react';
const Carousel = (props)=>{

    const {image} = props;

   {
     image.map(m=>{
       console.log(m.image)
     })
   }
    return(
      <React.Fragment>

<div id="carouselExampleIndicators" className="carousel slide mb-4" data-ride="carousel">
  <ol className="carousel-indicators">
 

      {image.map((m,i)=>(
    <li data-target="#carouselExampleIndicators" data-slide-to={i} className={i===0 ? 'active' : '' }></li>

      ))}


    
  </ol>
  <div className="carousel-inner">


      {image.map((m,i)=>(
        <div className={`carousel-item ${i===0 ? 'active' : ''}` }> 
        <img height="290px" src={m.image} className="d-block w-100" alt="..."/>
      </div>
      ))}



   
  
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


      </React.Fragment>
    )



}


export default Carousel;