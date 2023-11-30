import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage'
import Category from './pages/Category'
import ProfileInfo from "../src/components/Profile/ProfileInfo"
import UserInfo from './components/Profile/UserInfo';
import CategoryInfo from './components/Profile/CategoryInfo';
import HomePage from './pages/HomePage';
import Datetime from './components/DateTime/Datetime';
import Weather from './components/WeatherApi/Weather';
import NwesCard from './components/NewsApi/NwesCard';
import Notes from './components/notes/Notes';
import Timer from './components/Timer/Timer';
import BrowseBtn from './components/BrowseBtn/BrowseBtn';

const App = () => {
  return (
    <>
    {/* <CategoryInfo/> */}
    {/* <UserInfo/> */}
    {/* <ProfileInfo/> */}
    <HomePage/>
    {/* <BrowseBtn/> */}
    {/* <Timer/> */}
    {/* <Notes/> */}
    {/* <NwesCard/> */}
    {/* <Weather/> */}
    {/* <Datetime/> */}
      {/* <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes> */}
    </>
  )
}

export default App