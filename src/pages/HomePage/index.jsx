import React from 'react'
import Banner from '../../Components/Banner'
import RowSlide from '../../Components/Row'
import requests from '../../requests'


const HomePage = () => {
    return (
        <div>
            <Banner fetchURL={requests.trending} />
            <RowSlide title='Trending Now' fetchURL={requests.trending} />
            <RowSlide title='Movies' fetchURL={requests.movie_list} />
            <RowSlide title='TV Shows' fetchURL={requests.tv_list} />
            <RowSlide title='Discover' fetchURL={requests.discover} />


        </div>
    )
}

export default HomePage
