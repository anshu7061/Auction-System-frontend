import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./Pages/Contact"
import {Route,Routes} from "react-router-dom"
import Chat from "./Pages/Chat"
import { analytics } from "./Helper"
import { logEvent } from "firebase/analytics"
import About from "./Pages/About"

function App() {
  

  if(analytics){
    logEvent(analytics,"Init...")
  }

  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/about"element={<About/>}/>
     </Routes>
     
     <Footer/>
    </div>
  )
}

export default App
