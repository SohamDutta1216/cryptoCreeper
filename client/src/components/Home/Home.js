import React from 'react'
import Coin from './Coin'

export default function Home({ filteredCoins }) {

  return (
    <div>
      <div className="ui container" style={{ marginTop: '200px', maxWidth: '100%' }}>
        <div class="ui center aligned container" style={{ marginBottom: '60px', position: '-webkit-sticky', position: 'sticky', top: '0' }}>
          <button class="ui inverted button">Currencies</button>
          <button class="ui inverted button">Investments</button>

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
    </div>
  )
}