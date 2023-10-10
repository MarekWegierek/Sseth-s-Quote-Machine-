import "./Buttons-Area.css"
function ButtonsArea() {
  return (
    <div className="buttons-area">
      <div className="btn-twitter-area">
        <button className="btn btn-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
          </svg>
        </button>
        <p>Share on Twitter/X</p>
      </div>
      <div className="btn-next-quote-area">
        <button className="btn btn-secondary">Next Quote</button>
      </div>
    </div>
  )
}

export default ButtonsArea