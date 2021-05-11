import axios from 'axios'

const apikey = proces.env.REACT_APP_API_KEY

const apiUrl = `http://www.omdbapi.com/?apikey=${apikey}&`

export const getMovies = async () => {
    try {
        const response = await axios(`${apiUrl}/movies`)
        const movies = response.data
        return movies
    } catch (error) {
        throw error
    }
}

export const getMovie = async () =>
{
    try {
        const response = await axios(`${apiUrl}/movies/${id}`)
        const movie = response.data
        return movie
    } catch (error) {
        throw error
    }
}