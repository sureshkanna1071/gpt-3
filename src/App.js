import './App.css';
import  { Blog, Features, Footer, Header, Possibility, Whatgp3 } from "./containers";
import { Brand, Navbar, CTA } from "./components"

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgp3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
