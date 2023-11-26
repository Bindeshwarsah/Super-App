import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage'
import Category from './pages/Category'
import ProfileInfo from "../src/components/Profile/ProfileInfo"
import UserInfo from './components/Profile/UserInfo';
import CategoryInfo from './components/Profile/CategoryInfo';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
    {/* <CategoryInfo/> */}
    {/* <UserInfo/> */}
    {/* <ProfileInfo/> */}
    <HomePage/>
      {/* <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="category" element={<Category/>} />
      </Routes> */}
    </>
  )
}

export default App