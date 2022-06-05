import React from 'react'
import { /* BrowserRouter, */ Routes, Route, Link, HashRouter } from 'react-router-dom'

// local imports
import logo from './logo.svg'
import styles from './App.module.css'
import { TestPage } from './pages'

function App() {
  const templateHome = (
    <header className={styles['App-header']}>
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <p>
        Here is the home page <br />
        Click following link to other page
      </p>
      <Link className={styles['App-link']} to="/testPage">
        Test Page
      </Link>
    </header>
  )
  return (
    <div className={styles.App}>
      <HashRouter>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={templateHome} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        {/* </BrowserRouter> */}
      </HashRouter>
    </div>
  )
}

export default App
