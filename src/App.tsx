import React from 'react'
import { BrowserRouter /* HashRouter */, Routes, Route, Outlet /* Link */ } from 'react-router-dom'

// local imports
import './App.css'
// import logo from './logo.svg'
import { Home, TestPage } from './pages'

function App() {
  const Layout = (
    <main>
      <div className="m-auto max-w-screen-2xl">
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
            <Route
              path="*"
              element={<h1 className="m-auto text-zinc-100 text-8xl mt-14">404 NOT FOUND</h1>}
            />
          </Route>
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </>
  )
}

export default App
