
import './App.css'
import { Card } from './components/Card/Card'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <main className='main'>
        <Card nome='Lasanha' imagem='/lasanha.jpg' descricao='Deliciosa lasanha a bolonhesa' preco={60} tempo={30} />

      </main>
      <Footer />
    </div>
  )
}

export default App
