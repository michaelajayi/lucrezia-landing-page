import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import LongSection from "./components/LongSection/LongSection";

function App() {
  return (
    <div className='App'>
      {/* <Hero /> */}
      <LongSection />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
