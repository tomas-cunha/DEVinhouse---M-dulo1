
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Secao } from './components/Seção/Secao'
import produtos from '../produtos.json'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Secao titulo='Pratos principais' array={produtos.entradas} />
      <Footer />
    </div>
  )
}

export default App
