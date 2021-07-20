import {useRouter} from 'next/router';
import {getMovieById} from '../../actions/index';
import Link from 'next/link';

const Movie = (props)=>{
    const router = useRouter();
    const {movie} = props
    // console.log(movie)
    console.log(router.query.id)
    return(
        <div className="container">
            <Link href="/"><a className="btn btn-primary ">Back to all movies</a></Link>
            <div className="my-4">
                <h1 className="display-4">{movie.name}</h1>
                <div className="movieBox p-3">
                    <img className="img-fluid" src={movie.image} alt=""/>
                    <p className="lead">{movie.description}</p>
                    <p>Year: {movie.releaseYear}</p>
                    <p>Rating of the movie: {movie.rating}</p>
                </div>
            </div>

            <style jsx>
                {`
                .movieBox{
                    padding:25px , 18px;
                    margin: 10px;
                    background:#eee;
                    color:#555;
                }

                
                `}
            </style>
        </div>
    )
}


Movie.getInitialProps = async (router)=>{

    const id = router.query.id;

    const movie = await getMovieById(id);

    return{
        movie
    }
}


export default Movie;




















// import {useRouter} from 'next/router'; 
// import {getMovieById} from '../../actions';




// const Movie = (props) =>{
//     // const [movie,setMovie] = useState([0])
//     const router = useRouter();
//     const id = router.query.id;
//     const {movie} = props
//     console.log(movie)
//     return(
//         <div className="container">
//             <h1>Movie of {router.query.id} </h1>


//             <div className="jumbotron jumbotron-fluid">
//   <div className="container">
//     <h1 className="display-4">{movie.name}</h1>
//     <div>
//         <img className="img-fluid" src={movie.image} alt=""/>
//     </div>
//     <p className="lead">Movie Category</p>
//     <p className="lead">{movie.releaseYear}</p>
//     <p className="lead">{movie.rating}</p>
//     <p className="lead">{movie.description}</p>
//   </div>
// </div>

//         </div>
//     )
// }

// Movie.getInitialProps = async (router)=>{
  
//     const id = router.query.id
//     const movie = await getMovieById(id)
 
//     return{ 
//         movie
//     }
// }

// export default Movie;