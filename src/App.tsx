import React from 'react'
import { /* BrowserRouter, */ HashRouter, Routes, Route } from 'react-router-dom'

// local imports
import './App.css'
import logo from './logo.svg'

function App() {
  const templateHome = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={templateHome} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
