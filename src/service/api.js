import axios from 'axios';

const url = 'http://localhost:3003/user';

export const getUsers = async () => {
   return await axios.get(url);
} 

export const addUsers = async (user) => {
   return await axios.post(url, user)
}