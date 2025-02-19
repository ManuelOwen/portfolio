import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Experience from "./pages/Experience"
import Technologies from "./pages/Technologies"
import Community from "./pages/Community"
// import Photos from "./pages/photos"



function App() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900">
      <Navbar />
      <Introduction />
      <About />
      <Experience /> 
      <Community />  
      <Technologies /> 
      {/* <Photos/>  */}
      <Footer />
      
    </div>
  )
}

export default App
