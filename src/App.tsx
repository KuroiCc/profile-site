import React from 'react'
import { /* BrowserRouter, */ HashRouter, Routes, Route /* Link */ } from 'react-router-dom'

// local imports
import './App.css'
// import logo from './logo.svg'
import { Home, TestPage } from './pages'

function App() {
  // const templateHome = (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Here is the home page <br />
  //         Click following link to other page
  //       </p>
  //       <Link className="App-link" to="/testPage">
  //         Test Page
  //       </Link>
  //     </header>
  //   </div>
  // )
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
