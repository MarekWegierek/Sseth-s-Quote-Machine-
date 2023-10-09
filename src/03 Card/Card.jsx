import React from "react"
import "./Card.css"
function Card() {
  return (
    <div className="card">
      <a
        href="https://www.youtube.com/watch?v=sw8v5__Ytf4&pp=ygUOc3NldGggaGVyb2VzIDM%3D"
        target="_blank"
      >
        <img
          className="card-cover"
          src="https://heroes.thelazy.net/images/0/0c/Homm_sod.jpg"
        ></img>
      </a>
      <h4 className="card-game">Heroes of Might and Magic III</h4>
      <p className="quoteMain">
        Thanks to its hand sprite graphics, Heroes III aged better than most of
        the girls I knew from high school. Then again:
      </p>
      <h5 className="quoteBold">heroine is one hell of a drug</h5>
    </div>
  )
}

export default Card
