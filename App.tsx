import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/screens/SplashScreen';
import Onboarding from './components/screens/Onboarding';
import Permissions from './components/screens/Permissions';
import Home from './components/screens/Home';
import AlertsFeed from './components/screens/AlertsFeed';
import AlertDetails from './components/screens/AlertDetails';
import SOSEmergency from './components/screens/SOSEmergency';
import EmergencyContacts from './components/screens/EmergencyContacts';
import NearestHelp from './components/screens/NearestHelp';
import SafeZoneNav from './components/screens/SafeZoneNav';
import ReportIncident from './components/screens/ReportIncident';
import Profile from './components/screens/Profile';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alerts" element={<AlertsFeed />} />
          <Route path="/alert/:id" element={<AlertDetails />} />
          <Route path="/sos" element={<SOSEmergency />} />
          <Route path="/contacts" element={<EmergencyContacts />} />
          <Route path="/help" element={<NearestHelp />} />
          <Route path="/navigate" element={<SafeZoneNav />} />
          <Route path="/report" element={<ReportIncident />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
