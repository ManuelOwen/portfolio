import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./pages/Experience";
import Technologies from "./pages/Technologies";
import Community from "./pages/Community";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar />
    <div className="bg-gradient-to-r from-black via-gray-900 to-purple-900 min-h-screen">
    

      <div className="space-y-16">
        <section id="home"><Introduction /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="technologies"><Technologies /></section>
        <section id="community"><Community /></section>
        <section id="projects"><Projects /></section>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default App;
