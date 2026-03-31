import { Suspense, useState } from 'react'
import './App.css'
import Activity from './components/homepage/Activity'
import Banner from './components/homepage/banner/Banner'
import Tools from './components/homepage/tools/Tools'
import Navbar from './components/navbar/Navbar'
import GetStart from './components/homepage/getStart/GetStart'
import Plans from './components/homepage/plans/Plans'
import Ready from './components/homepage/ready/Ready'
import Footer from './components/footer/Footer'

const fetchData = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
const fetchPlansData = async () => {
  const res = await fetch('/plan.json');
  return res.json();
}
const dataPromise = fetchData()
const plansDataPromise = fetchPlansData()

function App() {
  // const [productCount,setProductCount] = useState(0)
  
  const [buyProducts, setBuyProducts] = useState([])
  return (
    <>
      <Navbar buyProducts={buyProducts}></Navbar>
      <Banner></Banner>
      <Activity></Activity>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Tools dataPromise={dataPromise} buyProducts={buyProducts} setBuyProducts={setBuyProducts}></Tools>
      </Suspense>
      <GetStart></GetStart>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Plans plansDataPromise={plansDataPromise}></Plans>
      </Suspense>
      <Ready></Ready>
      <Footer></Footer>

    </>
  )
}

export default App
