import React from "react"
import "./Card.css"
function Card({ card }) {
  const { id, game, url, cover, quoteMain, quoteBold } = card

  return (
    <div className="card" key={id}>
      <div>
        <a href={url} target="_blank">
          <img className="card-cover" src={cover}></img>
        </a>
        <h4 className="card-game" id="author">
          {game}
        </h4>
      </div>
      <p className="quoteMain" id="text">
        {quoteMain}
      </p>
      <h5 className="quoteBold">{quoteBold}</h5>
    </div>
  )
}

export default Card
