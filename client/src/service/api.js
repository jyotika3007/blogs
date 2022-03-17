 import axios from 'axios';

const URL = 'http://localhost:8000'

 export const createPost = async(post) => {
     try{
         console.log(post);
         return await axios.post(`${URL}/create_post`,post)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }

 export const getAllPosts = async() => {
     try{
         return await axios.post(`${URL}/get_posts`)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }