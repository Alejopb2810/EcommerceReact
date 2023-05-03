import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  //Este es el codigo para crear un nuevo usuario
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'
  //   const data = {
  //     firstName: "Alejandro",
  //     lastName: "Parrado",
  //     email: "ronayedsports@gmail.com",
  //     password: "28jehova10",
  //     phone: "0123456789",
  //     role: "alumn"
  //   }

  //   axios.post(URL, data)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }, [])

  //Aqui termina


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        {/* Rutas Protegidas  */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
