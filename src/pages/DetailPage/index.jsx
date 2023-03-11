import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import style from './style.module.scss'
import ListPage from '../../Components/ListPage'

const DetailPage = () => {

    let { type, id } = useParams();

    const [movie, setMovie] = useState({});
    const [similar, setSimilar] = useState([])

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=en-US`)
            .then(
                response => {
                    setMovie(response.data)
                    // console.log('movie', movie)
                }
            )
    }, [id])


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${api_key}&language=en-US`)
            .then(
                response => {
                    setSimilar(response.data.results)
                    // console.log('similar', similar)
                }
            )
    }, [movie])

    useEffect(() => {
        // console.log('<o', movie)
    }, [movie, similar])


    // Spilting data
    let arr1 = movie.first_air_date ? movie.first_air_date.split('-') : ''
    let air_date = arr1 ? arr1[0] : ''

    let arr2 = movie.release_date ? movie.release_date.split('-') : ''
    let release_date = arr2 ? arr2[0] : ''


    const intro = () => {
        if (type == 'tv') {
            return (
                <div className={style['detail']}>

                    <div>
                        <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.original_title} className={style['poster']} />
                    </div>

                    <div className={style['description-section']}>
                        <p className={style['title']}>{movie.original_name}</p>
                        <p className={style['release-date']}>{air_date}</p>
                        <p >No. of Seasons : {movie.number_of_seasons}</p>

                        <p className={style['overview']}>{movie.overview}</p>

                    </div>
                </div>
            )
        }

        return (
            <div className={style['detail']}>

                <div>
                    <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.original_title} className={style['poster']} />
                </div>
                <div className={style['description-section']}>
                    <p className={style['title']}>{movie.original_title}</p>
                    <p className={style['release-date']}>{release_date}</p>
                    <p className={style['overview']}>{movie.overview}</p>

                </div>


            </div>
        )

    }

    return (
        <Container>
            {intro()}
            <h1>Similar</h1>
            <ListPage data={similar} />
        </Container>
    )
}

export default DetailPage