import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import LongSection from "./components/LongSection/LongSection";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import StickyButton from "./components/StickyButton/StickyButton";

function App() {
  return (
    <div className='App'>
      <StickyButton />
      <Hero />
      {/* <Header /> */}
      <LongSection />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
