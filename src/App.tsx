import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Offers from './components/Offers'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App