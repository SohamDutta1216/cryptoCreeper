import React from 'react'

export default function Portfolio({ portfolioCoins }) {
  return (
    <div class="ui center aligned container" style={{ marginTop: '200px', maxWidth: '100%' }}>
      <h1 class='ui header' style={{ color: 'white', fontSize: '50px' }}> My Portfolio</h1>
      {portfolioCoins.map(coin => {
        return (
          <div style={{ marginTop: '30px', marginLeft: '1px', marginRight: '1px' }}>
            <table class="ui inverted table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Coin</th>
                  <th>Price</th>
                  <th>Volume</th>
                  <th>1H</th>
                  <th>Market Cap</th>
                </tr>
              </thead>
              <tbody class="ui left aligned">
                <tr>
                  <td >
                    <h2>{coin.market_cap_rank}</h2>
                  </td>
                  <td class="ui center aligned small circular image">
                    <img src={coin.image} alt='crypto' />
                    <h5 >{coin.symbol.toUpperCase()}</h5>
                    <p>{coin.name}</p>
                  </td>
                  <td>
                    <h5>${coin.current_price}</h5>
                  </td>
                  <td>
                    <p >${coin.market_cap.toLocaleString()}</p>
                  </td>

                  {coin.price_change_percentage_24h < 0 ? (
                    <td>
                      <p style={{ color: 'red' }}>{coin.price_change_percentage_24h}%</p>
                    </td>
                  ) : (
                    <td>
                      <p style={{ color: 'green' }}>{coin.price_change_percentage_24h}%</p>
                    </td>
                  )}
                  <td>
                    <p >
                      {coin.total_volume.toLocaleString()}
                    </p>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        )
      })}
    </div>
  )
}