import './App.css'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'
import AccountSettingsPage from './pages/AccountSettingsPage'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
      </Routes>
    </div>
  )
}

export default App
