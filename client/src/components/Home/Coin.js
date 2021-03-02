import React from 'react'

export default function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  return (

    <div style={{ marginTop: '10px', marginLeft: '80px', marginRight: '80px' }}>
      <table class="ui inverted table">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Volume</th>
            <th>1H</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody class="ui left aligned">
          <tr>
            <td class="ui center aligned tiny circular image">
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
          </tr>
        </tbody>

      </table>
    </div>
  )
}