import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Team from './pages/Team'
import Matches from './pages/Matches'
import News from './pages/News'
import Media from './pages/Media'
import Contacts from './pages/Contacts'
import Tournaments from './pages/Tournaments'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'

function App() {
  return (
    <Router basename="/pls">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/team" element={<Team />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/news" element={<News />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App 