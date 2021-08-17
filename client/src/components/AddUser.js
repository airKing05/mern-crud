import React, {useState} from 'react';
import { FormGroup, FormControl, Input, Button, makeStyles, InputLabel, Typography } from '@material-ui/core';
import {addUsers} from '../service/api';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles({
    formContaier: {
        width: '50%',
        margin: '100px auto',
        '& > *' : {
            marginTop : '18px',
        }
    },
    heading: {
        color: 'red',
        fontWeight: '700',
        margin: '0 auto'
    },
    button: {
        marginTop: '40px'
    }
});

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    address: ''
}


export default function AddUser() {
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone, address} = user;
    const classes = useStyles();
    const history = useHistory();

    const getData = (e) =>{
          setUser({...user, [e.target.name]: e.target.value});
        
    }

    const addUsersData = async() =>{
          await addUsers(user);
          history.push('./all-user')
    }
    return (
        <div>
           <FormGroup className={classes.formContaier}>
               <Typography variant="h4" className={classes.heading}>Add User</Typography>
               <FormControl>
                   <InputLabel>Name</InputLabel>
                   <Input placeholder="Enter Name" onChange={(e) => getData(e)} name="name" value={name}/>
               </FormControl>
               <FormControl>
                   <InputLabel>Username</InputLabel>
                   <Input placeholder="Enter Username" onChange={(e) => getData(e)} name="username" value={username}/>
               </FormControl>
               <FormControl>
                   <InputLabel>Email</InputLabel>
                   <Input placeholder="Enter Email" onChange={(e) => getData(e)} name="email" value={email}/>
               </FormControl>
               <FormControl>
                   <InputLabel>Phone</InputLabel>
                   <Input placeholder="Enter Phone" onChange={(e) => getData(e)} name="phone" value={phone}/>
               </FormControl>
               <FormControl>
                   <InputLabel>Address</InputLabel>
                   <Input placeholder="Enter Address" onChange={(e) => getData(e)} name="address" value={address}/>
               </FormControl>
               <Button className={classes.button} variant="contained" color="secondary"
               onClick={() => addUsersData()}>Submit</Button>
           </FormGroup>
        </div>
    )
}
