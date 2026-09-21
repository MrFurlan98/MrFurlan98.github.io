import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

export default function App() {
  return (
    <>
      <div className="backdrop" aria-hidden="true" />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
