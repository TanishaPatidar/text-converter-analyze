
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar title="TextPlayer" />
  <div className="container">
   <Textform heading="Enter your text to analyze"/>
   {/* <About/> */}
  </div>
 
    
   </>
  );
}

export default App;
