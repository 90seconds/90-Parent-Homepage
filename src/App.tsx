import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import VideoCreationAgent from './pages/VideoCreationAgent'
import EnterprisePlatform from './pages/EnterprisePlatform'
import TheAgency from './pages/TheAgency'
import ContentAgent from './pages/ContentAgent'
import CustomerStory from './pages/CustomerStory'
import RealShoots from './pages/RealShoots'
import AIStudio from './pages/AIStudio'
import CreatorPro from './pages/CreatorPro'
import Affiliate from './pages/Affiliate'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030303]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video-creation-agent" element={<VideoCreationAgent />} />
          <Route path="/enterprise-platform" element={<EnterprisePlatform />} />
          <Route path="/agency" element={<TheAgency />} />
          <Route path="/content-agent" element={<ContentAgent />} />
          <Route path="/customer-story" element={<CustomerStory />} />
          <Route path="/real-shoots" element={<RealShoots />} />
          <Route path="/ai-studio" element={<AIStudio />} />
          <Route path="/creator-pro" element={<CreatorPro />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
