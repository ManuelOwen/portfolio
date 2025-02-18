import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Experience from "./pages/Experience"
import Technologies from "./pages/Technologies"
import Community from "./pages/Community"
import Photos from "./pages/photos"



function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Experience /> 
      <Community />  
      <Technologies /> 
      <Photos/> 
      <Footer />
      
    </div>
  )
}

export default App
