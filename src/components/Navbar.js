import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles ({
    header :{
        background: '#111111',
    },
    tabs:{
        color: '#ffffff',
        margin: '25px',
        textDecoration: 'none'
    },
})

export default function Navbar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
        <Toolbar>
          <NavLink exact to="./" className={classes.tabs}> Home </NavLink>
          <NavLink exact to="/all-user" className={classes.tabs}> All User </NavLink> 
          <NavLink exact to="/add-user" className={classes.tabs}> Add User </NavLink>
        </Toolbar>
      </AppBar>
    )
}
