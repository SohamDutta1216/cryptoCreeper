import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Portfolio from './components/Portfolio/Portfolio'

export default function App() {
  const [coins, setCoinData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

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

  return (
    <BrowserRouter>
      <Navbar setSearch={setSearch} />
      <Switch>
        <Route exact path="/" render={() => <Home filteredCoins={filteredCoins} loading={loading} setLoading={setLoading} />} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </BrowserRouter>
  )
}
