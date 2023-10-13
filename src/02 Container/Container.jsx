import React, { useState } from "react"
import "./Container.css"
import Card from "../03 Card/Card"
import ButtonsArea from "../04 Buttons-Area/Buttons-Area"
import quotes from "../assets/quotes"
function Container() {
  let randomNum = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(0)
  const [card, setCard] = useState(quotes[index])
  const nextCard = () => {
    /* console.log(randomNum)
    console.log(quotes.length) */
    if (randomNum === quotes.length - 1) {
      setCard(quotes[randomNum - 1])
    } else if (randomNum === index) {
      setCard(quotes[randomNum + 1])
    } else {
      setCard(quotes[randomNum])
    }
    setIndex(randomNum)
  }

  return (
    <div className="container">
      <Card card={card} />
      <ButtonsArea nextCard={nextCard} />
    </div>
  )
}

export default Container
