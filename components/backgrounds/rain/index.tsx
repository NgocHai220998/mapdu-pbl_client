const BGRain = () => {
  return (
    <>
      <div className="bg-rain-container">
        <div className="bg-rain-container__rain"></div>
        <div className="bg-rain-container__lightining"></div>
      </div>
      <style jsx global>{`
        .el-hover, .loading-container {
          &:hover {
            cursor: url('/static/images/rain-cursor.png'), auto;
          }
        }
        .border {
          border-color: #0080FF;
        }
        .border-selected {
          border-color: green!important;
        }
        .border-hover {
          border: 2px solid #fff0;
          &:hover {
            border: 2px solid #0080FF;
            opacity: .65;
          }
        }
        .background {
          background-color: rgba(71, 160, 213, .75);

          &-highlight {
            background-color: #0080FF;
          }
        }
      `}
      </style>
    </>
  )
}

export default BGRain
