import Layout from '../components/Layout';
import Head from 'next/head';
import React from 'react';
import {userRouter} from 'next/router';

const About =()=>{
    return(
        <React.Fragment>
              <Head>
                <title>About page</title>
            </Head>
            <p>Hey this is about page</p>
        </React.Fragment>
          
        
    )
}

export default About;