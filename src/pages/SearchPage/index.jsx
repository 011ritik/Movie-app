import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SerachPage = () => {

  const { keyword } = useParams();

  const [results, setResults] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=${api_key}&query=${keyword}`)
      .then(
        response => {
          console.log(response.data)
          setResults(response.data.results)
        }
      )
  }, [keyword])

  console.log(keyword)


  return (
    <div>
      {keyword}
      <br />
      this search page
      <br />
      {/* {results} */}
    </div>
  )
}

export default SerachPage
