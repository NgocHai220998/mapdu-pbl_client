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
          &.border-rain {
            border-color: #0080FF;
          }
        }
      `}
      </style>
    </>
  )
}

export default BGRain
