import { Suspense, useState } from 'react'
import './App.css'
import Activity from './components/homepage/Activity'
import Banner from './components/homepage/banner/banner'
import Tools from './components/homepage/tools/Tools'
import Navbar from './components/navbar/Navbar'

const fetchData = async ()=>{
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const dataPromise = fetchData()
  const [buyProducts,setBuyProducts] = useState([])
  // const [productCount,setProductCount] = useState(0)

  return (
    <>
     <Navbar buyProducts={buyProducts}></Navbar>
     <Banner></Banner>
     <Activity></Activity>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Tools dataPromise = {dataPromise} buyProducts={buyProducts} setBuyProducts={setBuyProducts}></Tools>
     </Suspense>

    </>
  )
}

export default App
