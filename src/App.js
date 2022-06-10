import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Hrader/Header";
import Projects from "./Components/Project/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";



function App() {
  return (
    <div className="bg-slate-50">
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
