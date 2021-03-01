import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ExitToAppSharp, SettingsApplications } from '@material-ui/icons'

export default function Home() {

  useEffect(() => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false')
      .then(res => {
        setCoinData(res.data)
      }).catch(error => console.log(error))
  }, [])

  return (
    <div className='coin-list'>
      <div className='search-bar'>
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" />
        </form>

      </div>
    </div>
  )
}