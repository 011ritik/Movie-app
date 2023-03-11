import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

import style from './style.module.scss'


const Banner = ({ fetchURL }) => {
    const [random, setRandom] = useState({})

    useEffect(() => {
        get_trending()
    }, [])

    useEffect(() => {
        // console.log('Random value:', random)
    }, [random])

    const get_trending = async () => {

        let response = await axios.get(`https://api.themoviedb.org/3` + fetchURL)
        let data = await response.data.results

        const random_trending = Math.floor(Math.random() * data.length)
        setRandom(data[random_trending])


    }

    let arr = random.first_air_date ? random.first_air_date.split('-') : ''
    let air_date = arr ? arr[0] : ''
    // console.log(arr)

    let descriptin = random.overview ? random.overview.split('.')[0] : ''


    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/original/' + random?.backdrop_path} className={style['banner-image']} />

            <div className={style['movie-detail-div']}>
                <p className={style['title']}>{random.original_name ? random.original_name : random.original_title}</p>
                <p className={style['media-type']}>
                    <span>{air_date}</span>
                    <span>{random.media_type}</span>
                    <span className={style['rating']}>
                        {Math.round(random.vote_average * 10) / 10}
                    </span>
                </p>

                {/* <p>{random.overview}</p> */}
                <Button className={style['banner-btn']}>Play</Button>
                <Button className={style['banner-btn']}>My List</Button>

                <p className={style['description']}>{descriptin}</p>

            </div>

        </div>
    )
}

export default Banner
