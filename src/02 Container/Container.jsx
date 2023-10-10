import React, { useState } from "react"
import "./Container.css"
import Card from "../03 Card/Card"
import ButtonsArea from "../04 Buttons-Area/Buttons-Area"
import quotes from "../assets/quotes"
function Container() {
  const [cards, setCards] = useState(quotes)
  const randomNum = Math.floor(Math.random() * quotes.length)
  const currCard = randomNum

  return (
    <div className="container">
      <Card card={cards[currCard]} />
      <ButtonsArea />
    </div>
  )
}

export default Container
