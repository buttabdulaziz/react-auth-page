import './App.css'
import AuthPage from './AuthPage'
import { Navbar } from './components/navbar/Navbar'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
    <AuthPage />
    </>
  )
}

export default App
