import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Subscribe from "./components/Subscribe/Subscribe"
import Register from "./components/Register/Login"
import Login from "./components/Login/Register"
import AdminHome from "./components/Admin/adminHome"
import Subscribers from "./components/Subscribers/Subscribers"
const App = () => {
  return (
    <>

     <BrowserRouter>
     <Header/>
     <Routes>
          <Route path='/Home' element={<Homepages/>} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route  path='/culture' element={<Culture/>} />
          <Route path='/Subscribe' element={<Subscribe/>}/>
          <Route  path='/register' element={<Register/>}/>
          <Route  path='/' element={<Login/>}/>
          <Route  path='/adminHome' element={<AdminHome/>}/>
          <Route  path='/subscribers' element={<Subscribers/>}/>
        
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
