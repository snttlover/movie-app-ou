import App from 'next/app';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import {getMovies} from '../actions/';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = url =>{
    NProgress.start()
}


Router.onRouteChangeComplete = url=>{
    NProgress.done();
}

Router.onRouteChnageError = url =>{
    NProgress.done();
}

class MovieApp extends App{


    

    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }

    static getInitialProps = async (param)=>{
       const appProps = await App.getInitialProps(param)

        return {
            ...appProps
        }
    }
    
  
    render(){

        const {Component ,pageProps} = this.props;

        return(
            <div>
              <Head>
                <title>Movie App</title>
                <meta name="description" content="A site for my programming portfolio"/>
                <meta charSet="utf-8"/>
                <meta name="robots" content="noindex, nofollow"/>
                <meta name="viewport" content="width=device-width"/>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
            </Head>
            <Navbar/>

                <div className="base-page">
                <Component {...pageProps}/>
                </div>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>
                <footer className="py-3 bg-dark mt-4 pt-4">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright &copy; Your Website {new Date().getFullYear()}</p>
    </div>
  </footer>
  <style jsx> 
            {
                `


                    .base-page{
                        padding:10px;
                        maring-bottom:20px;
                        padding-top:80px;
                    }
                
                `
            }
  </style>
            </div>

        )
    }
}


export default MovieApp;



















// import App from 'next/app';

// class MovieApp extends App{
//     render(){
//         const { Component } = this.props;
//         return(
//            <div>
//                <Nav>
//                 <ul>
//                     <li>Link 1</li>
//                     <li>Link 1</li>
//                     <li>Link 1</li>
//                     <li>Link 1</li>
//                     <li>Link 1</li>
//                 </ul>
//                </Nav>
//                 <div>
//                     <Component/>
//                 </div>
//            </div>
   
//         )
//     }
// }


// export default MovieApp;





// // import React,{Component} from 'react'
// // import App from 'next/app'


// // class MovieApp extends App {

// //     constructor(props){
// //         super(props)
// //         this.state= {

// //         }
// //     }

// //     render()
// //     {
// //         return(
// //             <div>
// //             <Component/>
// //             </div>
// //         )
// //     }
// // }


// // export default MovieApp;