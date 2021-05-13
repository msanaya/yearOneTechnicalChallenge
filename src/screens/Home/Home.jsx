import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Home.css'
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/Search/Search'

console.log(process.env.REACT_APP_MOVIE_API_KEY)

const Home = () => {
    const [moviesData, setMoviesData] = useState([]);
    // const [loading, setLoading] = useState(true);

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY

    useEffect(() => {
        const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&`
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                setMoviesData(data.Search)
            });
    }, []);

    

    // useEffect(() => {
    //     const getMovies = async () => {
    //         const moviesApiURL = ;
    //         const response = await axios.get(moviesApiURL, {
    //             headers: {
    //                 Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
    //             },
    //         });
    //         setMoviesData(response.data.records);
    //     };
    //     getMovies();
    // }, []);

    // const getMovie = async () => {
    //     const movieApiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchValue}`;
    //     const response = await axios.get(movieApiURL, {
    //         headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_KEY}`,
    //         },
    //     });
    //     setMoviesData(response.data.records);
    // };
    // getMovie();

    const handleSubmit = e => e.preventDefault();


    return (
        <Layout>
            <div className="home">
                <h1>This is home</h1>
                <Search onSubmit={handleSubmit}
                />
            </div>

        </Layout>
    );
};


export default Home;
