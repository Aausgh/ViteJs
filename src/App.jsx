import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Quotes from './components/Quotes'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Navmenu from './components/Navmenu'
import Products from './Pages/Products'
import { ToastContainer } from 'react-toastify'
import SecureRoute from './routes/SecureRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navmenu />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='' element={<SecureRoute />}>
          <Route path='/counter' element={<Counter />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App;
