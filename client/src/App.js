import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Portfolio from './components/Portfolio/Portfolio'
import AuthModal from './components/Modal/Modal';
import useLocalStorage from '../src/useLocalStorage'

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [coins, setCoinData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [portfolio, setPortfolio] = useLocalStorage('portfolio', [])
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false')
      .then(res => {
        setTimeout(() => {
          setLoading(false)
          setCoinData(res.data)
        }, 300)
      }).catch(error => console.log(error))
  }, [])
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()))

  const portfolioCoins = coins.filter((coin) => {
    return portfolio.includes(coin.name)
  })

  return (
    <BrowserRouter>
      <Navbar setSearch={setSearch} user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/" render={() => <Home user={user} setUser={setUser} filteredCoins={filteredCoins} loading={loading} setLoading={setLoading} setPortfolio={setPortfolio} portfolio={portfolio} />} />
        <Route exact path='/portfolio' render={() => <Portfolio portfolioCoins={portfolioCoins} myPortfolio={portfolio} />} />
        <Route exact path='/auth' component={AuthModal} />
      </Switch>

    </BrowserRouter>
  )
}
