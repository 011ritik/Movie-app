import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NetNavbar from './Components/Navbar';
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage';
import TVPage from './pages/TVPage';
import DetailPage from './pages/DetailPage';
import SerachPage from './pages/SearchPage';

function App() {
  return (
    <>
      <Router>
        <NetNavbar />
        <Routes>
          
          <Route element={<HomePage />} path='' />
          <Route element={<MoviesPage />} path='/movie' />
          <Route element={<TVPage />} path='/tv' />
          <Route element={<SerachPage />} path='/search/:keyword' />
          <Route element={<DetailPage />} path='/:type/:id' />

        </Routes>
      </Router>

    </>
  );
}

export default App;
