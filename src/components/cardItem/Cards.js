import React from 'react'
import CardItem from './CardItem'
import './cards.css'
import img9 from '../../assets/images/img-9.jpg'
import img2 from '../../assets/images/img-2.jpg'
import img8 from '../../assets/images/img-8.jpg'
import img3 from '../../assets/images/img-3.jpg'
import img4 from '../../assets/images/img-4.jpg'
function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destination!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards