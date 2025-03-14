import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element= {<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tour-details' element={<TourDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/search-result-list' element={<SearchResultList/>} />
    </Routes>
  )
}

export default Routers