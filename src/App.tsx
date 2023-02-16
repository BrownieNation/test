import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import About from './views/about/About'
import Pokemon from './views/Pokemon/Pokemon'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/pokemon' component={Pokemon}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
