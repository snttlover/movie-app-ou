import React ,{Component} from 'react'
import Link from 'next/link';

class MovieList extends Component{
    
  render(){
    const {count,movie_data} = this.props

    if(movie_data.length == 0){
      return(
      <div className="text-center">
        <p>Movies are loading...</p>
        <img src="../static/gif/giphy.gif" className="img-fluid" height="200px" alt=""/>
      </div>
      )
    }else{

    return(
        <div className="row">


        {movie_data.map(data=>{
          return(
            <div key={data.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src={data.image} alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`movies/${data.id}`}><a>{data.name}</a></Link>
                </h4>
                <h5>{data.releaseYear}</h5>
               
                <p className="card-text">{data.description.substr(0,50)+'...'}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{data.rating}</small>
              </div>
            </div>
          </div>
          )
        })}

        </div>
    )
    }
    }
    
}

export default MovieList;