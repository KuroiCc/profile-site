import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// local imports
import logo from './logo.svg'
import styles from './App.module.css'

function App() {
  const templateHome = (
    <header className={styles['App-header']}>
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles['App-link']}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={templateHome} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
