import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/count/counterSlice'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NameState from './contextAPI/NameState'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar /> <Home /> </>
    },
    {
      path: '/about',
      element: <> <Navbar /> <About /> </>
    }
  ])
  return (
    <>
      <NameState>
        <RouterProvider router={router} />
        <button onClick={() => dispatch(decrement())}>-</button><br />
        <div>{count}</div><br />
        <button onClick={() => dispatch(increment())}>+</button><br />
        <button onClick={() => dispatch(multiply(4))}>*</button><br />
      </NameState>
      {/* <Navbar /> */}
    </>
  )
}

export default App
