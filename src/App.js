import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src="./assets/logo_portafolio.png" alt="logo"></img>
        </div>
        <ul className="nav-area">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Services">Skills</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      <section id="Home">
        <Home></Home>
      </section>
      <section id="About">
        <Home></Home>
      </section>
      <section id="Services">
        <Home></Home>
      </section>
      <section id="Portfolio">
        <Home></Home>
      </section>
      <section id="Contact">
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
