import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
// import About from '../pages/About'
import Dashboard from '../pages/Dashboard/Dashboard'
// import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import DeliverablesManagement from '../pages/Deliverables/DeliverablesOverView'
import StaffInformation from '../pages/Staffs_Information/Staff_Information'
import PendingReview from '../pages/Reviews/PendingReviews'
import Reports from '../pages/Reports/Reports'
import DashboardSummary from '../pages/Dashboard/Dashboard'
import SettingsScreen from '../pages/Settings/Settings'
import Login from '../pages/Login/Login'
import StaffList from '../pages/Staffs_Information/StaffList'

export function AppRoutes() {
return (
    <Routes>
        <Route path="/auth" element={<Login />} />


      <Route element={<AppLayout />}>

        <Route path="/pending-review" element={<PendingReview />} />
        <Route path="/my-deliverables" element={<DeliverablesManagement />} />
        <Route path="/staff-information" element={<StaffInformation />} />
        <Route path="/dashboard" element={<DashboardSummary />} />
        <Route path="/staff-list" element={<StaffList />} />


/staff-list
        <Route path="/reports" element={<Reports />} />


        <Route path="/settings" element={<SettingsScreen />} />



        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
