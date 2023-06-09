import Home from "./components/Home/Home"
import Navbar from "./components/nav/Nav"
import AOS from 'aos';
import 'aos/dist/aos.css';
import BarLoader from "react-spinners/BarLoader";
import {useState, useEffect} from "react"

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div className="App">
    {
    loading ?
    <div className="loader">
    <BarLoader
    loading={loading}
    size={800}
    width={200}
    color="#008ab3"
    aria-label="Loading Spinner"
    data-testid="loader"
    speedMultiplier={1}
  /></div>
  :<>
  <div className='animation-apparition'>
      <Home/>
      <Navbar/>
    </div>
    </>
}
</div>
);
}

export default App
