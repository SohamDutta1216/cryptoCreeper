import React from 'react'
import Coin from './Coin'

export default function Home({ filteredCoins }) {

  return (
    <div>
      <div className="ui container" style={{ marginTop: '200px', maxWidth: '100%' }}>
        <div class="ui center aligned container" style={{ marginBottom: '60px' }}>
          <button class="ui inverted button">All Coins</button>
          <button class="ui inverted button">Watch List</button>
          <button class="ui inverted button">Trending</button>
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
            />
          );
        })}
      </div>
    </div>
  )
}