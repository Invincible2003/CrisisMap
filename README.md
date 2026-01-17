## LIVE DEMO
https://crisis-map.vercel.app

# CrisisMap – Disaster & Emergency Alert App

A world-class mobile-first web application designed to help citizens during disasters with live alerts, safe routes, SOS emergency system, nearest hospitals/police, and safe zone navigation.

## 🎯 Features

### Core Functionality
- **Live Disaster Alerts** - Real-time notifications about emergencies in your area
- **Safe Route Navigation** - AI-powered routing that avoids danger zones
- **SOS Emergency Mode** - One-tap emergency assistance with countdown
- **Emergency Contacts** - Quick access to personal and official emergency contacts
- **Nearest Help** - Find nearby hospitals, police stations, fire departments, and shelters
- **Incident Reporting** - Community-powered disaster reporting system

### Screens (12+)
1. **Splash Screen** - Animated app loading with logo
2. **Onboarding** - 3-slide introduction to key features
3. **Permissions** - Location, notifications, and contacts access
4. **Home Map** - Main dashboard with live map and status
5. **Live Alerts Feed** - Filtered list of all active alerts
6. **Alert Details** - Detailed information with safety instructions
7. **SOS Emergency** - Emergency mode with countdown and quick actions
8. **Emergency Contacts** - Manage personal emergency contacts
9. **Nearest Help** - Find and navigate to emergency services
10. **Safe Zone Navigation** - Route planning with risk assessment
11. **Report Incident** - Submit new incident reports
12. **Profile & Settings** - User preferences and app settings

## 🎨 Design System

### Colors
- **Primary (Emergency Red)**: #EF4444
- **Warning (Yellow)**: #FBBF24
- **Safe (Green)**: #10B981
- **Background Dark**: #0A0A0A
- **Surface**: #1A1A1A

### Typography
- Font: Inter (system fallbacks)
- Scale: H1 (32px), H2 (24px), H3 (18px), Body (15px), Caption (13px)

### Components
- **Buttons**: Primary, Secondary, Ghost, Icon
- **Badges**: Safe, Alert, Danger, Verified, Neutral
- **Cards**: Elevated, Bordered, Default
- **Inputs**: Search bar, Filter chips
- **Layout**: Bottom sheets, Icon buttons

## 🚀 Tech Stack

- **React** - UI framework
- **React Router** - Navigation
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 📱 Mobile Optimization

- Optimized for 390px viewport (iPhone 14/15)
- Touch-friendly interactions
- Smooth animations and transitions
- Dark mode first design
- Premium spacing and accessibility

## 🔄 Navigation Flow

```
Splash → Onboarding → Permissions → Home
├── Home → Alerts Feed → Alert Details → Safe Navigation
├── Home → SOS → Contacts
├── Home → Nearest Help → Navigate
├── Home → Report Incident
└── Home → Profile
```

## 🎯 Key Interactions

- **SOS Button**: Hold to activate emergency mode with 10-second countdown
- **Alert Cards**: Tap to view details, share, or navigate to safety
- **Filter Chips**: Filter alerts by type (Flood, Earthquake, Fire, Storm)
- **Quick Actions**: One-tap access to safe routes, help, and reporting

## 🔒 Safety Features

- Live location sharing during emergencies
- Verified alerts from official sources
- Risk-level indicators on routes
- Offline map download capability
- Multiple emergency contact support

## 📍 Use Cases

1. **Natural Disasters**: Floods, earthquakes, wildfires, storms
2. **Urban Emergencies**: Building fires, gas leaks, civil unrest
3. **Medical Emergencies**: Quick access to hospitals and ambulances
4. **Community Safety**: Crowdsourced incident reporting
5. **Evacuation Planning**: Safe route navigation to shelters

## 🎨 Design Principles

- **Dark Mode First**: Optimized for low-light emergency situations
- **High Contrast**: Accessible in stressful conditions
- **Touch-Friendly**: Large tap targets for quick actions
- **Minimal Cognitive Load**: Clear hierarchy and intuitive flow
- **Premium Feel**: Polished animations and micro-interactions

## 📦 Project Structure

```
/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterChip.tsx
│   │   ├── IconButton.tsx
│   │   └── BottomSheet.tsx
│   └── screens/         # Screen components
│       ├── SplashScreen.tsx
│       ├── Onboarding.tsx
│       ├── Permissions.tsx
│       ├── Home.tsx
│       ├── AlertsFeed.tsx
│       ├── AlertDetails.tsx
│       ├── SOSEmergency.tsx
│       ├── EmergencyContacts.tsx
│       ├── NearestHelp.tsx
│       ├── SafeZoneNav.tsx
│       ├── ReportIncident.tsx
│       └── Profile.tsx
├── styles/
│   └── globals.css      # Design system & theme
└── App.tsx              # Main app with routing
```

## 🌟 Premium Features

- Smooth page transitions
- Animated loading states
- Real-time countdown timers
- Interactive map visualizations
- Risk assessment meters
- Live status indicators
- Pulse animations for alerts
- Touch feedback on interactions

---

**Built with ❤️ for emergency preparedness and community safety**
