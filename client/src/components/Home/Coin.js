import React from 'react'



export default function Coin({ image, name, symbol, price, volume, priceChange, marketcap, rank, setPortfolio, portfolio, user }) {
  const sendCoin = (coinName) => {
    setPortfolio(portfolio.concat(coinName))
    console.log(portfolio)
  }

  return (

    <div style={{ marginTop: '10px', marginLeft: '1px', marginRight: '1px' }}>
      <table class="ui inverted table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Volume</th>
            <th>1H</th>
            <th>Market Cap</th>
            {user?.result ? (<th style={{ textAlign: 'center' }}>Add to Portfolio</th>) : (<div> </div>)}

          </tr>
        </thead>
        <tbody class="ui left aligned">
          <tr>
            <td >
              <h2>{rank}</h2>
            </td>
            <td class="ui center aligned small circular image">
              <img src={image} alt='crypto' />
              <h5 >{symbol.toUpperCase()}</h5>
              <p>{name}</p>
            </td>
            <td>
              <h5>${price}</h5>
            </td>
            <td>
              <p >${volume.toLocaleString()}</p>
            </td>

            {priceChange < 0 ? (
              <td>
                <p style={{ color: 'red' }}>{priceChange}%</p>
              </td>
            ) : (
              <td>
                <p style={{ color: 'green' }}>{priceChange}%</p>
              </td>
            )}
            <td>
              <p >
                {marketcap.toLocaleString()}
              </p>
            </td>
            {user?.result ? (<div class='ui center aligned'>
              <button onClick={() => sendCoin(name)} class='ui orange button'>+</button>
            </div>) : (<div> </div>)}


          </tr>
        </tbody>

      </table>
    </div>
  )
}