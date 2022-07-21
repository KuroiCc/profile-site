import React from 'react'
import { BrowserRouter /* HashRouter */, Routes, Route, Outlet /* Link */ } from 'react-router-dom'

// local imports
import './App.css'
// import logo from './logo.svg'
import { Home, TestPage } from './pages'

function App() {
  const Layout = (
    <main>
      <div className="m-auto max-w-screen-2xl overflow-clip">
        <Outlet />
      </div>
    </main>
  )
  return (
    <>
      <BrowserRouter>
        {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={Layout}>
            <Route index element={<Home />} />
            <Route path="/testPage" element={<TestPage />} />
          </Route>
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </>
  )
}

export default App
