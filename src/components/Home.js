import React from 'react';
import { Link } from 'react-router-dom';




export default function Home(){

    return(

        <div className="home">

            <Link className="home-link" to="/nasaPhoto"> Astronomy Picture of the Day <br/> by nasa</Link>

        </div>
    );
}