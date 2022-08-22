
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Secao } from './components/Seção/Secao'
import produtos from '../produtos.json'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Secao titulo='Entradas' array={produtos.entradas} />
      <Secao titulo='Saladas' array={produtos.saladas} />
      <Secao titulo='Pratos Principais' array={produtos.pratos} />
      <Secao titulo='Sobremesas' array={produtos.sobremesas} />
      <Secao titulo='Bebidas' array={produtos.bebidas} />
      <Footer />
    </div>
  )
}

export default App
