import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import ListPage from '../../Components/ListPage'
import style from './style.module.scss'

const TVPage = () => {
    const [movies, setMovies] = useState([])

    const api_key = '986707cc3ea4e96eda9719ff4852fabc'


    useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(
                response => {
                    setMovies(response.data.results)
                }
            )
    }, [])

    useEffect(() => {
        console.log('Movies : ', movies)
    }, [movies])


    return (
        <div>
            <Container>
            <h1 className={style['page-head']}>TV Shows</h1>
            <ListPage data={movies} />
            </Container>
        </div>
    )
}

export default TVPage
