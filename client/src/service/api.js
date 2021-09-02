import axios from 'axios';

// const url = 'http://localhost:3000/user';
const url = 'http://localhost:4000/users';

export const getUsers = async (id) => {
   id = id || ''
   return await axios.get(`${url}/${id}`)
} 

export const addUsers = async (user) => {
   return await axios.post(`${url}/add-user`, user)
}

export const editUsers = async(id, user) => {
   return await axios.put(`${url}/${id}`, user)
}

export const deleteUsers =  async(id) =>{
   return await axios.delete(`${url}/${id}`)
}