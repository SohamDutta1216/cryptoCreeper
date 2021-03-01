import React from 'react'

export default function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p >{symbol}</p>
        </div>
        <div >
          <p >${price}</p>
          <p >${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p >{priceChange}%</p>
          ) : (
              <p >{priceChange}%</p>
            )}

          <p >
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}