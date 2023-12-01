import React, { useState } from "react"
import "./Container.css"
import Card from "../03 Card/Card"
import ButtonsArea from "../04 Buttons-Area/Buttons-Area"
import quotes from "../assets/quotes"
function Container() {
  let randomNum = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(2)
  const [card, setCard] = useState(quotes[index])
  const nextCard = () => {
    if (randomNum === quotes.length) {
      setCard(quotes[randomNum - 1])
    } else {
      setCard(quotes[randomNum])
    }
    setIndex(randomNum)
  }
  return (
    <div className="container" id="quote-box">
      <Card card={card} />
      <ButtonsArea nextCard={nextCard} card={card} />
    </div>
  )
}

export default Container
