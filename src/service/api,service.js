import axios from 'axios'

const Base_URl = 'https://youtube-v31.p.rapidapi.com'
const RAPID_API_KEY = process.env.REACT_APP_PUBLIC_KEY

const options = {
    
    params: {
    maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY.toString() ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' ,
     
    }
  }



export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${Base_URl}/${url}`, options)
        return response.data
    },
}