import React, { useEffect } from "react"
import "./Card.css"
import { useState } from "react"
function Card(card) {
  const [cardcon, setCard] = useState(card)
  const { id, game, url, cover, quoteMain, quoteBold } = cardcon.card

  return (
    <div className="card" id={id}>
      <div>
        <a href={url} target="_blank">
          <img className="card-cover" src={cover}></img>
        </a>
        <h4 className="card-game">{game}</h4>
      </div>
      <p className="quoteMain">{quoteMain}</p>
      <h5 className="quoteBold">{quoteBold}</h5>
    </div>
  )
}

export default Card
