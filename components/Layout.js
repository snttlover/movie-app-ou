import React ,{Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Navbar from './Navbar';
import NProgess from 'nprogress';

import {useState} from 'react';


Router.onRouteChangeStart = url=>{
    NProgess.start();
}

Router.onRouteChangeComplete = ()=>{
    NProgess.done();
}

Router.onRouteChangeError = url=>{
    NProgess.done();
}



const Layout = ({children,title})=>{

    

   

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

            <body className="my-2">
                <div className="text-center mb-4">
                <h3>{title}</h3>
                </div>
                {children}
            </body>


        </div>
    )
}





        

    export default Layout;