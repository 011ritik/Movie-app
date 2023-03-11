import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

import style from './style.module.scss'

const RowSlide = ({ title, fetchURL }) => {

  const [trending, setTrending] = useState([])

  useEffect(() => {
    get_trending()
  }, [])

  useEffect(() => {
    console.log('trending:', trending)
  }, [trending])

  const get_trending = async () => {

    let response = await axios.get(`https://api.themoviedb.org/3` + fetchURL)
    let data = await response.data.results

    setTrending(data)
  }


  return (
    <>
      <h1 className={style['title']}>{title}</h1>
      
      <div className={style['row_posters']} >
        {
          trending?.map( (data) => {
            return <img src={'https://image.tmdb.org/t/p/original/' + data.poster_path} className={style['row_poster']} />
          })
        }
      </div>



    </>

  );
}

export default RowSlide