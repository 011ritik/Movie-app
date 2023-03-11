import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import ListPage from '../../Components/ListPage'
import style from './style.module.scss'

const MoviesPage = () => {
    const [tvshows, setTVshows] = useState([])

    const api_key = process.env.REACT_APP_API_KEY


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US`)
            .then(
                response => {
                    setTVshows(response.data.results)
                }
            )
    }, [])

    useEffect(() => {
        // console.log('TV shows : ', tvshows)
    }, [tvshows])


    return (
        <div>
            <Container>
                <h1 className={style['page-head']}>Movies</h1>
                <ListPage data={tvshows} />
            </Container>
        </div>
    )
}

export default MoviesPage
