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
        .background {
          background-color: rgba(71, 160, 213, .75);
        }
      `}
      </style>
    </>
  )
}

export default BGRain
