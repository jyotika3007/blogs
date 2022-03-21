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

 export const getRecentPosts = async() => {
     try{
         return await axios.post(`${URL}/get_recent_posts`)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }

 export const getFeaturedPosts = async() => {
     try{
         return await axios.post(`${URL}/get_featured_posts`)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }

 export const getMostReadPosts = async() => {
     try{
         return await axios.post(`${URL}/get_most_read_posts`)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }

 export const getUsersPosts = async() => {
     try{
         return await axios.post(`${URL}/get_users_posts`)
        }
        catch(error){
            console.log('Error creating Post ', error)
        }
 }