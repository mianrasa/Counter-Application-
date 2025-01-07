import Content from './components/Content'
import CounterApp from './components/CounterApp'
import Footer from './components/Footer'
import Header from './components/header'

function App() {
  let user = "miru"

  return (
    <div className='app'>
      <Header user={user} />
      <CounterApp />
      <Footer user={user} />
    </div>
  )
}

export default App
