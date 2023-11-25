import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage'
import Category from './pages/Category'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="category" element={<Category/>} />
      </Routes>
    </>
  )
}

export default App