import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Home />
      <About />
      <ProgressBar bgcolor="orange" progress='30'  height={30} />
    </>
  );
}

export default App;
