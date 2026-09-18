import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
