import './App.css'
import {Link,  Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';

function App() {
  const location = useLocation()
  const isActive =(path) => location.pathname === (path)

  return (
    <div className="App">
      <div className='navsite'>
        <div className='logo'></div>
        <Link to='/dashboard' className={`dashboard ${isActive("/dashboard") ? "active" : ""}`}>DASHBOARD</Link>
        <Link to='/transactions' className={`transactions ${isActive("/transactions") ? "active" : ""}`}>TRANSACTIONS</Link>
        <Link to='/analytics' className={`analytics ${isActive("/analytics") ? "active" : ""}`}>ANALYTICS</Link>
      </div>
      <div className='display-page'>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
