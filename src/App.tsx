import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import BuildRouter from './utils/BuilldRouter'
import { routes } from './routes/Routes'

export default function App() {
  return (
        <BrowserRouter>
      <Routes>
        {BuildRouter(routes)}
      </Routes>
    </BrowserRouter>
  )
}
