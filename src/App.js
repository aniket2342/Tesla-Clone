import './App.css';
import Navbar from './Component/Navbar';
import Herosection from './Component/Herosection';
import Model1 from './Component/Model1';
import Accessories from './Component/Accessories';
function App() {
  return (
    <>
    <div className="relative h-screen">
    <Navbar/>
    <Herosection />
  </div>
  <Model1 />
  <Accessories />
    </>
  );
}

export default App;
