import Link from 'next/link';
import React, {Component} from 'react';

export default class Navbar extends Component{
    componentDidMount(){
        console.log('Navbar initialized')
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <Link href="/">
        <a className="navbar-brand" >Start Bootstrap</a>
        </Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
              <Link href="/">
              <a className="nav-link" >Home
              <span className="sr-only">(current)</span>
            </a>
              </Link>
           
          </li>
          <li className="nav-item">
              <Link  href="/about">
              <a className="nav-link">About</a>
              </Link>
            
          </li>
          <li className="nav-item">
              <Link href="services">
            <a className="nav-link" >Services</a>
              </Link>
          </li>
          <li className="nav-item">
              <Link href="contact">
            <a className="nav-link" >Contact</a>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        )
    }


}