
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Secao } from './components/Seção/Secao'
import produtos from '../produtos.json'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Secao titulo='Entradas' itens={produtos.entradas} />
      <Secao titulo='Saladas' itens={produtos.saladas} />
      <Secao titulo='Pratos Principais' itens={produtos.pratos} subsecao={['Massas', 'Carnes']} />
      <Secao titulo='Sobremesas' itens={produtos.sobremesas} />
      <Secao titulo='Bebidas' itens={produtos.bebidas} />
      <Footer />
    </div>
  )
}

export default App
