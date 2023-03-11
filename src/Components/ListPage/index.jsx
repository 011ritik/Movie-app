import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import DetailPage from '../../pages/DetailPage'
import style from './style.module.scss'

const ListPage = ({ data }) => {

    const navigate = useNavigate();

    return (
        <div className={style['list-page']}>
            {
                data?.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <img
                                src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
                                alt={movie.name}
                                className={style['poster']}
                                onClick={ () => navigate(`${movie.id}`)}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListPage
