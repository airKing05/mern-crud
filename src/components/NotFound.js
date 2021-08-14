import React from 'react';
import Error from '../need/img/404-error-message.png'

export default function NotFound() {
    return (
       <img src={Error} alt="not-found-img" style={{margin: "50px 25%", width:'45%'}} />
    )
}
