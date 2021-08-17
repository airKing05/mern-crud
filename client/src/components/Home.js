import { Typography } from '@material-ui/core';
import React from 'react';
import HomePage from '../need/img/home.png';

export default function Home() {
    return (
        <div>
           <img src={HomePage} alt="home-img" style={{overflow:'hidden', width:'100%', height:'90vh', opacity:'0.5'}} />
           <Typography variant="h2" style={{position:'absolute', top:'50%', left:'18%'}}> This is Home Page of this website </Typography>
        </div>
    )
}
