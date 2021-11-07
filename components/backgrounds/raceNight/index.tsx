const BGRaceNight = () => {
  return (
    <>
      <div className="bg-race-night-container">
        <div className="bg-race-night-container__surface"></div>
        <div className="bg-race-night-container__car">
          <img src="/static/images/Img_06.png" alt="car" />
        </div>
      </div>
      <style jsx global>{`
        .el-hover, .loading-container {
          &:hover {
            cursor: url('/static/images/night-cursor.png'), auto;
          }
        }
        .border {
          &.border-night {
            border-color: #e53838;
          }
        }
      `}
      </style>
    </>
  )
}

export default BGRaceNight
