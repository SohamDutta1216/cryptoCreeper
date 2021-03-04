import React, { useState } from 'react'
import Coin from './Coin'

export default function Home({ filteredCoins, loading }) {
  return (
    <div>
      {(loading) ?
        <div class="ui fluid container" style={{ marginTop: '500px', marginBottom: '900px', maxWidth: '100%' }}>
          <div class="ui active centered inline massive loader"></div>
        </div>
        :
        <div className="ui container" style={{ marginTop: '150px', maxWidth: '100%' }}>
          <div class="ui center aligned container" style={{ marginBottom: '60px', position: '-webkit-sticky', position: 'sticky', top: '0' }}>
          </div>
          <div>
          </div>
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
                rank={coin.market_cap_rank}
              />
            );
          })}
        </div>
      }
      <div class="ui active modal">

      </div>
    </div>
  )
}