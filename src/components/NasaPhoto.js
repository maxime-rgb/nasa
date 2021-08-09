import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "./NavBar";


const apiKey= process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){

    const [photoData, setPhotoData] = useState(null);

    useEffect (() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;


    return(
        <>

            <Navbar />

            <div className="nasa-photo">

                {photoData.media_type == "image" ? (

                <img src={photoData.url} alt={photoData.title} className="photo"></img>
                ) : ( 
                photoData.url
                // <iframe 
                // title="space-video"
                // src={}
                // frameBorder="0"
                // gesture="media"
                // allow="encrypted-media"
                // allowFullScreen
                // className="photo"
                // />
                
                )}
                
                <div>
                    <h1>{photoData.title}</h1>
                    <p className="explanation">{photoData.explanation}</p>
                    <p className="date">Date of photo : {photoData.date}</p>
                </div>
            </div>
        </>
    );
}