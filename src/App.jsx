import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home"
import Save from './Components/Save';



function App() {
  const [images, setimages] = useState([])
  const [search, setsearch] = useState("nature")
  const [Loader, setLoader] = useState(true)
  const [saved, setsaved] = useState([])





  const API_KEY = "RDPLPaLspBv84v0Wj7SnD7AS1cyFyKvDkH0KMnkACwWAZFH19LFuqepA";

  useEffect(() => {
    const fetchImage = async () => {

      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,

        {
          headers: {
            Authorization: API_KEY
          },
        }
      )
      // console.log("response from api =", res.data.photos)
      setimages(res.data.photos)
      setLoader(false)
      console.log(images)
    }
    fetchImage()

  }, [search])

console.log(saved)
  return (
    <>
      <BrowserRouter>
        <Navbar setsearch={setsearch} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={Loader} saved={saved} setsaved={setsaved} />} />
          <Route path='/save' element={<Save saved={saved} loader={Loader}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;