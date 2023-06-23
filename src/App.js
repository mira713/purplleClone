// import logo from './logo.svg';
import './App.css';
import AllRoute from './Routes/allRoute';
import Dropdown from './usableCompo/dropdown'
import Navbar from './usableCompo/navbar'
import Footer from './pages/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute/>
      <Footer/>
    </div>
  );
}

export default App;
