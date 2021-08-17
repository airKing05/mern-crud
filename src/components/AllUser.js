import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUsers } from '../service/api';

const useStyles = makeStyles({
    table : {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    header: {
       '& > *' : {
        backgroundColor: '#000',
        fontSize: '17px',
        color: '#fff'
       }
    },
    rowData: {
        '& > *' :{
            fontSize: '16px'
        }
    }
})

export default function AllUser() {
    const [users, setUsers] = useState([]);

    const classes = useStyles(); 

    useEffect(() => {
       getAllUsers();
    }, [])
    const getAllUsers = async () => {
       const response = await getUsers();
       console.log(response.data);
       setUsers(response.data);
    }

    const deleteUsersData = async(id) =>{
        await deleteUsers(id);
        getAllUsers();
    }
    return (
        <div>
          
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.header}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       users.map((user, index) =>{
                           return(
                              
                           <TableRow key={index} className={classes.rowData}>
                            <TableCell>{user.id }</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: '10px', fontSize: '10px'}}
                                to={`/edit/${index+1}`} component = {Link}>Edit</Button>
                                <Button variant="contained" color="secondary"  style={{fontSize: '10px'}}
                                onClick={() => {deleteUsersData(user.id)}}>Delete</Button>
                            </TableCell>
                            </TableRow>)
                      
                            
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
