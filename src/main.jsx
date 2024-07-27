import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <> <Navbar /> <Home /> </>
//   },
//   {
//     path: '/about',
//     element: <> <Navbar /> <About /> </>
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>,
)
