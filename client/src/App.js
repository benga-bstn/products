import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Product from './components/product'
import Products from './components/products'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/products/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
