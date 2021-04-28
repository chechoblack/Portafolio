import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
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
