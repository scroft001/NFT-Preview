import React from 'react'
import './Card.scss'
import nft from '../images/image-equilibrium.jpg'
import eth from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'
import avatar from '../images/image-avatar.png'
import view from '../images/icon-view.svg'

const Card = () => {
  return (
    <main className='app__card'>
        <div className="app__card-image">
            <img src={nft} alt="nft" />
            {/* <div className='view'>
                <img src={view} alt="nft" />
            </div> */}
        </div>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="app__card-price">
            <div>
                <img src={eth} alt="eth" />
                <p id='eth'>0.041 ETH</p>
            </div>
            <div>
                <img src={clock} alt="clock" />
                <p>3 days left</p>
            </div>
        </div>
        <hr />
        <div className="app__card-user">
            <img src={avatar} alt="avatar" />
            <p>Creation of <span>Jules Wyvern</span></p>
        </div>
    </main>
  )
}

export default Card